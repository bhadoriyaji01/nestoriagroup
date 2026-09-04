// src/components/WhatsAppButton.jsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-[999] flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="https://wa.me/919274411712?text=Hello%20Nestoria%20Group,%20I%20am%20interested%20in%20Dholera%20SIR%20plots%20and%20projects.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nestoria Group on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 group-hover:hidden" />

        {/* WhatsApp Icon */}
        <img 
          src="/whatsapp-100.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 object-contain drop-shadow"
          onError={(e) => {
            // fallback if svg fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <MessageCircle className="w-7 h-7 text-white hidden only:block" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full p-0.5 shadow-sm">
          <span className="block w-full h-full bg-emerald-500 rounded-full animate-pulse" />
        </span>
      </a>

      {/* Hover Tooltip / Floating Label */}
      <div 
        className={`hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-200 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Chat on WhatsApp</span>
      </div>
    </div>
  );
}

