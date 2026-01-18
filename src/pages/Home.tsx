import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Home as HomeIcon, TreePine, Mountain, ArrowRight, Shield, Award, Users } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const propertyTypes = [
    {
      title: "Luxury Villas & Residences",
      description: "Elegant homes with mountain views",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      sizes: "2-4 BHK luxury homes"
    },
    {
      title: "Mountain Estates & Farmhouses",
      description: "Spacious estates surrounded by nature",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      sizes: "Large estates with gardens"
    },
    {
      title: "Premium Land & Plots",
      description: "Freehold land for custom homes",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      sizes: "1000 sqft - 5000 sqft plots"
    },
    {
      title: "Holiday Homes & Investments",
      description: "Rental-ready mountain retreats",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      sizes: "Turnkey investment properties"
    }
  ];

  const locations = [
    {
      name: "Haldwani",
      description: "Gateway to Kumaon",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Nainital",
      description: "Lake City Paradise",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Bhimtal",
      description: "Serene Lake Retreat",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mukteshwar",
      description: "Himalayan Heights",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: "100% Legal & Freehold",
      description: "Clear titles and transparent processes"
    },
    {
      icon: Award,
      title: "Curated Excellence",
      description: "Thoughtfully selected premium properties"
    },
    {
      icon: Users,
      title: "Trusted Legacy",
      description: "Serving discerning clients across India"
    }
  ];

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Himalayan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Luxury Rooted in
            <span className="block text-emerald-400">Nature</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Curated Himalayan Homes, Estates & Land Investments. Discover refined living across 
            Uttarakhand's most exclusive mountain destinations.
          </motion.p>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-lg text-emerald-200 mb-8 font-medium italic"
          >
            Inspired by Nature. Designed for Life.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/properties"
              className="bg-vasanta-600 hover:bg-vasanta-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-vasanta-500/25 hover:scale-105"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Book Site Visit
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <factor.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Thoughtfully Curated Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each offering reflects our philosophy of timeless design, natural harmony, and long-term value.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {propertyTypes.map((property, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-3">{property.description}</p>
                    <p className="text-vasanta-600 font-medium">{property.sizes}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Himalayan Destinations We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Haldwani • Nainital • Bhimtal • Lansdowne • Champawat • Dharchula • Kumaon & Garhwal Regions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Link to={`/properties?city=${location.name}`} className="block">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-semibold mb-1">{location.name}</h3>
                      <p className="text-gray-200">{location.description}</p>
                      <p className="text-vasanta-300 text-sm mt-2">View Properties →</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vasanta-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Begin Your Journey Home
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Whether you seek a sanctuary, an investment, or a legacy asset — Vasanta Homes is here to guide you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-vasanta-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Schedule a Private Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;