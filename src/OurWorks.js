import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedButton from "./components/AnimatedButton";

// Define consistent button styles
const buttonStyle =
  "bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl rounded-full transition duration-300 ease-in-out flex items-center justify-center gap-2 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/50";
const buttonArrow = "text-xl";

const OurWorks = () => {
  return (
    <div className="bg-[#0E1012] text-white min-h-screen">
      <Header />

      <div className="pt-24 sm:pt-28">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
            Our Productions
          </h1>

          {/* Video Advertisements Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-5 sm:mb-7 border-b border-gray-800 pb-2">
              Video Advertisements
            </h2>

            <div className="bg-[#151719] p-5 sm:p-8 rounded-lg shadow-lg mb-8 sm:mb-10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Cake's Joint
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    <strong>About: </strong>
                    Cake's Joint in Malleshwaram, Bangalore, offers a mix of bakery treats, fast
                    food, and desserts at budget-friendly prices. Popular for
                    deliveries, it’s a decent spot for quick bites and takeaway.
                  </p>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    <strong>Location:</strong> 45/1, Karlo Chamber, 8th Main Road,
                    Malleshwaram, Bangalore
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0">
                    <span className="text-gray-400 sm:mr-6 text-sm">
                      Project Time: 2 Days
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <a
                    href="https://www.youtube.com/watch?v=gxXxrd6h_OQ"  // Replace with actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300 block"
                  >
                    <video 
                      src="/Cake's_Joint_Showcase.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-12 h-12 text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-right">
              <Link to="/loading">
                <button className={buttonStyle}>
                  View all video projects
                  <span className={buttonArrow}>→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Business Photoshoots Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-5 sm:mb-7 border-b border-gray-800 pb-2">
              Business Photoshoots
            </h2>

            <div className="bg-[#151719] p-5 sm:p-8 rounded-lg shadow-lg mb-8 sm:mb-10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Coming Soon ..
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    -
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0">
                    <span className="text-gray-400 sm:mr-6 text-sm">
                      Project Time: -
                    </span>
                    <span className="text-gray-400 text-sm">Client: -</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-base sm:text-lg font-medium">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <Link to="/loading">
                <button className={buttonStyle}>
                  View all photography projects
                  <span className={buttonArrow}>→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 sm:mt-20 border border-gray-800 rounded-lg p-6 sm:p-10 text-center mb-12 sm:mb-16 bg-[#151719] hover:bg-[#18191d] transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready to create your next project?
            </h3>
            <p className="mb-6 sm:mb-8 text-gray-300 max-w-lg mx-auto text-sm sm:text-base">
              Partner with our team of creative professionals to bring your vision
              to life.
            </p>
            <div className="flex justify-center">
              <Link to="/loading">
                <AnimatedButton>
                  Book your Slot <span className="text-xl">↗</span>
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurWorks;
