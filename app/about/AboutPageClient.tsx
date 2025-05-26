"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutHero from "app/_components/about-hero";
import AboutStory from "app/_components/about-story";
import AboutTeam from "app/_components/about-team";
import AboutCertifications from "app/_components/about-certifications";

function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900 z-50 flex items-center justify-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                className="w-20 h-20 border-4 border-white/30 border-t-secondary rounded-full"
            />
        </motion.div>
    );
}

export default function AboutPageContent() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className="min-h-screen overflow-hidden">
            <AboutHero />
            <AboutStory />
            <AboutTeam />
            <AboutCertifications />
        </div>
    );
}
