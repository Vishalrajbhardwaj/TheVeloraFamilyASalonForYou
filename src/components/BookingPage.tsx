import { useState, useEffect } from 'react';
import { Calendar, Clock, User, MessageSquare, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { fetchStaff, Staff } from '../data/staff';
import { mockServices } from '../lib/mockServices';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
}

// Staff type imported from data/staff

interface BookingPageProps {
  preSelectedServiceId?: string;
}

export const BookingPage = ({ preSelectedServiceId }: BookingPageProps) => {
  const { user, profile } = useAuth();
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [bookingData, setBookingData] = useState({
    serviceId: preSelectedServiceId || '',
    staffId: '',
    date: '',
    time: '',
    customerName: '',
    notes: '',
  });

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // Prefill data only when user is logged in and reaches step 1
    if (step === 1 && user && profile) {
      setBookingData(prev => ({
        ...prev,
        customerName: profile.full_name || prev.customerName,
      }));
    }
  }, [step, profile, user]);

  const loadData = async () => {
    // Load all services from local mockServices
    setServices(mockServices as any);
    const loaded = await fetchStaff();
    setStaff(loaded);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking creation locally (no Supabase)
    try {
      await new Promise((res) => setTimeout(res, 500));
      setSuccess(true);

      // Build WhatsApp message with booking details and open chat
      const svc: any = services.find((s: any) => s.id === bookingData.serviceId);
      const st: any = staff.find((s: any) => s.id === bookingData.staffId);
      const message = [
        'New Booking Details:',
        `Service: ${svc ? svc.name : bookingData.serviceId}`,
        svc && svc.price ? `Price: ${svc.price}` : '',
        `Staff: ${st ? st.name : 'Any'}`,
        `Date: ${bookingData.date || '-'}`,
        `Time: ${bookingData.time || '-'}`,
        `Customer Name: ${bookingData.customerName || '-'}`,
        `Notes: ${bookingData.notes || '-'}`,
      ].filter(Boolean).join('\n');

      // Send to specific salon number (international format, no + or spaces)
      const salonPhone = '918305335548'; // replace with your salon number
      const waUrl = `https://wa.me/${salonPhone}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Error creating booking:', err);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 animate-bounce-slow">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been booked successfully. You will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => {
              // go back to booking form without full reload
              setSuccess(false);
              setStep(1);
              setBookingData({
                serviceId: preSelectedServiceId || '',
                staffId: '',
                date: '',
                time: '',
                customerName: '',
                notes: '',
              });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 text-lg">Reserve your slot in just a few steps</p>
        </div>

        <div className="flex justify-center mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step >= s
                    ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white scale-110'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {s}
              </div>
              {s < 2 && (
                <div
                  className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    step > s ? 'bg-gradient-to-r from-amber-500 to-pink-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-fadeInUp">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Select Service & Staff</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                  <select
                    value={bookingData.serviceId}
                    onChange={(e) => setBookingData({ ...bookingData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((s: any) => (
                      <option key={s.id} value={s.id}>
                        {s.name} {s.price ? `— ${s.price}` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Staff (optional)</label>
                  <select
                    value={bookingData.staffId}
                    onChange={(e) => setBookingData({ ...bookingData, staffId: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Any staff</option>
                    {staff.map((st: any) => (
                      <option key={st.id} value={st.id}>
                        {st.name} {st.specialization ? `— ${st.specialization}` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={bookingData.customerName}
                    onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!bookingData.serviceId}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Select Date & Time</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Choose Date *
                  </label>
                  <Flatpickr
                    value={bookingData.date ? new Date(bookingData.date) : undefined}
                    options={{
                      dateFormat: 'Y-m-d',
                      minDate: getMinDate(),
                      maxDate: getMaxDate(),
                    }}
                    onChange={(selected: any) => {
                      const d = selected && selected[0] ? (selected[0] as Date).toISOString().split('T')[0] : '';
                      setBookingData({ ...bookingData, date: d });
                    }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Choose Time Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setBookingData({ ...bookingData, time })}
                        className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                          bookingData.time === time
                            ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    placeholder="Additional notes (optional)"
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !bookingData.date || !bookingData.time}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h3>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={bookingData.customerName}
                    onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    placeholder="Additional notes (optional)"
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
