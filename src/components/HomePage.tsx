import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, Phone, Award, Users, Heart, Scissors, Star, Gift, TrendingUp, Instagram, Facebook, Youtube, MessageSquare } from 'lucide-react';

interface HomePageProps {
  onBookNow: () => void;
  onNavigateServices: (gender: string) => void;
  onNavigateGallery: () => void;
}

export const HomePage = ({ onBookNow, onNavigateServices, onNavigateGallery }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <SocialBar />
      <HeroSection onBookNow={onBookNow} />
      <OffersSection onBookNow={onBookNow} />
      <GenderSpecificServices onNavigateServices={onNavigateServices} />
      <WhyChooseUs />
      <GallerySection onNavigateGallery={onNavigateGallery} />

      <TestimonialsSection />
    </div>
  );
};

const SocialBar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-end space-y-4">
        {/* decorative connector */}
        <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-pink-500 rounded-l-full mr-3 shadow-sm" />

        <div className="flex flex-col items-end bg-white/85 backdrop-blur-sm rounded-l-full p-3 pr-0 shadow-xl border border-white/30">
          <SocialButton
            href="https://wa.me/918305335548"
            bg="bg-gradient-to-br from-green-500 to-green-700"
            aria="WhatsApp"
          >
            <MessageSquare className="h-5 w-5" />
          </SocialButton>

          <SocialButton
            href="https://www.instagram.com/the_velora_family_salon/"
            bg="bg-gradient-to-br from-pink-500 to-yellow-400"
            aria="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </SocialButton>

          <SocialButton
            href="#"
            bg="bg-blue-600"
            aria="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </SocialButton>

          <SocialButton
            href="https://www.youtube.com/@TheVeloraAFamilySalonForU"
            bg="bg-red-600"
            aria="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </SocialButton>
        </div>
      </div>

      <style>
        {`
          /* subtle 3D hover polish */
          .social-3d { transform-style: preserve-3d; }
          .social-3d .icon { transform: translateZ(0); transition: transform 220ms cubic-bezier(.2,.9,.2,1); }
          .social-3d:hover .icon { transform: translateZ(8px) rotateX(6deg); }
        `}
      </style>
    </div>
  );
};

const SocialButton = ({ href, bg, children, aria }: { href: string; bg: string; children: React.ReactNode; aria: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={aria}
    className="mb-3"
  >
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-md ${bg} transform-gpu transition-transform duration-300 hover:-translate-x-2 hover:scale-105 hover:shadow-2xl social-3d`}
    >
      <span className="icon">{children}</span>
    </div>
  </a>
);

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
      discount: "₹11,999",
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

const GenderSpecificServices = ({ onNavigateServices }: { onNavigateServices: (gender: string) => void }) => {
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

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeInUp flex flex-col h-full">
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
            <div className="p-6 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <ServiceTag icon="✂️" text="Haircut & Styling" />
                <ServiceTag icon="🪒" text="Beard Grooming" />
                <ServiceTag icon="💆" text="Head Massage" />
                <ServiceTag icon="🎨" text="Hair Coloring" />
                <ServiceTag icon="💇" text="Hair Spa" />
                <ServiceTag icon="✨" text="Facial Treatment" />
              </div>
              <button
                onClick={() => onNavigateServices('male')}
                className="mt-auto w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Men's Services
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeInUp flex flex-col h-full" style={{ animationDelay: '100ms' }}>
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
            <div className="p-6 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <ServiceTag icon="💇" text="Hair Styling" />
                <ServiceTag icon="💄" text="Makeup Services" />
                <ServiceTag icon="💅" text="Nail Art" />
                <ServiceTag icon="🎨" text="Hair Coloring" />
                <ServiceTag icon="✨" text="Bridal Makeup" />
                <ServiceTag icon="🧖" text="Spa Treatments" />
              </div>
              <button
                onClick={() => onNavigateServices('female')}
                className="mt-auto w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
      icon: <Award className="h-10 w-10" />,
      title: "Expert Professionals",
      description: "Highly trained stylists with years of international experience",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Premium Products",
      description: "Only genuine, international-quality products for best results",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Family Friendly",
      description: "Comfortable environment welcoming men, women, and kids",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Hygienic Standards",
      description: "Maintaining highest standards of cleanliness and safety",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Open 7 Days",
      description: "Book appointments at your convenience, every day",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Modern Techniques",
      description: "Latest trends and cutting-edge styling techniques",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-6 animate-bounce-slow">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent animate-gradient">
            Why Choose Velora?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're committed to making you look and feel your absolute best with our premium services and exceptional care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 p-8 animate-fadeInUp border border-white/50 relative overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${feature.color} opacity-10 rounded-bl-full`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg group-hover:shadow-xl transform group-hover:rotate-6 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '900ms' }}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse">
              ⭐ Trusted by 1000+ Happy Customers
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              🏆 Award-Winning Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GallerySection = ({ onNavigateGallery }: { onNavigateGallery: () => void }) => {
  const images = [
    "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const duplicatedImages = [...images, ...images];

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

        <div className="relative overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'calc(320px * 12 + 16px * 11)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                onClick={() => onNavigateGallery()}
              >
                <img
                  src={img}
                  alt={`Salon ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    {
      name: "Sneha Patel",
      rating: 5,
      text: "Outstanding service! The team is professional and the results are amazing.",
      service: "Hair Coloring",
    },
    {
      name: "Amit Singh",
      rating: 5,
      text: "Great family salon. Everyone in my family loves coming here!",
      service: "Family Package",
    },
    {
      name: "Kavita Jain",
      rating: 5,
      text: "The best spa experience I've ever had. Highly recommend their facials!",
      service: "Spa Treatment",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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

        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Reviews widget"
            src="https://widget.tagembed.com/312159?website=1"
            className="w-full h-full"
            style={{ border: 'none', overflow: 'auto' }}
          />
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