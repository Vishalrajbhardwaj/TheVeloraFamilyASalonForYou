import { Award, Users, Sparkles, Heart, Instagram, Facebook } from 'lucide-react';
import STAFF_LIST from '../data/staff';

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
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🙏 Welcome to The Velora Family Salon</h2>
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">📖 Our Story</h3>
              <p className="text-gray-600">
                Founded with a vision to provide exceptional beauty and grooming services to the people of Jabalpur,
                The Velora Family Salon has been serving the community for years. Our journey began with a simple
                belief - that everyone deserves to look and feel their best, regardless of age or gender.
              </p>
              <p className="text-gray-600">
                What started as a small salon has grown into a trusted destination where families come together
                for their beauty needs. We take pride in being a women-owned business that values customer
                satisfaction above all else.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">💼 Our Commitment</h3>
              <p className="text-gray-600">
                At Velora, we are committed to excellence in every service we provide. Our team of skilled
                professionals stays updated with the latest trends and techniques in the beauty industry.
              </p>
              <p className="text-gray-600">
                We believe in using only genuine, high-quality products that are safe for our clients and
                the environment. Your trust and satisfaction are our greatest achievements.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose The Velora Family Salon?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-pink-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Experienced Team</h4>
                <p className="text-sm text-gray-600"> Over 5+ years of combined experience in beauty and grooming</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Quality Products</h4>
                <p className="text-sm text-gray-600">Genuine international brands and premium quality products</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Family Friendly</h4>
                <p className="text-sm text-gray-600">Comfortable environment for men, women, and children</p>
              </div>
            </div>
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



        <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-fadeInUp relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-20 h-20 bg-amber-300 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-2 rounded-full shadow-lg mb-4">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">Our Amenities</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Velora?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our commitment to excellence with these premium amenities designed for your comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '👩‍💼',
                  title: 'Women-Owned Business',
                  description: 'Proudly run by women entrepreneurs',
                  color: 'from-pink-500 to-rose-500',
                  bgColor: 'from-pink-50 to-rose-50',
                },
                {
                  icon: '♿',
                  title: 'Wheelchair Accessible',
                  description: 'Full accessibility for all guests',
                  color: 'from-blue-500 to-cyan-500',
                  bgColor: 'from-blue-50 to-cyan-50',
                },
                {
                  icon: '🎧',
                  title: 'Assistive Hearing Loop',
                  description: 'Advanced hearing assistance technology',
                  color: 'from-purple-500 to-indigo-500',
                  bgColor: 'from-purple-50 to-indigo-50',
                },
                {
                  icon: '💇',
                  title: 'On-Site Services',
                  description: 'Complete salon services under one roof',
                  color: 'from-amber-500 to-orange-500',
                  bgColor: 'from-amber-50 to-orange-50',
                },
                {
                  icon: '🚗',
                  title: 'Free Parking',
                  description: 'Convenient parking for all visitors',
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'from-green-50 to-emerald-50',
                },
                {
                  icon: '💳',
                  title: 'Digital Payments',
                  description: 'Google Pay, UPI, and all major cards accepted',
                  color: 'from-indigo-500 to-purple-500',
                  bgColor: 'from-indigo-50 to-purple-50',
                },
                {
                  icon: '💵',
                  title: 'Cash Accepted',
                  description: 'Traditional payment methods welcome',
                  color: 'from-yellow-500 to-amber-500',
                  bgColor: 'from-yellow-50 to-amber-50',
                },
                {
                  icon: '🚪',
                  title: 'Walk-ins Welcome',
                  description: 'No appointment needed for most services',
                  color: 'from-red-500 to-pink-500',
                  bgColor: 'from-red-50 to-pink-50',
                },
              ].map((amenity, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6 animate-fadeInUp border border-white/50 relative overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${amenity.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${amenity.color} opacity-10 rounded-bl-2xl`}></div>

                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${amenity.color} text-white rounded-2xl shadow-lg mb-4 text-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                      {amenity.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${amenity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
              <p className="text-lg text-gray-600 mb-6">
                Ready to experience the Velora difference?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="px-6 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  🏆 Award-Winning Service Excellence
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                  ❤️ Customer Satisfaction Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-fadeInUp">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-2 rounded-full shadow-lg mb-4">
              <Users className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Meet Our Team</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expert Professionals</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented team behind The Velora Family Salon, dedicated to providing exceptional beauty and grooming services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {STAFF_LIST.map((staff, index) => (
              <div
                key={staff.id}
                className="group h-96 w-full [perspective:1000px] animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-full w-full rounded-2xl shadow-lg [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                    <img
                      src={staff.photo || 'https://randomuser.me/api/portraits/men/1.jpg'}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-amber-100 to-pink-100 flex flex-col items-center justify-center p-6 text-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{staff.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{staff.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
