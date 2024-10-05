import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-700 bg-opacity-90 ring ring-white text-white py-10 px-4" style={{ fontFamily: 'Zen Maru Gothic' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Branding */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-wide">Solar Explorer</h2>
          <p className="text-sm text-gray-400 mt-2">
            Discover the wonders of the solar system.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 justify-center">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center lg:text-right">
          
          <p className="text-gray-400">© 2024 Solar Explorer, All Rights Reserved</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mt-10 border-t border-gray-800 pt-4">
        <p className="text-center text-sm text-gray-400">
          Made with <span className="text-red-500">♥</span> by the Solar Explorer Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
