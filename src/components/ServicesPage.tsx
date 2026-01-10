import { useEffect, useState } from 'react';
import { Scissors, Sparkles, Clock, IndianRupee, Search } from 'lucide-react';
import { mockServices, Service } from '../lib/mockServices';

interface ServicesPageProps {
  onBookService: (serviceId: string) => void;
  onOpenList?: () => void;
  selectedGender?: string;
}

export const ServicesPage = ({ onBookService, selectedGender }: ServicesPageProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Service', icon: '✨' },
    { id: 'bleach', name: 'BLEACH', icon: '🧴' },
    { id: 'body-face-polishing', name: 'BODY & FACE POLISHING', icon: '✨' },
    { id: 'clean-up', name: 'CLEAN-UP', icon: '🧽' },
    { id: 'facial', name: 'FACIAL', icon: '💆' },
    { id: 'hair-care', name: 'HAIR- CARE', icon: '💇' },
    { id: 'hair-color', name: 'HAIR COLOR', icon: '🎨' },
    { id: 'hair-cut-men', name: 'HAIR CUT (Men)', icon: '✂️' },
    { id: 'hair-cut-women', name: 'HAIR CUT (Women)', icon: '✂️' },
    { id: 'hair-spa', name: 'HAIR SPA', icon: '🧖' },
    { id: 'hair-treatments', name: 'HAIR TREATMENTS', icon: '🧴' },
    { id: 'hair-style', name: 'Hair Style', icon: '💇‍♀️' },
    { id: 'makeup', name: 'MAKEUP', icon: '💄' },
    { id: 'manicure-pedicure', name: 'MENICURE & PEDICURE', icon: '💅' },
    { id: 'nail-art', name: 'NAIL ART', icon: '🎨' },
    { id: 'shampoo', name: 'SHAMPOO', icon: '🧴' },
    { id: 'waxing', name: 'WAXING', icon: '🕯️' },
  ];

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    // load from shared mock
    setServices(mockServices);
    setLoading(false);
  };

  const filteredServices = (() => {
    let filtered = services;

    // Filter by gender if selected
    if (selectedGender) {
      filtered = filtered.filter(s => s.gender === selectedGender || s.gender === 'unisex');
    }

    if (selectedCategory === 'all') {
      // For 'all' category, apply search directly
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(s => {
          const hay = (s.name + ' ' + (s.description || '')).toLowerCase();
          return hay.includes(query);
        });
      }
      return filtered;
    }

    // strict match first
    let categoryFiltered = filtered.filter(s => s.category === selectedCategory);

    // If no strict matches, use keyword-based matching
    if (!categoryFiltered.length) {
      const keywordsMap: Record<string, string[]> = {
        'hair-care': ['hair', 'locks', 'shampoo', 'cut', 'trim', 'style', 'threading'],
        'facial': ['face', 'facial', 'cheek', 'forehead', 'chin', 'nose', 'lip'],
        'body-face-polishing': ['polish', 'body', 'face', 'skin'],
        'clean-up': ['clean', 'cleanup', 'teenagers', 'whitening', 'acne', 'under eye'],
        'hair-color': ['color', 'touch up', 'global', 'balayage', 'highlights'],
        'hair-cut-men': ['men', 'male', 'basic cut', 'fade', 'pompadour', 'advanced cut', 'kids'],
        'hair-cut-women': ['women', 'female', 'basic cut', 'u cut', 'v cut', 'layers'],
        'hair-spa': ['spa', 'moisturizing', 'protein', 'detox', 'hair fall', 'anti dandruff', 'korean'],
        'hair-treatments': ['treatment', 'olaplex', 'nanoplastia', 'botox', 'botoplex', 'keratin', 'rebonding', 'smoothening'],
        'hair-style': ['style', 'hair style'],
        'makeup': ['makeup', 'bridal', 'hd', 'basic', 'saree', 'dupatta', 'draping'],
        'manicure-pedicure': ['manicure', 'pedicure', 'basic', 'spa', 'crystal', 'deluxe', 'luxury', 'velora'],
        'nail-art': ['nail art', 'glitter', 'chrome', 'marble', '3d', 'jewellery', 'gel', 'acrylic', 'extensions', 'removal'],
        'shampoo': ['shampoo', 'hair wash', 'qod', 'olaplex', 'l\'oréal', 'schwarzkopf'],
        'waxing': ['wax', 'bikini', 'full body', 'underarms', 'hand', 'leg', 'front', 'back', 'chest', 'half', 'full'],
        'bleach': ['bleach', 'd-tan', 'face', 'neck', 'hand', 'front', 'back', 'leg', 'body']
      };

      const keywords = keywordsMap[selectedCategory] || [selectedCategory];
      categoryFiltered = filtered.filter(s => {
        const hay = (s.name + ' ' + (s.description || '')).toLowerCase();
        return keywords.some(k => hay.includes(k.toLowerCase()));
      });
    }

    // Apply search filter within the category results
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      categoryFiltered = categoryFiltered.filter(s => {
        const hay = (s.name + ' ' + (s.description || '')).toLowerCase();
        return hay.includes(query);
      });
    }

    return categoryFiltered;
  })();

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

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-12 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {!searchQuery.trim() && (
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
        )}

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
