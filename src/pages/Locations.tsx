import { motion } from 'framer-motion';
import { MapPin, Thermometer, Car, Mountain, Camera, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Locations = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const locations = [
    {
      name: "Haldwani",
      subtitle: "Gateway to Kumaon",
      description: "The perfect blend of urban convenience and natural beauty, Haldwani serves as your gateway to the Himalayas with excellent connectivity.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "15°C - 30°C",
      distance: "6 hours from Delhi",
      elevation: "424m above sea level",
      highlights: [
        "Major transportation hub with railway connectivity",
        "Excellent connectivity to all major cities",
        "Complete urban amenities and facilities",
        "Rapidly developing real estate market",
        "Pleasant year-round climate"
      ],
      attractions: [
        "Gaula Barrage",
        "Kali Chaur",
        "Hedakhan Ashram",
        "Nanak Matta Sahib"
      ],
      investment: "High growth potential due to rapid development and excellent connectivity"
    },
    {
      name: "Nainital",
      subtitle: "Lake City Paradise",
      description: "Famous for its pristine lake and colonial charm, Nainital offers luxury mountain living with established tourism infrastructure.",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "2°C - 28°C",
      distance: "7 hours from Delhi",
      elevation: "2,084m above sea level",
      highlights: [
        "Premier tourist destination with lake views",
        "Colonial heritage and architecture",
        "Excellent rental income potential",
        "Well-established infrastructure",
        "Cool climate perfect for summer retreats"
      ],
      attractions: [
        "Naini Lake",
        "Naina Devi Temple",
        "Mall Road",
        "Tiffin Top",
        "Snow View Point"
      ],
      investment: "Prime location with consistent rental income from tourism"
    },
    {
      name: "Bhimtal",
      subtitle: "Serene Lake Retreat",
      description: "A peaceful alternative to Nainital, Bhimtal offers tranquil lake living with better value and less crowding.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "5°C - 28°C",
      distance: "7.5 hours from Delhi",
      elevation: "1,370m above sea level",
      highlights: [
        "Larger and cleaner lake than Nainital",
        "Less crowded, more peaceful environment",
        "Better value for money properties",
        "Growing popularity among investors",
        "Excellent connectivity to Nainital"
      ],
      attractions: [
        "Bhimtal Lake",
        "Island Restaurant",
        "Butterfly Research Centre",
        "Hidimba Parvat",
        "Folk Culture Museum"
      ],
      investment: "Emerging destination with high growth potential and better affordability"
    },
    {
      name: "Mukteshwar",
      subtitle: "Himalayan Heights",
      description: "A hidden gem offering unparalleled 360-degree Himalayan views, perfect for luxury retreats and meditation centers.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "0°C - 25°C",
      distance: "8 hours from Delhi",
      elevation: "2,285m above sea level",
      highlights: [
        "360-degree spectacular Himalayan views",
        "Ultra-peaceful environment for meditation",
        "Adventure tourism and trekking base",
        "Organic fruit orchards and farming opportunities",
        "Premium location for luxury retreats"
      ],
      attractions: [
        "Mukteshwar Temple",
        "Chauli Ki Jali",
        "Bhalu Gaad Waterfalls",
        "Fruit Research Station",
        "Adventure camps"
      ],
      investment: "Emerging destination with high appreciation potential"
    },
    {
      name: "Lansdowne",
      subtitle: "Colonial Hill Station",
      description: "A pristine cantonment town with colonial architecture, offering peaceful living with military township security.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "8°C - 30°C",
      distance: "5.5 hours from Delhi",
      elevation: "1,700m above sea level",
      highlights: [
        "Well-maintained cantonment area",
        "Colonial architecture and heritage",
        "Excellent security and cleanliness",
        "Closer to Delhi than other hill stations",
        "Peaceful environment with oak and pine forests"
      ],
      attractions: [
        "Garhwali Mess",
        "Bhulla Lake",
        "Tip-in-Top Point",
        "St. Mary's Church",
        "Darwan Singh Museum"
      ],
      investment: "Stable investment with cantonment area advantages"
    },
    {
      name: "Champawat",
      subtitle: "Heritage Temple Town",
      description: "Rich in ancient history and spiritual significance, Champawat offers the most affordable mountain properties with cultural depth.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "5°C - 32°C",
      distance: "9 hours from Delhi",
      elevation: "1,615m above sea level",
      highlights: [
        "Ancient temples dating back centuries",
        "Most affordable Himalayan properties",
        "Rich cultural and spiritual heritage",
        "Peaceful valley with traditional lifestyle",
        "High appreciation potential due to development"
      ],
      attractions: [
        "Baleshwar Temple",
        "Ek Hathiya Naula",
        "Gwel Devta Temple",
        "Abbott Mount",
        "Purnagiri Temple"
      ],
      investment: "Best value for money with strong appreciation potential"
    },
    {
      name: "Dharchula",
      subtitle: "Border Town Adventure",
      description: "A strategic border town offering unique investment opportunities with adventure tourism potential and cross-border trade advantages.",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      climate: "10°C - 35°C",
      distance: "12 hours from Delhi",
      elevation: "915m above sea level",
      highlights: [
        "Strategic border location with Nepal",
        "Adventure tourism and trekking hub",
        "Unique cross-border trade opportunities",
        "Emerging destination for adventure seekers",
        "Government focus on border area development"
      ],
      attractions: [
        "Kali River",
        "Om Parvat Trek Base",
        "Narayan Ashram",
        "Chirkila Dam",
        "Nepal Border"
      ],
      investment: "Unique opportunity with government development focus and adventure tourism growth"
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Himalayan Destinations
              <span className="text-vasanta-600 block">We Serve</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Haldwani • Nainital • Bhimtal • Lansdowne • Champawat • Dharchula • Kumaon & Garhwal Regions. 
              Expandable to Himachal, Sikkim, and North-East.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mountain className="h-5 w-5 text-vasanta-600" />
                <span>Himalayan Views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="h-5 w-5 text-vasanta-600" />
                <span>Easy Accessibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-vasanta-600" />
                <span>Pleasant Climate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-serif font-bold mb-1">{location.name}</h3>
                      <p className="text-gray-200 text-lg">{location.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                        {location.name}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {location.description}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-stone-50 rounded-lg p-4 text-center">
                        <Thermometer className="h-6 w-6 text-vasanta-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{location.climate}</div>
                        <div className="text-sm text-gray-600">Temperature</div>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-4 text-center">
                        <Car className="h-6 w-6 text-vasanta-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{location.distance}</div>
                        <div className="text-sm text-gray-600">From Delhi</div>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-4 text-center">
                        <Mountain className="h-6 w-6 text-vasanta-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{location.elevation}</div>
                        <div className="text-sm text-gray-600">Elevation</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                      <div className="space-y-2">
                        {location.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-vasanta-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Investment Potential */}
                    <div className="bg-vasanta-50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-vasanta-800 mb-2 flex items-center">
                        <Compass className="h-5 w-5 mr-2" />
                        Investment Potential
                      </h4>
                      <p className="text-vasanta-700">{location.investment}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Tourist Attractions Nearby
            </h2>
            <p className="text-xl text-gray-600">
              Your investment property comes with access to incredible natural and cultural attractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, locationIndex) => (
              <motion.div
                key={locationIndex}
                variants={fadeInUp}
                transition={{ delay: locationIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="h-6 w-6 text-vasanta-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                </div>
                <div className="space-y-2">
                  {location.attractions.map((attraction, attractionIndex) => (
                    <div key={attractionIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-vasanta-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{attraction}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Choose What Suits You Best
            </h2>
            <p className="text-xl text-gray-600">
              Quick comparison to help you decide the perfect location for your mountain home
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Location</th>
                  <th className="py-4 px-6 text-left font-semibold">Best For</th>
                  <th className="py-4 px-6 text-left font-semibold">Climate</th>
                  <th className="py-4 px-6 text-left font-semibold">Connectivity</th>
                  <th className="py-4 px-6 text-left font-semibold">Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Haldwani</td>
                  <td className="py-4 px-6 text-gray-600">Gateway & Connectivity</td>
                  <td className="py-4 px-6 text-gray-600">Moderate</td>
                  <td className="py-4 px-6 text-vasanta-600">★★★★★</td>
                  <td className="py-4 px-6 text-vasanta-600">High Growth</td>
                </tr>
                <tr className="border-b border-gray-100 bg-stone-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Nainital</td>
                  <td className="py-4 px-6 text-gray-600">Luxury & Tourism</td>
                  <td className="py-4 px-6 text-gray-600">Cool</td>
                  <td className="py-4 px-6 text-vasanta-600">★★★★☆</td>
                  <td className="py-4 px-6 text-vasanta-600">Premium Value</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Bhimtal</td>
                  <td className="py-4 px-6 text-gray-600">Peaceful Retreat</td>
                  <td className="py-4 px-6 text-gray-600">Cool</td>
                  <td className="py-4 px-6 text-vasanta-600">★★★★☆</td>
                  <td className="py-4 px-6 text-vasanta-600">Emerging Value</td>
                </tr>
                <tr className="border-b border-gray-100 bg-stone-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Mukteshwar</td>
                  <td className="py-4 px-6 text-gray-600">Luxury Retreats</td>
                  <td className="py-4 px-6 text-gray-600">Cold</td>
                  <td className="py-4 px-6 text-vasanta-600">★★★☆☆</td>
                  <td className="py-4 px-6 text-vasanta-600">Ultra Premium</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Champawat</td>
                  <td className="py-4 px-6 text-gray-600">Heritage & Value</td>
                  <td className="py-4 px-6 text-gray-600">Moderate</td>
                  <td className="py-4 px-6 text-vasanta-600">★★★☆☆</td>
                  <td className="py-4 px-6 text-vasanta-600">Best Value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vasanta-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Explore These Destinations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Experience these beautiful Himalayan destinations yourself. We'll arrange personalized site visits 
              to help you choose the perfect location for your luxury mountain home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-vasanta-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Schedule Private Consultation
                <MapPin className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/properties"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-vasanta-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View All Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Locations;