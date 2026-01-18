import { Phone, Mail, MessageCircle, User, Award, Clock } from 'lucide-react';
import { Project } from '../lib/supabase';

interface AgentInfoProps {
  property: Project;
}

const AgentInfo = ({ property }: AgentInfoProps) => {
  const handleCall = () => {
    window.location.href = `tel:${property.agent_phone}`;
  };

  const handleEmail = () => {
    const subject = `Inquiry about ${property.title}`;
    const body = `Hi ${property.agent_name},\n\nI am interested in the property "${property.title}" located in ${property.locality}, ${property.city}.\n\nCould you please provide more details?\n\nThank you.`;
    window.location.href = `mailto:${property.agent_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const message = `Hi ${property.agent_name}, I am interested in the property "${property.title}" in ${property.locality}, ${property.city}. Could you please provide more details?`;
    const phoneNumber = property.agent_phone.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-vasanta-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-10 w-10 text-vasanta-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">{property.agent_name}</h3>
        <p className="text-vasanta-600 font-medium">Property Advisor</p>
        <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-gray-600">
          <Award className="h-4 w-4" />
          <span>Vasanta Homes Certified</span>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Phone className="h-5 w-5 text-vasanta-600" />
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-gray-900">{property.agent_phone}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Mail className="h-5 w-5 text-vasanta-600" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-900">{property.agent_email}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Clock className="h-5 w-5 text-vasanta-600" />
          <div>
            <p className="text-sm text-gray-600">Available</p>
            <p className="font-medium text-gray-900">Mon - Sat, 9 AM - 7 PM</p>
          </div>
        </div>
      </div>

      {/* Contact Actions */}
      <div className="space-y-3">
        <button
          onClick={handleCall}
          className="w-full bg-vasanta-600 hover:bg-vasanta-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="border border-vasanta-600 text-vasanta-600 hover:bg-vasanta-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-600 mb-3">
          Get personalized assistance for this property and explore similar options in {property.city}.
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <span>✓ Verified Agent</span>
          <span>✓ Local Expert</span>
          <span>✓ Quick Response</span>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;