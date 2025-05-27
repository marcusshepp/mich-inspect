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
            transition: { duration: 0.2 },
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };
    const mobileItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.15 },
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
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"
                        onClick={closeMobileMenu}
                    />
                    <motion.div
                        variants={mobileMenuVariants}
                        className="relative flex flex-col items-center justify-center h-full px-8"
                    >
                        <motion.button
                            variants={mobileItemVariants}
                            onClick={closeMobileMenu}
                            className="absolute top-8 right-8 p-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                            aria-label="Close menu"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>
                        <motion.div
                            variants={mobileItemVariants}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <motion.h2 className="text-3xl font-bold text-white mb-2">
                                {contactInfo.company}
                            </motion.h2>
                            <p className="text-white/80">
                                Professional Home Inspections
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-white/70">
                                <Award className="w-4 h-4" />
                                <span>
                                    InterNACHI Certified • Veteran-Owned
                                </span>
                            </div>
                        </motion.div>
                        <motion.nav
                            className="flex flex-col items-center space-y-8 mb-16 w-full max-w-sm"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            {navigationItems.map(
                                (item: NavigationItem, index: number) => (
                                    <motion.div
                                        key={item.name}
                                        variants={mobileItemVariants}
                                        custom={index}
                                        className="w-full"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={`w-full text-2xl font-semibold transition-all duration-300 px-12 py-6 rounded-2xl block text-center ${
                                                    pathname === item.href
                                                        ? "text-primary bg-white/15 border border-white/30 shadow-lg"
                                                        : "text-white hover:text-white/80 hover:bg-white/10 border border-transparent hover:border-white/20"
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
                            className="text-center space-y-6 w-full max-w-sm"
                        >
                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center justify-center space-x-4 text-white hover:text-white/80 transition-colors px-8 py-4 rounded-2xl hover:bg-white/10 border border-white/20 w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-semibold">
                                        {contactInfo.phone}
                                    </div>
                                    <div className="text-sm text-white/70">
                                        Call for inspection
                                    </div>
                                </div>
                            </motion.a>
                            <motion.p className="text-white/70 text-sm max-w-xs mx-auto">
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
