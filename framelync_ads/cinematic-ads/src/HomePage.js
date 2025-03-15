import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TypingEffect from "./components/TypingEffect";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const videoUrl = "COMING SOON";

  // Define consistent button styles
  const buttonStyle =
    "bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl rounded-full transition duration-300 ease-in-out flex items-center justify-center gap-2 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/50"; // Adjusted hover effect
  const buttonArrow = "text-xl";

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0E1012]">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-white px-4 sm:px-8 lg:px-12 z-0">
        {/* ✅ Flare Background Effect */}
        <img
          src="/Ellipse 4.png"
          alt="Flare Effect"
          className="absolute top-[3%] sm:top-[-100px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] opacity-80 pointer-events-none z-[-10] fade-mask sm:fade-mask-md md:fade-mask-lg"
        />

        {/* ✅ Main Content */}
        <h1 className="mt-16 sm:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center whitespace-pre-wrap leading-tight">
          {displayedText}
        </h1>

        <TypingEffect />

        {/* ✅ Video Section */}
        <div className="mt-6 sm:mt-8 w-full max-w-6xl aspect-video bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
          <video
            src="/Framelync_Intro_2.mp4"
            controls
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>

        {/* ✅ Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
          {/* Reduced margin-top */}
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

        {/* ✅ Simple Steps Section */}
        <div className="mt-20 sm:mt-24 text-center">
          {/* Reduced margin-top */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white-400">
            We Believe In Keeping Things Simple.
          </h2>
          <div className="mt-8 sm:mt-10 text-gray-300 space-y-3 sm:space-y-4 flex flex-col items-center text-base sm:text-lg md:text-xl">
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
        <div className="mt-12 sm:mt-16 text-center mb-16">
          {/* Reduced margin-top and added margin-bottom */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let's Talk!
          </h2>
          <Link to="/loading">
            <button className={`${buttonStyle} mt-8`}>
              {/* Added consistent button style here */}
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