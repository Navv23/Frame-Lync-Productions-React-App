import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ logoVariant = "light" }) => {
  // Layout adjustment variables - easily modify these to reposition elements
  const containerPadding = "px-3 sm:px-6 md:px-12 lg:px-24"; // Reduced padding on small screens
  const logoOffset = "ml-0 sm:ml-2 md:ml-4"; // Less offset on mobile to allow expansion
  const menuOffset = "mr-0 sm:mr-2 md:mr-4"; // Less offset on mobile to allow expansion
  
  // Logo size control - adjust these values only - responsive sizes
  const logoSizeDefault = "h-32 sm:h-36 md:h-40"; // Size when page is at top
  const logoSizeScrolled = "h-32 sm:h-36 md:h-40"; // Size when page is scrolled
  
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleMenuNavigation = (path) => {
    setIsMenuOpen(false);
    if (path === "/contact-us") {
      navigate("/loading");
      setTimeout(() => navigate("/contact-us"), 1500);
    } else {
      navigate(path);
    }
  };

  const getMenuItemClass = (path) => {
    const isActive = location.pathname === path;
    return `relative block w-full text-sm font-medium px-4 py-2.5 transition-all duration-200 ${
      isActive 
        ? "bg-gray-200 text-gray-900" 
        : "text-gray-700 hover:bg-gray-200/50 active:bg-gray-200 hover:text-gray-900"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Scroll overlay with gradient */}
      {isScrolled && (
      <div className="fixed top-0 left-0 w-full pointer-events-none bg-gradient-to-b from-black/70 to-transparent h-28 transition-opacity duration-300"></div>
      )}

      {/* Main container with max-width for modern centered look */}
      <div className={`mx-auto max-w-7xl ${containerPadding}`}>
        {/* Header content with fixed height - this ensures consistent positioning */}
        <div className="relative flex items-center justify-between h-28">
          {/* Logo container with fixed size and centered content */}
          <Link 
            to="/" 
            className={`flex items-center justify-center z-10 ${logoOffset}`}
          >
             <div className="flex items-center justify-center h-28">
              <img
                src={logoVariant === "dark" ? "/logo-file-03-dark.png" : "/logo-file-04.png"}
                alt="FrameLync Ads"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? logoSizeScrolled : logoSizeDefault
                }`}
              />
            </div>
          </Link>

          {/* Menu button and dropdown */}
          <div className={`relative z-10 ${menuOffset}`} ref={menuRef}>
            <button
              className={`flex items-center text-base sm:text-lg font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                isMenuOpen 
                  ? logoVariant === "dark" 
                    ? "bg-gray-200 text-gray-900 shadow-md" 
                    : "bg-gray-200 text-gray-900 shadow-md"
                  : `${logoVariant === "dark" 
                      ? "text-gray-900 hover:bg-gray-200/70 active:bg-gray-200" 
                      : "text-white hover:bg-white/20 active:bg-white/30"}`
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="mr-2 font-medium">Menu</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-1.5 overflow-hidden backdrop-blur-sm bg-white/95 border border-gray-100">
                <div className="py-1">
                  <button 
                    onClick={() => handleMenuNavigation("/")}
                    className={getMenuItemClass("/")}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleMenuNavigation("/our-works")}
                    className={getMenuItemClass("/our-works")}
                  >
                    Our Works
                  </button>
                  <button 
                    onClick={() => handleMenuNavigation("/contact-us")}
                    className={getMenuItemClass("/contact-us")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;