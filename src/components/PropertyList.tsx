import { Project } from '../lib/supabase';
import PropertyCard from './PropertyCard';

interface PropertyListProps {
  properties: Project[];
  isLoading: boolean;
}

const PropertyList = ({ properties, isLoading }: PropertyListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🏔️</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
          <p className="text-gray-600 mb-6">
            We couldn't find any properties matching your criteria. Try adjusting your filters or search terms.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-vasanta-600 hover:bg-vasanta-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Reset Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {properties.length} Properties Found
        </h2>
        <div className="text-sm text-gray-600">
          Showing luxury properties across Uttarakhand
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;