import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-white px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo appears here */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-300">Logo</a>
        </div>

        {/* Navigation for Desktops */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigations for mobile devices */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center text-white space-y-4 py-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
