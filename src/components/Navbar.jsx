import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Venkateshwar Reddy Kasturi</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;