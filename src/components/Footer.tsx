import { Mountain, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-serif font-bold text-gray-900">
                Vasanta Homes
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Luxury rooted in nature. Curated Himalayan homes, estates & land investments 
              designed for those who seek serenity, authenticity, and long-term value.
            </p>
            <p className="text-sm text-gray-500 italic">
              Inspired by Nature. Designed for Life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link to="/properties" className="text-gray-600 hover:text-emerald-600 transition-colors">Properties</Link></li>
              <li><Link to="/lifestyle" className="text-gray-600 hover:text-emerald-600 transition-colors">Lifestyle</Link></li>
              <li><Link to="/locations" className="text-gray-600 hover:text-emerald-600 transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Haldwani</li>
              <li className="text-gray-600">Nainital</li>
              <li className="text-gray-600">Bhimtal</li>
              <li className="text-gray-600">Mukteshwar</li>
              <li className="text-gray-600">Champawat</li>
              <li className="text-gray-600">Lansdowne</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">Haldwani, Uttarakhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">+91 98731 60180</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">info@vasantahomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 Vasanta Homes. All rights reserved. Luxury Rooted in Nature.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;