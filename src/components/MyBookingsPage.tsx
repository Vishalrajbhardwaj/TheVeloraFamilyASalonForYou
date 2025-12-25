import { useEffect, useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  status: string;
  customer_name: string;
  customer_phone: string;
  notes: string | null;
  services: { name: string; price: number } | null;
  staff: { name: string } | null;
}

export const MyBookingsPage = () => {
  const { user, profile } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadBookings();
    }
  }, [user]);

  const loadBookings = async () => {
    // Load mock bookings locally (no Supabase)
    const mock: Booking[] = [
      {
        id: 'b1',
        booking_date: new Date().toISOString().split('T')[0],
        booking_time: '14:00',
        status: 'pending',
        customer_name: 'Local User',
        customer_phone: '0800000000',
        notes: null,
        services: { name: 'Men Haircut', price: 300 },
        staff: { name: 'Asha' },
      },
    ];
    setBookings(mock);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Loader className="h-5 w-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            My Bookings
          </h1>
          <p className="text-gray-600 text-lg">View and manage your appointments</p>
          {profile && (
            <div className="mt-4">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  profile.role === 'Admin'
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}
              >
                {profile.role === 'Admin' ? 'Admin Account' : 'User Account'}
              </span>
            </div>
          )}
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-12 text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No bookings yet</h3>
            <p className="text-gray-600">Start by booking your first appointment!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div
                key={booking.id}
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-amber-500 to-pink-500" />
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-800">
                          {booking.services?.name || 'Service'}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>

                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-amber-500" />
                          <span>
                            {new Date(booking.booking_date).toLocaleDateString('en-IN', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-pink-500" />
                          <span>{booking.booking_time}</span>
                        </div>
                        {booking.staff && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Staff: {booking.staff.name}</span>
                          </div>
                        )}
                        {booking.notes && (
                          <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">{booking.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {booking.services && (
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-800">₹{booking.services.price}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
