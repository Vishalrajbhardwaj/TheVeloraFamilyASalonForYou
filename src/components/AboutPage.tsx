import { MapPin, Clock, Phone, Mail, Award, Users, Sparkles, Heart } from 'lucide-react';

export const AboutPage = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert Professionals',
      description: 'Highly skilled stylists with years of experience in beauty and grooming',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Premium Products',
      description: 'We use only genuine, international-quality products for best results',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Family Friendly',
      description: 'Services for men, women, and kids in a comfortable environment',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Hygienic Setup',
      description: 'Maintaining highest standards of cleanliness and hygiene',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              About Us
            </span>
          </div>
          <div className="mb-6 flex justify-center">
            <img
              src="https://i.imgur.com/8xZ9YqK.png"
              alt="The Velora Logo"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            The Velora
          </h1>
          <p className="text-xl md:text-2xl text-amber-600 mb-4 font-serif italic">
            A Family Salon for U
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Best Unisex Salon in Jabalpur - Your destination for premium beauty and grooming services
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Velora</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Located on Main Road, Gorakhpur Market (near Sampat Saree), The Velora Family Salon is a
              trusted unisex salon & beauty parlour in Jabalpur offering premium services for men, women
              & kids.
            </p>
            <p>
              We specialize in haircuts, styling, hair coloring, hair spa, facials, skin care, nail art,
              grooming services, party looks & bridal makeup in Jabalpur. Our expert stylists and bridal
              makeup artists deliver international-quality results using genuine products in a hygienic,
              family-friendly atmosphere.
            </p>
            <p>
              Whether it's daily grooming, a party makeover, or a complete bridal makeover, Velora is
              your one-stop destination, open 7 days a week.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-pink-100 rounded-xl text-amber-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">
                    Gorakhpur Main Road, Near Azad Chowk
                    <br />
                    Jabalpur, Madhya Pradesh 482001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:08305335548" className="text-gray-600 hover:text-amber-600">
                    083053 35548
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Website</p>
                  <a
                    href="http://thevelorafamilysalon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-600"
                  >
                    thevelorafamilysalon.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 animate-fadeInUp">
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
                <div key={day} className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">{day}</span>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
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

        <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Amenities & Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Women-Owned Business',
              'Wheelchair Accessible Parking',
              'Assistive Hearing Loop',
              'On-Site Services',
              'Free Parking',
              'Google Pay Accepted',
              'Cash Accepted',
              'Walk-ins Welcome',
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-700"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full" />
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
