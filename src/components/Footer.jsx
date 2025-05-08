import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm mt-12">
      <p className="mb-1">
        Built with <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">GitHub Pages</span>
      </p>
      <p>© {new Date().getFullYear()} Venkateshwar Reddy Kasturi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;