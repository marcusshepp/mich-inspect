"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Menu, X, Shield, Award } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import Link from "next/link";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const { scrollYProgress } = useScroll();
    const scrollIndicatorWidth = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"],
    );

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary z-50 origin-left"
                style={{ scaleX: scrollIndicatorWidth }}
            />
            <motion.header
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ease-out ${
                    isScrolled
                        ? "glass backdrop-blur-xl border-white/20 shadow-lg"
                        : "bg-gradient-to-r from-primary/95 via-primary-800/95 to-primary-900/95 backdrop-blur-sm"
                }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-18 lg:h-20">
                        <motion.div
                            variants={itemVariants}
                            className="flex-shrink-0"
                        >
                            <Link href="/" className="flex flex-col group">
                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                isScrolled
                                                    ? "bg-gradient-to-br from-primary to-primary-700 shadow-lg"
                                                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                                            }`}
                                        >
                                            <Shield
                                                className={`w-6 h-6 ${isScrolled ? "text-white" : "text-white"}`}
                                            />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                                            <Award className="w-2.5 h-2.5 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <motion.h1
                                            className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                                                isScrolled
                                                    ? "text-slate-800"
                                                    : "text-white"
                                            }`}
                                        >
                                            {contactInfo.company}
                                        </motion.h1>
                                        <motion.span
                                            className={`text-xs lg:text-sm transition-all duration-300 ${
                                                isScrolled
                                                    ? "text-slate-600"
                                                    : "text-primary-100"
                                            }`}
                                        >
                                            Professional Home Inspections
                                        </motion.span>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>

                        <MainNavigation isScrolled={isScrolled} />

                        <div className="flex items-center space-x-4">
                            <motion.div
                                variants={itemVariants}
                                className="hidden sm:flex items-center space-x-3"
                            >
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                        isScrolled
                                            ? "bg-gradient-to-br from-secondary to-secondary-600 shadow-lg"
                                            : "bg-white/10 backdrop-blur-sm border border-white/20"
                                    }`}
                                >
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <motion.a
                                    href={`tel:${contactInfo.phone}`}
                                    className={`text-sm lg:text-base font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                                        isScrolled
                                            ? "text-slate-700 hover:text-secondary hover:bg-secondary/10"
                                            : "text-white hover:text-secondary-200 hover:bg-white/10"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {contactInfo.phone}
                                </motion.a>
                            </motion.div>
                            <motion.button
                                variants={itemVariants}
                                onClick={toggleMobileMenu}
                                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                                    isScrolled
                                        ? "text-slate-700 hover:bg-slate-100 active:bg-slate-200"
                                        : "text-white hover:bg-white/10 active:bg-white/20 backdrop-blur-sm"
                                }`}
                                aria-label={
                                    isMobileMenuOpen
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: isMobileMenuOpen ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <MobileNavigation
                isMobileMenuOpen={isMobileMenuOpen}
                closeMobileMenu={closeMobileMenu}
            />

            <div className="h-19 lg:h-21" />
        </>
    );
}
