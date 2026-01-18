import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+919876543210"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;