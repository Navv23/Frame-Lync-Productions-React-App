import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple utility function for combining class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Sample partner data (replace with your actual data)
const partners = [
    { name: 'Partner 1', logo: '/cakes_joint.png', link: '#' },
    { name: 'Partner 2', logo: '/dhatri-fin-logo-bw.png', link: '#' },
    // Removed Partner 3, Partner 4, Partner 5, Partner 6, Partner 7, Partner 8
];

const OurPartnersSection = () => {
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
                        "grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12", // Increased gap
                        "justify-items-center",
                        "w-full"
                    )}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            className={cn(
                                "flex items-center justify-center",
                                "w-full", // Ensure each item takes full width of its grid cell
                            )}

                        >
                            <a
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={cn(
                                        "h-24 sm:h-28 md:h-32 object-contain", // Increased logo size
                                        "grayscale hover:grayscale-0 transition-all duration-500", // Added smoother transition
                                        "w-auto max-w-full", // Ensure image doesn't overflow
                                    )}
                                />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurPartnersSection;
