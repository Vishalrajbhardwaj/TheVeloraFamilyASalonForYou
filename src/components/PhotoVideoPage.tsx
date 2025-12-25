import { useState } from 'react';
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  category: string;
}

const PhotoVideoPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'photo',
      src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Salon Interior',
      description: 'Modern and elegant salon space',
      category: 'Interior'
    },
    {
      id: '2',
      type: 'video',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Hair Styling Demo',
      description: 'Professional hair styling techniques',
      category: 'Hair Styling'
    },
    {
      id: '3',
      type: 'photo',
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Men\'s Grooming',
      description: 'Complete men\'s grooming services',
      category: 'Grooming'
    },
    {
      id: '4',
      type: 'photo',
      src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bridal Makeup',
      description: 'Stunning bridal makeup transformations',
      category: 'Bridal'
    },
    {
      id: '5',
      type: 'video',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      thumbnail: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Spa Treatment',
      description: 'Relaxing spa experience',
      category: 'Spa'
    },
    {
      id: '6',
      type: 'photo',
      src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nail Art',
      description: 'Creative and beautiful nail designs',
      category: 'Nail Art'
    }
  ];

  const openModal = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setSelectedMedia(mediaItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevMedia = () => {
    const prevIndex = currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
    setSelectedMedia(mediaItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const categories = [...new Set(mediaItems.map(item => item.category))];

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const backToCategories = () => {
    setSelectedCategory(null);
    setSelectedMedia(null);
  };

  const filteredMediaItems = selectedCategory ? mediaItems.filter(item => item.category === selectedCategory) : mediaItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Photo & Video Showcase
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our work through stunning photos and videos showcasing our services and transformations
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryItems = mediaItems.filter(item => item.category === category);
              const firstItem = categoryItems[0];
              return (
                <div
                  key={category}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => selectCategory(category)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={firstItem.thumbnail || firstItem.src}
                      alt={category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
                        <p className="text-white text-sm">{categoryItems.length} items</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                    <p className="text-gray-600 text-sm">Click to explore {categoryItems.length} photos/videos</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={backToCategories}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Categories
              </button>
              <h2 className="text-2xl font-bold text-gray-800">{selectedCategory}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp">
              {filteredMediaItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openModal(item, mediaItems.indexOf(item))}
                >
                  <div className="aspect-video relative">
                    <img
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="h-16 w-16 text-white" />
                      ) : (
                        <ImageIcon className="h-16 w-16 text-white" />
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700 capitalize">{item.type}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          {/* Navigation arrows outside modal */}
          <button
            onClick={(e) => { e.stopPropagation(); prevMedia(); }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextMedia(); }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full max-h-96 object-contain"
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-96 object-contain"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMedia.title}</h3>
                {selectedMedia.description && (
                  <p className="text-gray-600">{selectedMedia.description}</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} of {mediaItems.length}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium capitalize">
                    {selectedMedia.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { PhotoVideoPage };
