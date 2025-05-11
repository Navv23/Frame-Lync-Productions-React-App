import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Sample partner data (replace with your actual data)
const partners = [
    { name: 'Partner 1', logo: '/cakes_joint.png', link: '#' },
    { name: 'Partner 2', logo: '/dhatri-fin-logo-bw.png', link: '#' },
    { name: 'Partner 3', logo: '/Sadvidya_School.png', link: '#' },
    // Removed Partner 3, Partner 4, Partner 5, Partner 6, Partner 7, Partner 8 for single line
];

const OurPartnersSection = ({ logoSize = 'h-24 sm:h-28 md:h-32' }) => { // Added logoSize prop with default value
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Slightly increased stagger for a smoother effect
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 }, // Slightly scale down on initial
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }, // Added spring
        hover: { scale: 1.05 }, // Added scale on hover
    };

    return (
        <section
            className={cn(
                "w-full py-16 sm:py-20 md:py-24",
                "bg-[#0E1012]", // Match your background
                "flex flex-col items-center justify-center",
                "px-4 sm:px-6 md:px-8 lg:px-12"
            )}
        >
            <div className="max-w-7xl w-full">
                <h2
                    className={cn(
                        "text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12", // Increased spacing
                        "text-white",
                    )}
                >
                    Our Partners
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                        "flex",
                        isMobile ? "flex-col items-center" : "flex-row items-center justify-around", // Use flexbox for single line on larger screens
                        "w-full",
                        isMobile ? "space-y-8" : "space-x-8 sm:space-x-12 md:space-x-16" // Adjust spacing
                    )}
                >
                    {partners.map((partner, index) => {
                        let logoClass = logoSize;
                        if (partner.name === 'Partner 2') { // Target 'Partner 2' specifically
                            logoClass = 'h-12 sm:h-16 md:h-20'; // Make it smaller
                        }
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover="hover"
                                className={cn(
                                    "flex items-center justify-center",
                                    "w-auto",
                                )}

                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={cn(
                                        logoClass,
                                        "object-contain",
                                        "grayscale hover:grayscale-0 transition-all duration-500",
                                        "w-auto max-w-full",
                                    )}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default OurPartnersSection;
