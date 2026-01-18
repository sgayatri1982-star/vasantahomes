import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Heart, MapPin } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import PropertyGallery from '../components/PropertyGallery';
import PropertyOverview from '../components/PropertyOverview';
import PropertyAmenities from '../components/PropertyAmenities';
import AgentInfo from '../components/AgentInfo';

const PropertyDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  useEffect(() => {
    const fetchProperty = async () => {
      if (!slug) return;

      setIsLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching property:', error);
          setError('Property not found');
          setProperty(null);
        } else {
          setProperty(data);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        setError('Failed to load property details');
        setProperty(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && property) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out this property: ${property.title} in ${property.city}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        alert('Property link copied to clipboard!');
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Property link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="h-64 bg-gray-200 rounded-2xl"></div>
                <div className="h-48 bg-gray-200 rounded-2xl"></div>
              </div>
              <div className="h-96 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Not Found</h1>
          <p className="text-gray-600 mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center bg-vasanta-600 hover:bg-vasanta-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    property.image1,
    property.image2,
    property.image3,
    property.image4,
    property.image5,
    property.image6,
    property.image7,
    property.image8,
    property.image9,
    property.image10,
  ];

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
          <Link
            to="/properties"
            className="inline-flex items-center text-vasanta-600 hover:text-vasanta-700 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Link>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-600 hover:text-vasanta-600 transition-colors duration-300"
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300">
              <Heart className="h-5 w-5" />
              <span>Save</span>
            </button>
          </div>
        </motion.div>

        {/* Property Gallery */}
        <motion.div variants={fadeInUp} className="mb-8">
          <PropertyGallery images={images} title={property.title} />
        </motion.div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={fadeInUp}>
              <PropertyOverview property={property} />
            </motion.div>
            
            {property.amenities && property.amenities.length > 0 && (
              <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
                <PropertyAmenities amenities={property.amenities} />
              </motion.div>
            )}

            {/* Location Map Placeholder */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Location</h3>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-vasanta-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map coming soon</p>
                    <p className="text-sm text-gray-500 mt-1">{property.locality}, {property.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
              <AgentInfo property={property} />
            </motion.div>

            {/* Similar Properties CTA */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-vasanta-50 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Looking for Similar Properties?
                </h4>
                <p className="text-gray-600 mb-4">
                  Explore more luxury properties in {property.city} and nearby areas.
                </p>
                <Link
                  to={`/properties?city=${property.city}`}
                  className="inline-flex items-center bg-vasanta-600 hover:bg-vasanta-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  View Similar Properties
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;