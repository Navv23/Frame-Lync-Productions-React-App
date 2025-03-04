import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-[#0E1A30] text-gray-400 text-sm py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p>© 2025 FrameLync. All Rights Reserved.</p>
        </div>

        {/* Center Section */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/blog" className="hover:text-white transition">Blog</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section */}
        <div className="mt-2 md:mt-0">
          <p>Shoot a Video for Your Business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
