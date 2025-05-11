import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" //Removed problematic import
//import { Button } from "@/components/ui/button"  //Removed problematic import
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" //Removed problematic import
//import { cn } from "@/lib/utils"  //Removed problematic import
//import { Badge } from "@/components/ui/badge" //Removed problematic import

// Added basic components to replace the missing ones.  These are NOT the shadcn/ui versions,
// but they will allow the code to run without errors.  You should replace these with
// your actual UI components if you are not using shadcn/ui, or install shadcn/ui.
const Avatar = ({ className, children }) => <div className={className}>{children}</div>;
const AvatarImage = ({ src, alt }) => <img src={src} alt={alt} />;
const AvatarFallback = ({ children }) => <div>{children}</div>;
const Button = ({ variant, size, className, children, asChild, ...props }) => {
  if (asChild) {
    const Child = React.Children.only(children);
    return <div className={className} {...props}>{Child}</div>;
  }
  return <button className={className} {...props}>{children}</button>;
};
const Card = ({ className, children }) => <div className={className}>{children}</div>;
const CardHeader = ({ className, children }) => <div className={className}>{children}</div>;
const CardTitle = ({ className, children }) => <h3 className={className}>{children}</h3>;
const CardDescription = ({ className, children }) => <p className={className}>{children}</p>;
const CardContent = ({ children }) => <div>{children}</div>;
const Badge = ({ variant, className, children }) => <span className={className}>{children}</span>;

const cn = (...classes) => classes.filter(Boolean).join(' ');

// Dummy data for team members.  You'll replace this with your actual data.
const teamMembers = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "CEO",
        avatar: "/avatar-placeholder.svg", // Replace with actual image URLs
        bio: "Aarav is the visionary leader of FrameLync Ads, with a passion for innovation and creativity.",
        socials: [
            { name: "LinkedIn", url: "#" }, // Replace with actual URLs
            { name: "Twitter", url: "#" },
        ],
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Creative Director",
        avatar: "/avatar-placeholder.svg",
        bio: "Priya leads the creative team, bringing imagination and artistic flair to every project.",
        socials: [
            { name: "Behance", url: "#" },
            { name: "Instagram", url: "#" },
        ],
    },
    // Add more team members here as needed
];

const OurTeamPage = () => {
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
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <div className="bg-[#0E1012] min-h-screen">
            {/* Page Header */}
            <header className="py-16 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Our Team
                </h1>
                <p className="text-gray-400 mt-4 text-lg sm:text-xl">
                    Meet the people behind FrameLync Ads
                </p>
            </header>

            {/* Team Members Grid */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className={cn(
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                    isMobile && "gap-6" // Adjust spacing for mobile
                )}>
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} // Animate only once
                        >
                            <Card
                                className={cn(
                                    "bg-white/5 backdrop-blur-lg border border-white/10",
                                    "shadow-xl hover:shadow-2xl transition-all duration-300",
                                    "hover:scale-[1.02] hover:border-gray-300/20",
                                    "relative overflow-hidden" // Added for gradient overlay
                                )}
                            >
                                 {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/80 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                                            <AvatarImage src={member.avatar} alt={member.name} />
                                            <AvatarFallback>
                                                {member.name.substring(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle className="text-white text-2xl font-semibold">
                                        {member.name}
                                    </CardTitle>
                                    <CardDescription className="text-gray-400">
                                        <Badge
                                            variant="secondary"
                                            className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                                        >
                                            {member.role}
                                        </Badge>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-base text-center">
                                        {member.bio}
                                    </p>
                                    {/* Social Links (Optional) */}
                                    {member.socials && (
                                        <div className="mt-4 flex justify-center gap-4">
                                            {member.socials.map((social) => (
                                                <Button
                                                    key={social.name}
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-white hover:bg-white/10"
                                                    asChild // Render the link
                                                >
                                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                                        {social.name}
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </main>


        </div>
    );
};

export default OurTeamPage;
