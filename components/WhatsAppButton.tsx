import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="#"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-[#25d366]/40"
      aria-label="Contact on WhatsApp"
    >
      <Phone className="w-7 h-7 fill-current" />
    </a>
  );
};

export default WhatsAppButton;