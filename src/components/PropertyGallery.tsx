import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PropertyGalleryProps {
  images: (string | undefined)[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter out empty/null images
  const validImages = images.filter(Boolean) as string[];

  if (validImages.length === 0) {
    return (
      <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🏔️</div>
          <p className="text-gray-500">No images available</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <>
      <div className="relative">
        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={validImages[currentImage]}
            alt={`${title} - Image ${currentImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Navigation Arrows */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {validImages.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {validImages.length > 1 && (
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {validImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === index
                    ? 'border-vasanta-600 ring-2 ring-vasanta-200'
                    : 'border-gray-200 hover:border-vasanta-300'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img
              src={validImages[currentImage]}
              alt={`${title} - Full size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {validImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;