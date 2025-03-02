import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TypingEffect from "./components/TypingEffect";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0E1012] text-white px-4 sm:px-6">
      <Header />
      <TypingEffect />

      {/* Main Content */}
    <h1 className="mt-16 sm:mt-20 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center whitespace-pre-wrap">
      {displayedText}
    </h1>

    {/* Video Section */}
    <div className="mt-4 sm:mt-6 w-full max-w-6xl h-[250px] sm:h-[400px] md:h-[600px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    </div>

      {/* Buttons */}
      <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
        <Link to="/our-works">
          <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded-full hover:bg-gray-200 transition">
            Our Works ↗
          </button>
        </Link>
        <Link to="/loading">
          <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded-full hover:bg-gray-200 transition">
            Book your Slot ↗
          </button>
        </Link>
      </div>

      {/* Simple Steps Section */}
      <div className="mt-24 sm:mt-32 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
          We Believe In Keeping Things Simple.
        </h2>
        <div className="mt-8 sm:mt-10 text-gray-300 space-y-3 sm:space-y-4 flex flex-col items-center text-base sm:text-lg md:text-xl">
          <p>Contact Us</p>
          <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
          <p>Tell us your requirements.</p>
          <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
          <p>We will get in touch.</p>
          <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
          <p>Discuss project agreements.</p>
          <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
          <p>Get your project delivered.</p>
          <div className="w-0.5 h-4 sm:h-6 bg-gray-400"></div>
          <p>Thank us later.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 sm:mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Talk!</h2>
        <Link to="/loading">
          <button className="mt-4 bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded-full hover:bg-gray-200 transition">
            Book your Slot ↗
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
