import { MapPin, Bed, Bath, Maximize, Calendar, Tag, Home } from 'lucide-react';
import { Project } from '../lib/supabase';

interface PropertyOverviewProps {
  property: Project;
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Crore`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lakh`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Sold':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="border-b border-gray-100 pb-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{property.locality}, {property.city}</span>
            </div>
            {property.address && (
              <p className="text-gray-500">{property.address}</p>
            )}
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-vasanta-600 mb-2">
              {formatPrice(property.price)}
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(property.status)}`}>
              {property.status}
            </div>
          </div>
        </div>
      </div>

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <Maximize className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{property.area_sqft.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Sq Ft</div>
        </div>
        
        {property.bedrooms > 0 && (
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Bed className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
            <div className="text-sm text-gray-600">Bedrooms</div>
          </div>
        )}
        
        {property.bathrooms > 0 && (
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Bath className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
            <div className="text-sm text-gray-600">Bathrooms</div>
          </div>
        )}
        
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <Home className="h-8 w-8 text-vasanta-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-gray-900">{property.property_type}</div>
          <div className="text-sm text-gray-600">Property Type</div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Property Details</h3>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Furnishing Status</span>
            <span className="font-medium text-gray-900">{property.furnishing_status}</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Property Type</span>
            <span className="font-medium text-gray-900">{property.property_type}</span>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Listed On</span>
            <span className="font-medium text-gray-900">{formatDate(property.listed_on)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Location Details</h3>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">City</span>
            <span className="font-medium text-gray-900">{property.city}</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Locality</span>
            <span className="font-medium text-gray-900">{property.locality}</span>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">State</span>
            <span className="font-medium text-gray-900">Uttarakhand</span>
          </div>
        </div>
      </div>

      {/* Description */}
      {property.description && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Property</h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyOverview;