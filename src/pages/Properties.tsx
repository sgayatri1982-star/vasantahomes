import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase, Project } from '../lib/supabase';
import SearchFilters, { FilterState } from '../components/SearchFilters';
import PropertyList from '../components/PropertyList';

const Properties = () => {
  const [properties, setProperties] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    city: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    status: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const fetchProperties = async (currentFilters: FilterState) => {
    setIsLoading(true);
    
    try {
      let query = supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply search filter
      if (currentFilters.search) {
        query = query.or(`title.ilike.%${currentFilters.search}%,locality.ilike.%${currentFilters.search}%,city.ilike.%${currentFilters.search}%`);
      }

      // Apply city filter
      if (currentFilters.city) {
        query = query.eq('city', currentFilters.city);
      }

      // Apply property type filter
      if (currentFilters.propertyType) {
        query = query.eq('property_type', currentFilters.propertyType);
      }

      // Apply price range filters
      if (currentFilters.minPrice) {
        query = query.gte('price', parseInt(currentFilters.minPrice));
      }
      if (currentFilters.maxPrice) {
        query = query.lte('price', parseInt(currentFilters.maxPrice));
      }

      // Apply bedrooms filter
      if (currentFilters.bedrooms) {
        const bedroomCount = currentFilters.bedrooms === '5+' ? 5 : parseInt(currentFilters.bedrooms);
        if (currentFilters.bedrooms === '5+') {
          query = query.gte('bedrooms', bedroomCount);
        } else {
          query = query.eq('bedrooms', bedroomCount);
        }
      }

      // Apply status filter
      if (currentFilters.status) {
        query = query.eq('status', currentFilters.status);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
      } else {
        setProperties(data || []);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(filters);
  }, [filters]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Perfect
              <span className="text-vasanta-600 block">Himalayan Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Explore our curated collection of luxury properties across Uttarakhand's most pristine destinations. 
              From elegant villas to premium land investments, find your gateway to elevated mountain living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp}>
            <SearchFilters 
              onFiltersChange={handleFiltersChange}
              isLoading={isLoading}
            />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <PropertyList 
              properties={properties}
              isLoading={isLoading}
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Properties;