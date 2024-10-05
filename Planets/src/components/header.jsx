import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 left-0 px-64" style={{ fontFamily: 'Zen Maru Gothic' }}>
      <div className="bg-transparent backdrop-blur-sm text-white px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold font-mono" style={{ fontFamily: 'Zen Maru Gothic' }}>SOLAR EXPLORER</div>

        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-indigo-300 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-indigo-300 transition-colors duration-300">Galaxies</a>
          <a href="#" className="hover:text-indigo-300 transition-colors duration-300">Stars</a>
          <a href="#" className="hover:text-indigo-300 transition-colors duration-300">Planets</a>
          <a href="#" className="hover:text-indigo-300 transition-colors duration-300">Contact</a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-60 text-white text-center py-4">
          <a href="#" className="block py-2 hover:bg-indigo-800 transition-colors duration-300">Home</a>
          <a href="#" className="block py-2 hover:bg-indigo-800 transition-colors duration-300">Galaxies</a>
          <a href="#" className="block py-2 hover:bg-indigo-800 transition-colors duration-300">Stars</a>
          <a href="#" className="block py-2 hover:bg-indigo-800 transition-colors duration-300">Planets</a>
          <a href="#" className="block py-2 hover:bg-indigo-800 transition-colors duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
