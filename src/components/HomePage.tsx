import { Sparkles, MapPin, Clock, Phone, Award, Users, Heart, Scissors, Star, Gift, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onBookNow: () => void;
  onNavigateServices: () => void;
}

export const HomePage = ({ onBookNow, onNavigateServices }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection onBookNow={onBookNow} />
      <OffersSection onBookNow={onBookNow} />
      <GenderSpecificServices onNavigateServices={onNavigateServices} />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <CTASection onBookNow={onBookNow} />
    </div>
  );
};

const HeroSection = ({ onBookNow }: { onBookNow: () => void }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-pink-900/85 to-purple-900/90 z-10" />
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-transparent to-pink-200/20 animate-float z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl mb-8 animate-bounce-slow">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              Premium Unisex Salon in Jabalpur
            </span>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="https://i.imgur.com/8xZ9YqK.png"
              alt="The Velora Logo"
              className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl animate-fadeInUp"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-tight text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
              The Velora
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-amber-200 mb-6 font-serif italic drop-shadow-lg">
            A Family Salon for U
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Experience world-class beauty and grooming services for the entire family
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12 text-white/90">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">Expert Stylists</span>
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">Premium Products</span>
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-pink-400" />
              <span className="text-sm">Family Friendly</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onBookNow}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book Appointment Now</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <a
              href="tel:08305335548"
              className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: 083053 35548</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <InfoCard
              icon={<MapPin className="h-6 w-6 text-amber-500" />}
              title="Visit Us"
              description="Gorakhpur Main Road, Near Azad Chowk, Jabalpur"
            />
            <InfoCard
              icon={<Clock className="h-6 w-6 text-pink-500" />}
              title="Open Daily"
              description="11:00 AM - 9:00 PM (All Days)"
            />
            <InfoCard
              icon={<Users className="h-6 w-6 text-purple-500" />}
              title="For Everyone"
              description="Men, Women & Kids Welcome"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

const OffersSection = ({ onBookNow }: { onBookNow: () => void }) => {
  const offers = [
    {
      title: "First Visit Special",
      discount: "20% OFF",
      description: "On all services for new customers",
      icon: <Gift className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Bridal Package",
      discount: "₹15,000",
      description: "Complete bridal makeup & pre-bridal services",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Family Package",
      discount: "₹2,999",
      description: "Services for 4 family members",
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Monthly Membership",
      discount: "Save 30%",
      description: "Unlimited haircuts + 2 spa sessions",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-2 rounded-full shadow-lg mb-4">
            <Gift className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">
              Limited Time Offers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Special Offers & Packages
          </h2>
          <p className="text-gray-600 text-lg">
            Exclusive deals designed just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${offer.color}`} />
              <div className="p-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${offer.color} text-white mb-4`}>
                  {offer.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                  {offer.discount}
                </div>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <button
                  onClick={onBookNow}
                  className={`w-full py-3 bg-gradient-to-r ${offer.color} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GenderSpecificServices = ({ onNavigateServices }: { onNavigateServices: () => void }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Services for Everyone
          </h2>
          <p className="text-gray-600 text-lg">
            Specialized services tailored for men, women, and kids
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeInUp">
            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Men's Salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white mb-2">For Men</h3>
                <p className="text-blue-100">Premium grooming services</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <ServiceTag icon="✂️" text="Haircut & Styling" />
                <ServiceTag icon="🪒" text="Beard Grooming" />
                <ServiceTag icon="💆" text="Head Massage" />
                <ServiceTag icon="🎨" text="Hair Coloring" />
                <ServiceTag icon="💇" text="Hair Spa" />
                <ServiceTag icon="✨" text="Facial Treatment" />
              </div>
              <button
                onClick={onNavigateServices}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Men's Services
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Women's Salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white mb-2">For Women</h3>
                <p className="text-pink-100">Complete beauty solutions</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <ServiceTag icon="💇" text="Hair Styling" />
                <ServiceTag icon="💄" text="Makeup Services" />
                <ServiceTag icon="💅" text="Nail Art" />
                <ServiceTag icon="🎨" text="Hair Coloring" />
                <ServiceTag icon="✨" text="Bridal Makeup" />
                <ServiceTag icon="🧖" text="Spa Treatments" />
              </div>
              <button
                onClick={onNavigateServices}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Women's Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Professionals",
      description: "Highly trained stylists with years of international experience",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Premium Products",
      description: "Only genuine, international-quality products for best results",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Family Friendly",
      description: "Comfortable environment welcoming men, women, and kids",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Hygienic Standards",
      description: "Maintaining highest standards of cleanliness and safety",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Open 7 Days",
      description: "Book appointments at your convenience, every day",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Modern Techniques",
      description: "Latest trends and cutting-edge styling techniques",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Velora?
          </h2>
          <p className="text-gray-600 text-lg">
            We're committed to making you look and feel your absolute best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Our Salon Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Take a glimpse of our beautiful salon and happy customers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={img}
                alt={`Salon ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Best salon in Jabalpur! The bridal makeup was absolutely stunning. Highly recommended!",
      service: "Bridal Makeup",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Professional service and great atmosphere. My regular spot for haircuts now.",
      service: "Men's Haircut",
    },
    {
      name: "Anjali Verma",
      rating: 5,
      text: "Amazing hair spa experience! Staff is very friendly and skilled. Will come again.",
      service: "Hair Spa",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onBookNow }: { onBookNow: () => void }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment today and experience the Velora difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <Sparkles className="h-5 w-5" />
              </span>
            </button>
            <a
              href="tel:08305335548"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="p-3 bg-white rounded-full shadow-lg">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const ServiceTag = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-gray-700">{text}</span>
  </div>
);
