import React, { useState } from 'react';

const PlanetList = ({ setPlanet }) => {
  const planets = [
    { name: 'Mercury', image: 'https://space-facts.com/wp-content/uploads/mercury.png' },
    { name: 'Venus', image: 'https://space-facts.com/wp-content/uploads/venus.png' },
    { name: 'Earth', image: 'https://space-facts.com/wp-content/uploads/earth.png' },
    { name: 'Mars', image: 'https://space-facts.com/wp-content/uploads/mars-180x180.jpg' },
    { name: 'Jupiter', image: 'https://space-facts.com/wp-content/uploads/jupiter.png' },
    { name: 'Saturn', image: 'https://space-facts.com/wp-content/uploads/saturn.png' },
    { name: 'Uranus', image: 'https://space-facts.com/wp-content/uploads/uranus-180x180.jpg' },
    { name: 'Neptune', image: 'https://space-facts.com/wp-content/uploads/neptune.png' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-[-15px] h-screen z-50 ${isOpen ? 'w-64' : 'w-16'} bg-gray-900 bg-opacity-20 shadow-lg text-white transition-all duration-300 ease-in-out`}
      style={{ fontFamily: 'Zen Maru Gothic' }}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-20 right-[-15px] bg-gray-700 hover:bg-gray-800 p-2 rounded-full text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? '<' : '>'}
      </button>

      {/* Planet List */}
      {isOpen && (
        <div className="p-4">
          <h2 className="text-2xl font-extrabold mb-6 text-center">Planets</h2>
          <ul className="space-y-4">
            {planets.map((planet, index) => (
              <li
                key={index}
                onClick={() => {setPlanet(planet.name); console.log(planet.name)}}  
                className="flex items-center hover:bg-gray-700 p-3 rounded-md cursor-pointer transition transform hover:scale-105"
              >
                {/* Planet Image */}
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-8 h-8 mr-4 rounded-full"
                />
                {/* Planet Name */}
                {planet.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanetList;