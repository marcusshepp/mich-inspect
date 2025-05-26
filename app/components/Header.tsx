"use client";
import { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { Phone, Menu, X, Shield, Award } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
    name: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname: string = usePathname();
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

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: { duration: 0.2 },
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.9,
            transition: { duration: 0.2 },
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

                        <motion.nav
                            variants={itemVariants}
                            className="hidden lg:flex items-center space-x-2"
                            role="navigation"
                            aria-label="Main navigation"
                        >
                            {navigationItems.map((item: NavigationItem) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`relative text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                                            pathname === item.href
                                                ? isScrolled
                                                    ? "text-primary bg-primary/10 shadow-md border border-primary/20"
                                                    : "text-secondary bg-white/15 shadow-lg border border-white/20 backdrop-blur-sm"
                                                : isScrolled
                                                  ? "text-slate-700 hover:text-primary hover:bg-primary/5"
                                                  : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                                        }`}
                                    >
                                        {item.name}
                                        {pathname === item.href && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                                                    isScrolled
                                                        ? "bg-primary"
                                                        : "bg-secondary"
                                                }`}
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>

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

            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 z-50 lg:hidden"
                        id="mobile-menu"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-800/95 to-primary-900/95 backdrop-blur-xl"
                            onClick={closeMobileMenu}
                        />

                        <motion.div
                            variants={mobileMenuVariants}
                            className="relative flex flex-col items-center justify-center h-full px-6"
                        >
                            <motion.button
                                variants={mobileItemVariants}
                                onClick={closeMobileMenu}
                                className="absolute top-8 right-8 p-3 text-white hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            <motion.div
                                variants={mobileItemVariants}
                                className="text-center mb-12"
                            >
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                        <Shield className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <motion.h2 className="text-3xl font-bold text-white mb-2">
                                    {contactInfo.company}
                                </motion.h2>
                                <p className="text-primary-100">
                                    Professional Home Inspections
                                </p>
                                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-secondary-200">
                                    <Award className="w-4 h-4" />
                                    <span>
                                        InterNACHI Certified • Veteran-Owned
                                    </span>
                                </div>
                            </motion.div>

                            <motion.nav
                                className="flex flex-col items-center space-y-4 mb-12"
                                role="navigation"
                                aria-label="Mobile navigation"
                            >
                                {navigationItems.map(
                                    (item: NavigationItem, index: number) => (
                                        <motion.div
                                            key={item.name}
                                            variants={mobileItemVariants}
                                            custom={index}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMobileMenu}
                                                    className={`text-2xl font-semibold transition-all duration-300 px-8 py-4 rounded-2xl backdrop-blur-sm ${
                                                        pathname === item.href
                                                            ? "text-secondary bg-white/15 border border-secondary/30 shadow-lg"
                                                            : "text-white hover:text-secondary hover:bg-white/10 border border-transparent hover:border-white/20"
                                                    }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    ),
                                )}
                            </motion.nav>

                            <motion.div
                                variants={mobileItemVariants}
                                className="text-center space-y-6"
                            >
                                <motion.a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-center justify-center space-x-4 text-white hover:text-secondary transition-colors px-8 py-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm border border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xl font-semibold">
                                            {contactInfo.phone}
                                        </div>
                                        <div className="text-sm text-primary-200">
                                            Call for inspection
                                        </div>
                                    </div>
                                </motion.a>

                                <motion.p className="text-primary-100 text-sm max-w-xs">
                                    Serving{" "}
                                    {contactInfo.serviceAreas
                                        .slice(0, 3)
                                        .join(", ")}{" "}
                                    & surrounding areas
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-19 lg:h-21" />
        </>
    );
}
