import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TypingEffect from "./components/TypingEffect";
import ServicesSection from "./components/ServicesSection";

const HomePage = () => {
  const [displayedText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Handle responsive state based on viewport width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle =
    "bg-white text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl rounded-full transition duration-300 ease-in-out flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/50 whitespace-nowrap";
  const buttonArrow = "text-lg sm:text-xl";

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0E1012] overflow-x-hidden">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12 z-0">
        {/* Flare Background Effect - responsive positioning */}
        <img
          src="/Ellipse 4.png"
          alt="Flare Effect"
          className="absolute top-[-20px] sm:top-0 md:top-[-50px] left-1/2 transform -translate-x-1/2 w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%] opacity-80 pointer-events-none z-[-10]"
          />

        {/* Main Content - improved spacing */}
        <h1 className="mt-6 sm:mt-10 md:mt-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight">
          {displayedText}
        </h1>

        <TypingEffect />

        {/* Video Section - improved responsive dimensions with laptop optimization */}
        <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 w-full max-w-6xl flex items-center justify-center overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-black/30">
          <video
            src="/Framelync_Intro_2.mp4"
            controls
            className="w-full h-auto object-cover 
              max-h-[35vh] sm:max-h-[45vh] 
              md:max-h-[60vh] lg:max-h-[75vh] xl:max-h-[85vh]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
        {/* Buttons - better spacing and sizing for small screens */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <Link to="/our-works">
            <button className={buttonStyle}>
              Our Works <span className={buttonArrow}>↗</span>
            </button>
          </Link>
          <Link to="/loading">
            <button className={buttonStyle}>
              Book your Slot <span className={buttonArrow}>↗</span>
            </button>
          </Link>
        </div>

        {/* Services Section - added container padding for small screens */}
        <div className="mt-8 sm:mt-12 md:mt-16 w-full px-1 sm:px-0">
          <ServicesSection />
        </div>

        {/* "We Believe In Keeping Things Simple" Section - improved spacing */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            We Believe In Keeping Things Simple.
          </h2>
          <div className="mt-4 sm:mt-6 md:mt-8 text-gray-300 space-y-2 sm:space-y-3 md:space-y-4 flex flex-col items-center text-sm sm:text-base md:text-lg lg:text-xl">
            {[
              "Contact Us",
              "Tell us your requirements",
              "We will get in touch",
              "Discuss project agreements",
              "Get your project delivered",
              "Thank us later",
            ].map((text, index) => (
              <React.Fragment key={index}>
                <p>{text}</p>
                {index < 5 && (
                  <div className="w-0.5 h-3 sm:h-4 md:h-5 lg:h-6 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Contact Section - improved spacing */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's Talk!
          </h2>
          <Link to="/loading">
            <button className={`${buttonStyle} mt-4 sm:mt-6 md:mt-8`}>
              Book your Slot <span className={buttonArrow}>↗</span>
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;