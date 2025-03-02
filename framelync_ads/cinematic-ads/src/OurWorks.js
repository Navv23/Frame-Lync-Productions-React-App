import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

const OurWorks = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-40">
      {/* ✅ Reusable Header */}
      <Header />

      {/* Title - Adjusted margin */}
      <h1 className="text-center text-3xl font-semibold mt-6">Our Productions</h1>

      {/* Video Advertisements Section */}
      <div className="mt-8 px-10">
        <h2 className="text-xl font-bold text-blue-400">Video Advertisements</h2>
        <div className="flex flex-wrap justify-between items-center mt-4">
          <div className="w-1/2">
            <h3 className="font-bold text-lg">Koncept Interiors</h3>
            <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-400 text-sm mt-2">Project Time: 12 Days</p>
            <Link to="/loading">
              <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
                Book your Slot ↗
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[300px] h-[160px] bg-gray-600 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Business Photoshoots Section */}
      <div className="mt-8 px-10">
        <h2 className="text-xl font-bold text-blue-400">Business Photoshoots</h2>
        <div className="flex flex-wrap justify-between items-center mt-4">
          <div className="w-1/2">
            <h3 className="font-bold text-lg">Autana Greens</h3>
            <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-400 text-sm mt-2">Project Time: 2 Days</p>
            <Link to="/loading">
              <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
                Book your Slot ↗
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[300px] h-[160px] bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white">&lt; &gt;</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
};

export default OurWorks;