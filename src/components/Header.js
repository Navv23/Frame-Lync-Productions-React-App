import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail } from 'lucide-react'; // Import icons

const Button = ({ variant, size, className, onClick, children }) => (
  <button
    className={`${className} ${variant === 'ghost' ? 'bg-transparent' : ''} ${size === 'default' ? 'px-4 py-2' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Header = ({ logoVariant = "light" }) => {
  // Layout adjustment variables
  const containerPaddingX = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24";
  const logoMarginLeft = "ml-[-12px] sm:ml-[-8px] md:ml-[-4px]"; // Modified logoMarginLeft
  const menuMarginRight = "mr-0 sm:mr-2 md:ml-4";

  // Logo size control
  const logoHeightDefault = "h-40 sm:h-86 md:h-92";
  const logoHeightScrolled = "h-40 sm:h-86 md:h-92"; // keep it same

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

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

  const getMenuIcon = (iconName) => {
    switch (iconName) {
      case "Home":
        return <Home className="mr-2 w-4 h-4" />;
      case "Briefcase":
        return <Briefcase className="mr-2 w-4 h-4" />;
      case "Mail":
        return <Mail className="mr-2 w-4 h-4" />;
      default:
        return null;
    }
  };

  const getMenuItemClass = (path) => {
    const isActive = location.pathname === path;
    return `group relative flex items-center w-full text-sm font-medium px-4 py-2.5 transition-colors duration-200
      ${isActive
        ? "bg-gray-100 text-gray-900"
        : "text-gray-700 hover:bg-gray-100/10 hover:text-gray-900 rounded-md" // Updated hover effect
      }`;
  };

  const menuItems = [
    { path: "/", label: "Home", icon: "Home" },
    { path: "/our-works", label: "Our Works", icon: "Briefcase" },
    { path: "/contact-us", label: "Contact Us", icon: "Mail" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20">
      {isScrolled && (
        <div className="absolute top-0 left-0 w-full pointer-events-none bg-gradient-to-b from-black/70 to-transparent h-28 transition-opacity duration-300" />
      )}

      <div className={`mx-auto max-w-7xl ${containerPaddingX} h-full`}>
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className={`flex items-center justify-center z-10 ${logoMarginLeft}`}
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={logoVariant === "dark" ? "/logo-file-03-dark.png" : "/logo-file-04.png"}
                alt="FrameLync Ads"
                className={`w-auto transition-all duration-300 ${isScrolled ? logoHeightScrolled : logoHeightDefault}`}
              />
            </div>
          </Link>

          <div className={`relative z-10 ${menuMarginRight}`} ref={menuRef}>
            <Button
              variant="ghost"
              size="default"
              className={`
                flex items-center text-base sm:text-lg font-medium px-4 py-2 rounded-full transition-all duration-200
                ${isMenuOpen
                  ? "bg-gray-100 shadow-md"
                  : `${logoVariant === "dark"
                      ? "bg-transparent hover:bg-gray-100/70"
                      : "bg-transparent hover:bg-white/20"
                    } active:bg-white/30`
                }
              `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`mr-2 font-medium ${logoVariant === "dark" ? "text-gray-900" : "text-white"}`}>Menu</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""} ${logoVariant === "dark" ? "text-gray-900" : "text-white"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </Button>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-1.5 overflow-hidden backdrop-blur-sm bg-white/95 border border-gray-100"
              >
                <div className="py-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleMenuNavigation(item.path)}
                      className={getMenuItemClass(item.path)}
                    >
                      <div className="flex items-center">
                        {getMenuIcon(item.icon)}
                        {item.label}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;