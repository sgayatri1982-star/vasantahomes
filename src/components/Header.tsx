import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { 
      name: 'Locations', 
      href: '/locations',
      submenu: [
        { name: 'All Locations', href: '/locations' },
        { name: 'Haldwani', href: '/properties?city=Haldwani' },
        { name: 'Nainital', href: '/properties?city=Nainital' },
        { name: 'Bhimtal', href: '/properties?city=Bhimtal' },
        { name: 'Mukteshwar', href: '/properties?city=Mukteshwar' },
        { name: 'Champawat', href: '/properties?city=Champawat' },
      ]
    },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-emerald-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Mountain className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-emerald-600' : 'text-white'
            } group-hover:text-emerald-500`} />
            <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Vasanta Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-emerald-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${
                    location.pathname === item.href || (item.submenu && item.submenu.some(sub => location.pathname === sub.href)) ? 'text-emerald-500' : ''
                  }`}
                >
                  {item.name}
                  {(location.pathname === item.href || (item.submenu && item.submenu.some(sub => location.pathname === sub.href))) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500"
                    />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-700 text-black-600 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
      >
        <div className="px-4 py-4 space-y-4">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 ${
                  location.pathname === item.href || (item.submenu && item.submenu.some(sub => location.pathname === sub.href)) ? 'text-emerald-600' : ''
                }`}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${
                        location.pathname === subItem.href ? 'text-emerald-600' : ''
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
          >
            Enquire Now
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;