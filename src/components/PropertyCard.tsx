import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, Eye } from 'lucide-react';
import { Project } from '../lib/supabase';

interface PropertyCardProps {
  property: Project;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Sold':
        return 'bg-red-100 text-red-800';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image1 || 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
          {property.status}
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {property.property_type}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-2xl font-bold">{formatPrice(property.price)}</div>
        </div>
      </div>

      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.locality}, {property.city}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span>{property.area_sqft.toLocaleString()} sqft</span>
          </div>
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} BHK</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Bath</span>
            </div>
          )}
        </div>

        {/* Amenities Preview */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {property.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="bg-vasanta-100 text-vasanta-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {amenity}
                </span>
              ))}
              {property.amenities.length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{property.amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Link
          to={`/properties/${property.slug}`}
          className="w-full bg-vasanta-600 hover:bg-vasanta-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center flex items-center justify-center space-x-2 group"
        >
          <Eye className="h-4 w-4" />
          <span>View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;