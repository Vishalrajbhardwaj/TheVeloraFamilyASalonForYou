import { useEffect, useState } from 'react';
import { Scissors, Sparkles, Clock, IndianRupee } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Service {
  id: string;
  name: string;
  description: string | null;
  category: string;
  price: number;
  duration: number;
  gender: string;
}

interface ServicesPageProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesPage = ({ onBookService }: ServicesPageProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '✨' },
    { id: 'hair', name: 'Hair Care', icon: '💇' },
    { id: 'skin', name: 'Skin Care', icon: '✨' },
    { id: 'makeup', name: 'Makeup', icon: '💄' },
    { id: 'nail', name: 'Nail Care', icon: '💅' },
    { id: 'spa', name: 'Spa', icon: '🧖' },
    { id: 'grooming', name: 'Grooming', icon: '🪒' },
  ];

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our range of professional beauty and grooming services designed for the entire family
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-amber-500 to-pink-500" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        {service.gender === 'unisex' ? 'Unisex' : service.gender.charAt(0).toUpperCase() + service.gender.slice(1)}
                      </span>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-pink-100 rounded-xl">
                      <Scissors className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description || 'Professional service by expert stylists'}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Clock className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">{service.duration} mins</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xl font-bold text-gray-800">
                      <IndianRupee className="h-5 w-5" />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No services found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};
