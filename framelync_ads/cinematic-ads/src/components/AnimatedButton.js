import React, { useState } from "react";

const AnimatedButton = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [rippleStyle, setRippleStyle] = useState({});

  const handleClick = (e) => {
    setIsClicked(true);
    onClick?.(e); // Trigger the actual button action

    // Get click position relative to button
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set ripple style dynamically
    setRippleStyle({
      top: `${y}px`,
      left: `${x}px`,
    });

    // Reset animation after 400ms
    setTimeout(() => setIsClicked(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl rounded-full flex items-center justify-center gap-2 overflow-hidden transition duration-300 ease-in-out ${
        isClicked ? "scale-95" : "scale-100"
      }`}
    >
      {/* Background fill effect */}
      <span
        className={`absolute inset-0 bg-gray-300 rounded-full transition-all duration-300 ${
          isClicked ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      ></span>

      {/* Ripple Effect */}
      {isClicked && (
        <span
          className="absolute w-10 h-10 bg-gray-500 opacity-30 rounded-full transform scale-0 animate-ripple"
          style={rippleStyle}
        ></span>
      )}

      {/* Button text & arrow */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;
