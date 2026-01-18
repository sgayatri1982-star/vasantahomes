import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Lifestyle from './pages/Lifestyle';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:slug" element={<PropertyDetails />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;