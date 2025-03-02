import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ logoVariant = "light" }) => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine which logo to use
  const logoSrc = logoVariant === "dark" ? "/logo-file-03-dark.png" : "/logo-file-04.png";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-[-20px] sm:top-[-40px] left-0 w-full px-6 sm:px-20 md:px-32 flex justify-between items-center bg-transparent z-50">
      {/* Logo - Bigger on Mobile & Adjusted Outwards */}
      <Link to="/" className="flex items-center">
        <img src={logoSrc} alt="FrameLync Ads" className="h-36 xs:h-44 sm:h-52 md:h-56 cursor-pointer" />
      </Link>

      {/* Dropdown Menu - Slightly Adjusted Outwards */}
      <div className="relative pr-2 sm:pr-6" ref={menuRef}>
        <button
          className="text-lg sm:text-xl hover:text-gray-300 px-3 sm:px-4 py-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu ↗
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-[180px] sm:w-[200px] bg-white text-black rounded-lg shadow-lg py-2 z-10">
            <Link to="/" className="block px-5 sm:px-6 py-2 hover:bg-gray-200">Home</Link>
            <Link to="/our-works" className="block px-5 sm:px-6 py-2 hover:bg-gray-200">Our Works</Link>
            <Link to="/loading" className="block px-5 sm:px-6 py-2 hover:bg-gray-200">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
