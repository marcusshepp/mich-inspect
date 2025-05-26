"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Shield, Award } from "lucide-react";
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

interface MobileNavigationProps {
    isMobileMenuOpen: boolean;
    closeMobileMenu: () => void;
}

export default function MobileNavigation({
    isMobileMenuOpen,
    closeMobileMenu,
}: MobileNavigationProps) {
    const pathname: string = usePathname();

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
        <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                    className="fixed inset-0 z-50 lg:hidden"
                    id="mobile-menu"
                    style={{ overscrollBehavior: "none" }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-800/95 to-primary-900/95 backdrop-blur-xl"
                        onClick={closeMobileMenu}
                        style={{ overscrollBehavior: "none" }}
                    />
                    <motion.div
                        variants={mobileMenuVariants}
                        className="relative flex flex-col items-center justify-center h-full px-6"
                        style={{ overscrollBehavior: "none" }}
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
    );
}
