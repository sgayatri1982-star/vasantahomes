import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, User, Home } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    budget: '',
    message: '',
    visitDate: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98731 60180",
      action: "tel:+919873160180",
      description: "Speak directly with our property experts"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 98731 60180",
      action: "https://wa.me/919873160180",
      description: "Quick responses via WhatsApp"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@anandamestate.com",
      action: "mailto:info@anandamestate.com",
      description: "Detailed inquiries and documentation"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      details: "Haldwani, Uttarakhand",
      action: "#",
      description: "Meet us at our regional office"
    }
  ];

  const locations = ["Haldwani", "Nainital", "Mukteshwar", "Champawat"];
  const propertyTypes = ["Freehold Plots", "Farmhouses", "Camp Houses", "Canopy Homes"];
  const budgetRanges = ["Under ₹5 Lakhs", "₹5-10 Lakhs", "₹10-20 Lakhs", "₹20+ Lakhs"];

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Let's Find Your Perfect
              <span className="block">Mountain Home</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to own a piece of the Himalayas? Our team is here to guide you through every step of 
              finding and securing your dream property in Uttarakhand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="bg-emerald-100 rounded-2xl p-3 w-fit mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <contact.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <a
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : undefined}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-emerald-600 hover:text-emerald-700 font-medium block mb-2 transition-colors duration-300"
                >
                  {contact.details}
                </a>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with personalized 
                  property recommendations and site visit options.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 98731 60180"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your requirements, timeline, or any specific questions..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Enquiry</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-emerald-600 font-medium mt-3">
                    Site visits available 7 days a week
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Personal Consultation</p>
                      <p className="text-gray-600 text-sm">Detailed discussion about your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Home className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Property Recommendations</p>
                      <p className="text-gray-600 text-sm">Curated options based on your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Site Visit Planning</p>
                      <p className="text-gray-600 text-sm">Organized tours with transportation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                <p className="text-gray-600 mb-3">
                  For urgent property matters or site visit emergencies:
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98731 60180</span>
                </a>
                <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Premium properties across the most beautiful locations in Uttarakhand
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-stone-100 rounded-2xl p-8 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="text-center">
                  <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {location.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{location}</h3>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              All locations are well-connected by road and offer stunning natural beauty, 
              legal clarity, and excellent investment potential.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;