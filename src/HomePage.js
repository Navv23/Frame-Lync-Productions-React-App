import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TypingEffect from "./components/TypingEffect";
import ServicesSection from "./components/ServicesSection"; // Import Services Section

const HomePage = () => {
  const [displayedText] = useState("");

  const buttonStyle =
    "bg-white text-black px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg md:text-xl rounded-full transition duration-300 ease-in-out flex items-center justify-center gap-2 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/50";
  const buttonArrow = "text-xl";

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0E1012]">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-white px-4 sm:px-8 lg:px-12 z-0">
        {/* ✅ Flare Background Effect */}
        <img
          src="/Ellipse 4.png"
          alt="Flare Effect"
          className="absolute top-[20px] sm:top-[-100px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] opacity-80 pointer-events-none z-[-10]"
        />

        {/* ✅ Main Content */}
        <h1 className="mt-8 sm:mt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          {displayedText}
        </h1>

        <TypingEffect />

        {/* ✅ Video Section */}
        <div className="mt-4 sm:mt-1 w-full max-w-6xl aspect-video flex items-center justify-center overflow-hidden">
          <video
            src="/Framelync_Intro_2.mp4"
            controls
            className="w-full h-auto max-h-[60vh] object-cover rounded-2xl"
            autoPlay
            muted
            loop
          />
        </div>

        {/* ✅ Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
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

        {/* ✅ Services Section */}
        <div className="mt-10 sm:mt-16 w-full">
          <ServicesSection />
        </div>

        {/* ✅ "We Believe In Keeping Things Simple" Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            We Believe In Keeping Things Simple.
          </h2>
          <div className="mt-6 sm:mt-8 text-gray-300 space-y-3 sm:space-y-4 flex flex-col items-center text-base sm:text-lg md:text-xl">
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
                  <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ✅ Contact Section */}
        <div className="mt-16 sm:mt-20 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let's Talk!
          </h2>
          <Link to="/loading">
            <button className={`${buttonStyle} mt-6 sm:mt-8`}>
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
