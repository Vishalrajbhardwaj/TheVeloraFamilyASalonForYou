import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check, Sparkles } from 'lucide-react';

export const ContactPage = () => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate successful submission locally (no Supabase)
      await new Promise((res) => setTimeout(res, 400));
      setIsSubmitted(true);
      setInquiryForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Error submitting inquiry:', error);
      alert('Failed to send inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or need to book an appointment? We're here to help you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-amber-50 to-pink-50 rounded-2xl">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-pink-100 rounded-xl text-amber-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Location</p>
                  <p className="text-gray-600 leading-relaxed">
                    Gorakhpur Main Road, Near Azad Chowk
                    <br />
                    Jabalpur, Madhya Pradesh 482001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl text-pink-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phone</p>
                  <a href="tel:08305335548" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                    083053 35548
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-amber-100 rounded-xl text-purple-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Website</p>
                  <a
                    href="http://thevelorafamilysalon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    thevelorafamilysalon.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Opening Hours</h3>
              <div className="space-y-3">
                {[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ].map((day) => (
                  <div key={day} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-800">{day}</span>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span>11:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Special Hours:</strong>
                    <br />
                    Vijayadashami (2 Oct 2025): 11:00 AM - 9:00 PM
                    <br />
                    Diwali (20 Oct 2025): 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us an Inquiry</h2>
            <p className="text-gray-600 mb-6">
              Have a question or need more information? Fill out the form below and we'll get back to you soon.
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-green-800 font-medium">Thank you! Your inquiry has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  placeholder="Your Message"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Us Today</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Located in the heart of Jabalpur, we're easily accessible and ready to welcome you to our family-friendly salon.
            </p>

            {/* Map Section */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=Gorakhpur%20Main%20Road%2C%20Near%20Azad%20Chowk%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482001&output=embed&z=15"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Velora Family Salon Location"
                    style={{ border: 0 }}>
                  </iframe>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-pink-100 px-4 py-2 rounded-full">
                <span className="text-2xl">🚗</span>
                <span className="text-sm font-medium text-gray-700">Free Parking Available</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full">
                <span className="text-2xl">♿</span>
                <span className="text-sm font-medium text-gray-700">Wheelchair Accessible</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-amber-100 px-4 py-2 rounded-full">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <span className="text-sm font-medium text-gray-700">Family Friendly Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
