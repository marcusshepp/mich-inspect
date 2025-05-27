"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import { useIsMobile } from "hooks/use-mobile";

export default function FloatingActions() {
    const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = (): void => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-6 h-6 group-hover:animate-bounce-gentle" />
                    </motion.button>
                )}
            </AnimatePresence>

            {isMobile && (
                <motion.a
                    href={`tel:${contactInfo.phone}`}
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Call ${contactInfo.phone}`}
                >
                    <Phone className="w-6 h-6 group-hover:animate-pulse-slow" />
                </motion.a>
            )}
        </>
    );
}
