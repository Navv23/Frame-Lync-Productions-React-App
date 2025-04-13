import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion"; 

// Pre-defined service data
const services = [
  {
    id: "video-production",
    icon: "🎬",
    title: "Video Production",
    description: "High-quality video content for brands, ads, and businesses.",
    features: ["Brand Videos", "Advertisements", "Corporate Films", "Product Demos", "Video Editing"],
    link: "/loading",
    color: "#FF5757"
  },
  {
    id: "photography",
    icon: "📸",
    title: "Photography Shoots",
    description: "Professional photoshoots for corporate, brands, and events.",
    features: ["Corporate Portraits", "Product Photography", "Event Coverage", "Brand Campaigns", "Photo Editing"],
    link: "/loading",
    color: "#5E72EB"
  }
];

// Subtle spring animation for smooth transitions
const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 16,
  mass: 0.2
};

// Animation variants with staggered children
const featureVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 5 },
  visible: (i) => ({
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      delay: i * 0.03,
      duration: 0.3,
      ...springTransition
    }
  }),
  exit: (i) => ({
    opacity: 0,
    scale: 0.95,
    y: -2,
    transition: { 
      duration: 0.2, 
      delay: i * 0.01
    }
  })
};

// Container variants for smooth enter/exit
const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      height: { 
        duration: 0.25, 
        ease: [0.33, 1, 0.68, 1]
      },
      opacity: { 
        duration: 0.2,
        ease: "easeOut"
      },
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { 
        duration: 0.25, 
        ease: [0.32, 0, 0.67, 0]
      },
      opacity: { 
        duration: 0.12
      },
      when: "afterChildren",
      staggerChildren: 0.02,
      staggerDirection: -1
    }
  }
};

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle card interaction - different behavior for mobile and desktop
  const handleCardInteraction = (serviceId, isEntering) => {
    if (isMobile) {
      if (isEntering) {
        // On mobile, we don't use hover state
      } else {
        // Toggle active state on mobile
        setActiveService(activeService === serviceId ? null : serviceId);
      }
    } else {
      // On desktop, use hover state with smoother transition
      setHoveredService(isEntering ? serviceId : null);
    }
  };

  // Determine if a card is active (either hovered on desktop or tapped on mobile)
  const isCardActive = (serviceId) => {
    if (isMobile) {
      return activeService === serviceId;
    } else {
      return hoveredService === serviceId;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white tracking-tight"
          style={{ textRendering: "geometricPrecision" }}
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-0.5 bg-gray-300 opacity-40 mx-auto mt-3 rounded-full"
          />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide"
          style={{ textRendering: "geometricPrecision" }}
        >
          Elevate your brand with our premium services.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className={`relative ${isCardActive(service.id) ? "z-20" : "z-10"}`}
            onMouseEnter={() => handleCardInteraction(service.id, true)}
            onMouseLeave={() => handleCardInteraction(service.id, false)}
            onClick={() => isMobile && handleCardInteraction(service.id, false)}
          >
            <motion.div 
              className="relative rounded-xl p-6 md:p-8 border border-white/10 h-full flex flex-col 
                       transition-all duration-300 overflow-hidden"
              animate={{ 
                borderColor: isCardActive(service.id) ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              style={{ 
                background: "rgba(30, 30, 40, 0.35)",
                transform: "translate3d(0,0,0)",
                willChange: "transform, opacity, border-color",
                boxShadow: isCardActive(service.id) 
                  ? `0 8px 25px -5px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1), 0 0 15px 0px ${service.color}25` 
                  : 'none'
              }}
            >
              {/* Background gradient effect with smoother transitions */}
              <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isCardActive(service.id) ? 0.08 : 0 
                }}
                transition={{ 
                  duration: isCardActive(service.id) ? 0.35 : 0.85,
                  ease: isCardActive(service.id) ? "easeOut" : [0.4, 0, 0.2, 1]
                }}
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${service.color}, transparent 70%)`,
                }}
              />
              
              {/* Service Icon */}
              <div className="flex items-center mb-5">
                <motion.div
                  animate={{ 
                    y: isCardActive(service.id) ? -3 : 0
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 130,
                    damping: 15,
                    mass: 0.1,
                  }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-xl md:text-2xl mr-3" 
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))`,
                    boxShadow: `0 4px 15px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.05)`,
                    willChange: "transform"
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Service Title */}
                <motion.h3 
                  animate={{ 
                    x: isCardActive(service.id) ? 3 : 0
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 170,
                    damping: 20,
                    mass: 0.1,
                  }}
                  className="text-xl md:text-2xl font-medium text-white tracking-tight"
                  style={{ 
                    textRendering: "geometricPrecision",
                    willChange: "transform"
                  }}
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Description */}
              <p 
                className="text-gray-200 mb-4 md:mb-5 flex-grow text-sm md:text-base leading-relaxed tracking-wide font-light"
                style={{ 
                  textRendering: "geometricPrecision",
                  WebkitFontSmoothing: "subpixel-antialiased"
                }}
              >
                {service.description}
              </p>

              {/* Features with optimized enter/exit animations */}
              <AnimatePresence initial={false} mode="wait">
                {isCardActive(service.id) && (
                  <motion.div 
                    key={`features-${service.id}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-2 mb-5 text-xs md:text-sm overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          custom={idx}
                          variants={featureVariants}
                          className="flex items-center bg-white/8 px-3 py-1.5 rounded-full text-gray-200 border border-white/8"
                          style={{
                            transform: "translate3d(0,0,0)",
                            willChange: "transform, opacity"
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0" 
                                style={{ backgroundColor: service.color }}></span>
                          <span style={{ textRendering: "geometricPrecision" }}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Learn More Button with perfect animation timing */}
              <AnimatePresence initial={false}>
                <motion.div 
                  key={`learnmore-${service.id}`}
                  className="mt-auto"
                  initial={{ opacity: 0.92, y: 3 }}
                  animate={{ 
                    opacity: isCardActive(service.id) ? 1 : 0.92,
                    y: isCardActive(service.id) ? 0 : 3
                  }}
                  transition={{
                    opacity: { 
                      duration: isCardActive(service.id) ? 0.2 : 0.5, 
                      ease: "easeOut" 
                    },
                    y: { 
                      duration: isCardActive(service.id) ? 0.3 : 0.65, 
                      ease: isCardActive(service.id) ? "easeOut" : [0.2, 0.9, 0.4, 1] 
                    }
                  }}
                >
                  <Link to="/loading">
                    <motion.div 
                      className="group/button relative flex justify-center md:justify-start items-center overflow-hidden rounded-full border border-white/10 px-4 py-2 md:px-5 md:py-2.5 text-sm font-medium transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        transform: "translate3d(0,0,0)",
                        willChange: "transform"
                      }}
                    >
                      <span 
                        className="relative z-10 text-gray-100 group-hover/button:text-white transition-colors"
                        style={{ textRendering: "geometricPrecision" }}
                      >
                        Learn More
                      </span>
                      <motion.span 
                        className="ml-1 relative z-10 inline-block"
                        animate={{
                          x: isCardActive(service.id) ? 3 : 0
                        }}
                        transition={{ 
                          duration: isCardActive(service.id) ? 0.3 : 0.6,
                          ease: isCardActive(service.id) ? [0.19, 1, 0.22, 1] : [0.4, 0.8, 0.4, 1]
                        }}
                        style={{ willChange: "transform" }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </Link>
                </motion.div>
              </AnimatePresence>
              
              {/* Mobile hint */}
              {isMobile && !activeService && index === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-3 right-3 text-xs text-white/70 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
                  style={{ transform: "translate3d(0,0,0)" }}
                >
                  <span className="flex items-center" style={{ textRendering: "geometricPrecision" }}>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5 animate-pulse"></span>
                    Tap to expand
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;