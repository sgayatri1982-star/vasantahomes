import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  isLoading?: boolean;
}

export interface FilterState {
  search: string;
  city: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  status: string;
}

const SearchFilters = ({ onFiltersChange, isLoading }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    city: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    status: ''
  });

  const [showFilters, setShowFilters] = useState(false);

  const cities = ['Haldwani', 'Nainital', 'Bhimtal', 'Mukteshwar', 'Champawat', 'Lansdowne', 'Dharchula'];
  const propertyTypes = ['Villa', 'Flat', 'Plot', 'Farmhouse', 'Commercial'];
  const priceRanges = [
    { label: 'Under ₹10L', min: '0', max: '1000000' },
    { label: '₹10L - ₹25L', min: '1000000', max: '2500000' },
    { label: '₹25L - ₹50L', min: '2500000', max: '5000000' },
    { label: '₹50L - ₹1Cr', min: '5000000', max: '10000000' },
    { label: 'Above ₹1Cr', min: '10000000', max: '' }
  ];
  const bedroomOptions = ['1', '2', '3', '4', '5+'];
  const statusOptions = ['Available', 'Sold', 'Under Construction'];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceRangeChange = (range: { min: string; max: string }) => {
    const newFilters = { ...filters, minPrice: range.min, maxPrice: range.max };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      search: '',
      city: '',
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      status: ''
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by property name, locality, or city..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-vasanta-500 focus:border-transparent transition-all duration-300"
          disabled={isLoading}
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-vasanta-600 hover:text-vasanta-700 font-medium transition-colors duration-300"
          disabled={isLoading}
        >
          <Filter className="h-5 w-5" />
          <span>Advanced Filters</span>
        </button>
        
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300"
            disabled={isLoading}
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <select
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasanta-500 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasanta-500 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            >
              <option value="">All Types</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Bedrooms Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasanta-500 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            >
              <option value="">Any</option>
              {bedroomOptions.map(bedroom => (
                <option key={bedroom} value={bedroom}>{bedroom} BHK</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range, index) => (
                <button
                  key={index}
                  onClick={() => handlePriceRangeChange(range)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.minPrice === range.min && filters.maxPrice === range.max
                      ? 'bg-vasanta-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-vasanta-100'
                  }`}
                  disabled={isLoading}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasanta-500 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            >
              <option value="">All Status</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;