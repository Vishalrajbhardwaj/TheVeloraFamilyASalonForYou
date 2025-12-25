import { useEffect, useState } from 'react';
import { Calendar, Users, DollarSign, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  status: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  notes: string | null;
  services: { name: string; price: number } | null;
  staff: { name: string } | null;
}

interface Stats {
  totalBookings: number;
  pendingBookings: number;
  confirmedBookings: number;
  totalRevenue: number;
}

interface UserProfile {
  id: string;
  full_name: string;
  phone: string | null;
  role_id: string;
  role_name?: 'user' | 'Staff' | 'Manager' | 'Admin';
  created_at: string;
  updated_at: string;
}

export const AdminDashboard = () => {
  const { profile } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalBookings: 0,
    pendingBookings: 0,
    confirmedBookings: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'bookings' | 'users'>('bookings');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Use mock data locally instead of Supabase
    const mockBookings: Booking[] = [
      {
        id: 'b1',
        booking_date: new Date().toISOString().split('T')[0],
        booking_time: '15:00',
        status: 'pending',
        customer_name: 'Local User',
        customer_phone: '0800000000',
        customer_email: 'local@example.com',
        notes: null,
        services: { name: 'Men Haircut', price: 300 },
        staff: { name: 'Asha' },
      },
    ];

    const mockUsers: UserProfile[] = [
      { id: 'u1', full_name: 'Local User', phone: '0800000000', role_id: 'r1', role_name: 'user', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    ];

    setBookings(mockBookings);
    setUsers(mockUsers);
    setStats({
      totalBookings: mockBookings.length,
      pendingBookings: mockBookings.filter(b => b.status === 'pending').length,
      confirmedBookings: mockBookings.filter(b => b.status === 'confirmed').length,
      totalRevenue: mockBookings.reduce((s, b) => s + (b.services?.price || 0), 0),
    });
    setLoading(false);
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    // Update locally
    setBookings((prev) => prev.map(b => (b.id === bookingId ? { ...b, status: newStatus } : b)));
    setStats((prev) => ({
      ...prev,
      pendingBookings: prev.pendingBookings - (newStatus === 'confirmed' ? 1 : 0),
    }));
  };

  const updateUserRole = async (userId: string, newRoleName: 'user' | 'Staff' | 'Manager' | 'Admin') => {
    // Update locally
    setUsers((prev) => prev.map(u => (u.id === userId ? { ...u, role_name: newRoleName } : u)));
  };

  const filteredBookings =
    filter === 'all' ? bookings : bookings.filter((b) => b.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-24 px-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage bookings, users, and monitor salon performance</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'bookings'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {profile?.role === 'user' ? 'My Bookings' : 'Bookings Management'}
            </button>
            {(profile?.role === 'Admin' || profile?.role === 'Manager') && (
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === 'users'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                User Management
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Calendar className="h-6 w-6" />}
            title="Total Bookings"
            value={stats.totalBookings}
            color="from-blue-500 to-cyan-500"
          />
          <StatCard
            icon={<Clock className="h-6 w-6" />}
            title="Pending"
            value={stats.pendingBookings}
            color="from-yellow-500 to-orange-500"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="Confirmed"
            value={stats.confirmedBookings}
            color="from-green-500 to-emerald-500"
          />
          <StatCard
            icon={<DollarSign className="h-6 w-6" />}
            title="Revenue"
            value={`₹${stats.totalRevenue}`}
            color="from-purple-500 to-pink-500"
          />
        </div>

        {activeTab === 'bookings' && (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 animate-fadeInUp">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">All Bookings</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'All' },
                  { value: 'pending', label: 'Pending' },
                  { value: 'confirmed', label: 'Confirmed' },
                  { value: 'completed', label: 'Completed' },
                  { value: 'cancelled', label: 'Cancelled' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      filter === option.value
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredBookings.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No bookings found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Service</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date & Time</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Staff</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-gray-800">{booking.customer_name}</p>
                            <p className="text-sm text-gray-600">{booking.customer_phone}</p>
                            <p className="text-xs text-gray-500">{booking.customer_email}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-gray-800">
                              {booking.services?.name || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-600">
                              ₹{booking.services?.price || 0}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-gray-800">
                              {new Date(booking.booking_date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </p>
                            <p className="text-sm text-gray-600">{booking.booking_time}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-gray-700">{booking.staff?.name || 'Any'}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : booking.status === 'completed'
                                ? 'bg-blue-100 text-blue-700'
                                : booking.status === 'cancelled'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-2">
                            {booking.status === 'pending' && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors"
                              >
                                Confirm
                              </button>
                            )}
                            {booking.status === 'confirmed' && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'completed')}
                                className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition-colors"
                              >
                                Complete
                              </button>
                            )}
                            {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs hover:bg-red-700 transition-colors"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 animate-fadeInUp">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">User Management</h2>
            </div>

            {users.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No users found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user: UserProfile) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <p className="font-medium text-gray-800">{user.full_name}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-gray-700">{user.id}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-gray-700">{user.phone || 'N/A'}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              user.role_name === 'Admin'
                                ? 'bg-purple-100 text-purple-700'
                                : user.role_name === 'Manager'
                                ? 'bg-red-100 text-red-700'
                                : user.role_name === 'Staff'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {user.role_name}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-sm text-gray-600">
                            {new Date(user.created_at).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-2">
                            {user.role_name !== 'user' && profile?.role === 'Admin' && (
                              <button
                                onClick={() => updateUserRole(user.id, 'user')}
                                className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition-colors"
                              >
                                Make User
                              </button>
                            )}
                            {user.role_name !== 'Staff' && (profile?.role === 'Admin' || profile?.role === 'Manager') && (
                              <button
                                onClick={() => updateUserRole(user.id, 'Staff')}
                                className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors"
                              >
                                Make Staff
                              </button>
                            )}
                            {user.role_name !== 'Manager' && profile?.role === 'Admin' && (
                              <button
                                onClick={() => updateUserRole(user.id, 'Manager')}
                                className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs hover:bg-red-700 transition-colors"
                              >
                                Make Manager
                              </button>
                            )}
                            {user.role_name !== 'Admin' && profile?.role === 'Admin' && (
                              <button
                                onClick={() => updateUserRole(user.id, 'Admin')}
                                className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs hover:bg-purple-700 transition-colors"
                              >
                                Make Admin
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
}) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6">
    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${color} text-white mb-4`}>
      {icon}
    </div>
    <p className="text-gray-600 text-sm mb-1">{title}</p>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);
