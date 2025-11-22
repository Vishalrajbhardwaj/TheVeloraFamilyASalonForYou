import { useEffect, useState } from 'react';
import { Calendar, Users, DollarSign, CheckCircle, XCircle, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

export const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalBookings: 0,
    pendingBookings: 0,
    confirmedBookings: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          services:service_id(name, price),
          staff:staff_id(name)
        `)
        .order('booking_date', { ascending: false })
        .order('booking_time', { ascending: false });

      if (error) throw error;

      setBookings(data || []);

      const totalRevenue = data?.reduce((sum, booking) => {
        if (booking.status !== 'cancelled' && booking.services) {
          return sum + (booking.services.price || 0);
        }
        return sum;
      }, 0) || 0;

      setStats({
        totalBookings: data?.length || 0,
        pendingBookings: data?.filter((b) => b.status === 'pending').length || 0,
        confirmedBookings: data?.filter((b) => b.status === 'confirmed').length || 0,
        totalRevenue,
      });
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', bookingId);

      if (error) throw error;
      await loadData();
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Failed to update booking status');
    }
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
          <p className="text-gray-600 text-lg">Manage bookings and monitor salon performance</p>
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
