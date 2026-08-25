import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-primary-900 py-2 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex text-white mb-2 md:mb-0 text-sm">
            <div className="mr-6">
              <i className="fas fa-phone mr-2 text-white"></i>
              <a href="tel:+919213005611" className="text-white hover:text-primary-400 transition-colors duration-300">+919213005611</a>
            </div>
            <div>
              <i className="fas fa-envelope mr-2 text-white"></i>
              <a href="mailto:info@nestoriagroup.com" className="text-white hover:text-primary-400 transition-colors duration-300">info@nestoriagroup.com</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="http://www.youtube.com/@nestoriagroup" target="_blank" rel="noopener noreferrer" className="inline-block text-white transition-all duration-300 transform hover:scale-125 hover:text-red-500"
>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/nestoria.group/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 hover:scale-125 transition-all duration-300 transform inline-block">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/nestoriagroup/" target="_blank" rel="noopener noreferrer" className="inline-block text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a href="https://twitter.com/nestoriagroup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a href="https://www.linkedin.com/company/nestoriagroup" target="_blank" rel="noopener noreferrer" className="inline-block text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;