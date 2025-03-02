import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ logoVariant = "light" }) => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Only show background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ✅ Background Bar (absolute so it doesn’t take space) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          isScrolled ? "bg-[#0E1012] opacity-90" : "opacity-0"
        }`}
      ></div>

      {/* ✅ Header Content */}
      <div className="relative flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 h-20 sm:h-24 md:h-28">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center">
        <img 
          src={logoVariant === "dark" ? "/logo-file-03-dark.png" : "/logo-file-04.png"} 
          alt="FrameLync Ads" 
          className="w-auto h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 max-w-[300px]" // Adjust max width
        />
      </Link>

        {/* ✅ Dropdown Menu */}
        <div className="relative pr-2 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-10" ref={menuRef}>
          <button
            className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 px-3 sm:px-4 py-2 relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu ↗
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-[160px] sm:w-[180px] bg-white text-black rounded-lg shadow-lg py-2 z-10">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
              <Link to="/our-works" className="block px-4 py-2 hover:bg-gray-200">Our Works</Link>
              <Link to="/loading" className="block px-4 py-2 hover:bg-gray-200">Contact Us</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
