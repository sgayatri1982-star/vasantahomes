import { motion } from 'framer-motion';
import { Sunrise, Wind, Leaf, Heart, Coffee, Wifi, Car, Shield } from 'lucide-react';

const Lifestyle = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const lifestyleFeatures = [
    {
      icon: Sunrise,
      title: "Himalayan Sunrise",
      description: "Wake up to golden sunrises painting the snow-capped peaks",
      image: "/images/sunrise.jpg"
    },
    {
      icon: Wind,
      title: "Pure Mountain Air",
      description: "Breathe air that's 90% cleaner than urban environments",
      image: "/images/MountainAir.webp"
    },
    {
      icon: Leaf,
      title: "Organic Living",
      description: "Grow your own vegetables in fertile mountain soil",
      image: "/images/living.jpg"
    },
    {
      icon: Heart,
      title: "Peaceful Community",
      description: "Join a community that values slow living and mindfulness",
      image: "/images/community.jpg"
    }
  ];

  const modernAmenities = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Reliable connectivity for remote work and staying connected"
    },
    {
      icon: Car,
      title: "Easy Accessibility",
      description: "Well-connected roads from major cities, 4-6 hours from Delhi NCR"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Low crime rates and friendly local communities"
    },
    {
      icon: Coffee,
      title: "Modern Conveniences",
      description: "Nearby markets, healthcare facilities, and essential services"
    }
  ];

  const idealFor = [
    {
      title: "Remote Workers",
      description: "Perfect environment for productivity with natural inspiration",
      benefits: ["High-speed internet", "Quiet workspaces", "Fresh air boost creativity", "Better work-life balance"]
    },
    {
      title: "Retirement Planning",
      description: "Peaceful golden years in nature's lap",
      benefits: ["Clean air for health", "Low cost of living", "Excellent healthcare nearby", "Peaceful environment"]
    },
    {
      title: "Weekend Retreats",
      description: "Quick escapes from city chaos",
      benefits: ["4-6 hours from major cities", "Immediate stress relief", "Family bonding time", "Adventure activities"]
    },
    {
      title: "Investment Growth",
      description: "Smart financial planning with nature appreciation",
      benefits: ["Property value appreciation", "Rental income potential", "Low maintenance costs", "Tax benefits"]
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
            alt="Peaceful mountain lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Live the
            <span className="block text-emerald-400">Mountain Lifestyle</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Experience slow living, clean air, organic food, and the peace that only the Himalayas can offer. 
            This is life as it should be.
          </motion.p>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Makes Mountain Living Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the elements that transform daily life into a peaceful, healthy, and fulfilling experience
            </p>
          </motion.div>

          <div className="space-y-20">
            {lifestyleFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-emerald-100 rounded-2xl p-3">
                      <feature.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-4">
                    {/* Add specific benefits based on feature */}
                    {feature.title === "Himalayan Sunrise" && (
                      <div className="space-y-2">
                        <p className="text-gray-700">• Start your day with natural vitamin D</p>
                        <p className="text-gray-700">• Witness nature's daily masterpiece</p>
                        <p className="text-gray-700">• Natural circadian rhythm alignment</p>
                      </div>
                    )}
                    {feature.title === "Pure Mountain Air" && (
                      <div className="space-y-2">
                        <p className="text-gray-700">• 90% less pollution than cities</p>
                        <p className="text-gray-700">• Rich in oxygen and negative ions</p>
                        <p className="text-gray-700">• Natural boost to immunity</p>
                      </div>
                    )}
                    {feature.title === "Organic Living" && (
                      <div className="space-y-2">
                        <p className="text-gray-700">• Fertile soil for kitchen gardens</p>
                        <p className="text-gray-700">• Fresh, chemical-free produce</p>
                        <p className="text-gray-700">• Self-sustainable lifestyle</p>
                      </div>
                    )}
                    {feature.title === "Peaceful Community" && (
                      <div className="space-y-2">
                        <p className="text-gray-700">• Like-minded neighbors who value peace</p>
                        <p className="text-gray-700">• Strong community bonds</p>
                        <p className="text-gray-700">• Safe environment for families</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Amenities */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Modern Conveniences Meet Natural Beauty
            </h2>
            <p className="text-xl text-gray-600">
              Enjoy the best of both worlds - nature's peace with modern amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <amenity.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Perfect For Every Life Stage
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're planning for now or the future, mountain living adapts to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFor.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Health Benefits of Mountain Living
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Scientific studies show that mountain living provides measurable health improvements 
                for both body and mind.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 rounded-full p-2 mt-1">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Improved Cardiovascular Health</h3>
                    <p className="text-emerald-100">Lower blood pressure and improved heart function from clean air and natural exercise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 rounded-full p-2 mt-1">
                    <Wind className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Enhanced Respiratory Function</h3>
                    <p className="text-emerald-100">Cleaner air reduces respiratory issues and improves lung capacity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 rounded-full p-2 mt-1">
                    <Sunrise className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Better Mental Health</h3>
                    <p className="text-emerald-100">Reduced stress, anxiety, and depression from nature exposure and peaceful environment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-emerald-500 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">90%</div>
                <div className="text-emerald-100 text-sm">Cleaner Air Quality</div>
              </div>
              <div className="bg-emerald-500 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">65%</div>
                <div className="text-emerald-100 text-sm">Less Stress Levels</div>
              </div>
              <div className="bg-emerald-500 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">45%</div>
                <div className="text-emerald-100 text-sm">Better Sleep Quality</div>
              </div>
              <div className="bg-emerald-500 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">80%</div>
                <div className="text-emerald-100 text-sm">Improved Life Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Lifestyle;