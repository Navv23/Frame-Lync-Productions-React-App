import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ logoVariant = "light" }) => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const isContactPage = location.pathname === "/contact-us";

  // Function to handle Contact Us click
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/loading"); // First navigate to loading page
    setTimeout(() => {
      navigate("/contact-us"); // After a delay, go to Contact Us page
    }, 2000); // 2-second delay (adjust as needed)
  };
  const getMenuItemClass = (path) => {
    return `block w-full text-center px-4 py-3 hover:bg-gray-200 ${
      location.pathname === path ? "bg-gray-200" : ""
    }`;
  };

  // Define the new logo height and margin
  const newLogoHeight = "h-32 sm:h-40 md:h-48"; // Increased height MUCH BIGGER
  const newLogoMargin = "-mt-8 sm:-mt-10 md:-mt-12"; // Increased Negative margin to move up

  // Increased header height for bigger logo
  const newHeaderHeight = "h-32 sm:h-40 md:h-48";

  // New variables for inward scaling - EXTREME
  const headerPadding = "px-10 sm:px-16 md:px-20 lg:px-24 xl:px-32"; // INCREASED padding even MORE
  const logoMaxWidth = "max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"; // REDUCED max width EVEN MORE
  const menuPadding = "pr-3 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-8"; //Increased menu padding EVEN MORE
  const newMenuMargin = "-mt-8 sm:-mt-10 md:-mt-12" // Added new Menu margin to move it up.

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`fixed top-0 left-0 w-full h-16 md:h-2 transition-opacity duration-300 ${
          isScrolled ? "bg-[#0E1012] opacity-90" : "opacity-0"
        }`}
      ></div>

      <div
        className={`relative flex justify-between items-center ${headerPadding} ${newHeaderHeight}`} // Adjusted padding
      >
        <Link to="/" className={`flex items-center ${newLogoMargin}`}>
          <img
            src={
              logoVariant === "dark"
                ? "/logo-file-03-dark.png"
                : "/logo-file-04.png"
            }
            alt="FrameLync Ads"
            className={`w-auto ${newLogoHeight} ${logoMaxWidth}`} // Adjusted max width
          />
        </Link>

        <div className={`relative ${menuPadding} ${newMenuMargin}`} ref={menuRef}> {/*adjusted menu padding AND ADDED NEW MENU MARGIN*/}
          <button
            className="text-base sm:text-lg md:text-xl lg:text-xl px-3 sm:px-4 py-2 relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu ↗
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-[160px] sm:w-[180px] bg-white text-black rounded-lg shadow-lg py-2 z-10 flex flex-col items-center">
              <Link to="/" className={getMenuItemClass("/")}>
                Home
              </Link>
              <Link to="/our-works" className={getMenuItemClass("/our-works")}>
                Our Works
              </Link>
              <a
                href="/loading"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/loading");
                  setTimeout(() => navigate("/contact-us"), 2000);
                }}
                className={`${getMenuItemClass("")} ${
                  location.pathname === "/contact-us" ? "bg-gray-200" : ""
                }`}
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
