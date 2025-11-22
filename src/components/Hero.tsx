import { Sparkles, MapPin, Clock, Phone } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-200/30 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 animate-bounce-slow">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              Premium Unisex Salon in Jabalpur
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              The Velora
            </span>
            <br />
            <span className="text-gray-800">Family Salon</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience world-class beauty and grooming services for the entire family.
            From haircuts to bridal makeup, we make you look and feel amazing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onBookNow}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <a
              href="tel:08305335548"
              className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200"
            >
              <span className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <InfoCard
              icon={<MapPin className="h-6 w-6 text-amber-600" />}
              title="Visit Us"
              description="Gorakhpur Main Road, Near Azad Chowk, Jabalpur"
            />
            <InfoCard
              icon={<Clock className="h-6 w-6 text-pink-600" />}
              title="Open Daily"
              description="11:00 AM - 9:00 PM (All Days)"
            />
            <InfoCard
              icon={<Phone className="h-6 w-6 text-purple-600" />}
              title="Call Us"
              description="083053 35548"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="p-3 bg-gradient-to-br from-amber-100 to-pink-100 rounded-full">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);
