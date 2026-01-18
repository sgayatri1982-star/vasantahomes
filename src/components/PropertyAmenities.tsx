import { Check, Wifi, Car, Shield, Zap, Droplets, TreePine, Mountain, Home, Utensils } from 'lucide-react';

interface PropertyAmenitiesProps {
  amenities: string[];
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    
    if (amenityLower.includes('wifi') || amenityLower.includes('internet')) {
      return <Wifi className="h-5 w-5" />;
    }
    if (amenityLower.includes('parking') || amenityLower.includes('garage')) {
      return <Car className="h-5 w-5" />;
    }
    if (amenityLower.includes('security') || amenityLower.includes('guard')) {
      return <Shield className="h-5 w-5" />;
    }
    if (amenityLower.includes('power') || amenityLower.includes('electricity') || amenityLower.includes('backup')) {
      return <Zap className="h-5 w-5" />;
    }
    if (amenityLower.includes('water') || amenityLower.includes('swimming') || amenityLower.includes('pool')) {
      return <Droplets className="h-5 w-5" />;
    }
    if (amenityLower.includes('garden') || amenityLower.includes('organic') || amenityLower.includes('green')) {
      return <TreePine className="h-5 w-5" />;
    }
    if (amenityLower.includes('view') || amenityLower.includes('mountain') || amenityLower.includes('lake')) {
      return <Mountain className="h-5 w-5" />;
    }
    if (amenityLower.includes('kitchen') || amenityLower.includes('dining')) {
      return <Utensils className="h-5 w-5" />;
    }
    if (amenityLower.includes('gym') || amenityLower.includes('fitness') || amenityLower.includes('club')) {
      return <Home className="h-5 w-5" />;
    }
    
    return <Check className="h-5 w-5" />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Amenities & Features</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-vasanta-50 rounded-lg hover:bg-vasanta-100 transition-colors duration-300"
          >
            <div className="text-vasanta-600 flex-shrink-0">
              {getAmenityIcon(amenity)}
            </div>
            <span className="text-gray-800 font-medium">{amenity}</span>
          </div>
        ))}
      </div>

      {/* Amenity Categories */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-50 rounded-xl">
            <Shield className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Security & Safety</h4>
            <p className="text-sm text-gray-600">24/7 security and safety features</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-xl">
            <TreePine className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Natural Living</h4>
            <p className="text-sm text-gray-600">Green spaces and mountain views</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-xl">
            <Home className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Modern Comforts</h4>
            <p className="text-sm text-gray-600">Contemporary amenities and facilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAmenities;