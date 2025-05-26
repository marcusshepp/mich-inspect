"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/contact-info";
import HomeHero from "./_components/home-hero";
import HomeServices from "./_components/home-services";
import HomeStats from "./_components/home-stats";
import HomeCTA from "./_components/home-cta";

function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900 z-50 flex items-center justify-center"
        >
            <div className="text-center">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        },
                        scale: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        },
                    }}
                    className="w-20 h-20 border-4 border-white/30 border-t-secondary rounded-full mx-auto mb-6"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white"
                >
                    <h2 className="text-2xl font-bold mb-2">
                        {contactInfo.company}
                    </h2>
                    <p className="text-primary-200">
                        Loading your inspection partner...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function HomePageClient() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className="min-h-screen overflow-hidden">
            <HomeHero />
            <HomeServices />
            <HomeStats />
            <HomeCTA />
        </div>
    );
}
