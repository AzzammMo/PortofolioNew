import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-500'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Azzam | Web</h1>

        {/* Desktop Menu (Always visible on desktop) */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Project', 'Certifications'].map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white relative group-hover:text-gray-400"
              >
                {item}
                {/* Border line effect on hover */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Dark Mode toggle button and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Toggle Dark Mode as a Slider */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <div className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-400'}`}>
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faMoon : faSun}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700"
                />
              </div>
            </div>
          </label>

          {/* Mobile Hamburger Menu (visible only on mobile) */}
          <button
            onClick={toggleMenu}
            className={`text-white p-2 ${isDarkMode ? 'text-yellow-400' : 'text-black'} md:hidden`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hamburger) */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-gray-800 p-4 absolute top-16 left-0 w-full">
          {['Home', 'About', 'Project', 'Certifications'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg"
                onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
