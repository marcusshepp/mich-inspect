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
    { name: "Schedule Inspection", href: "/schedule-inspection" },
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
                    />{" "}
                    <motion.div
                        variants={mobileMenuVariants}
                        className="relative flex flex-col h-full px-4 sm:px-6 md:px-8 safe-area-inset overflow-y-auto"
                        style={{
                            paddingTop:
                                "max(2rem, env(safe-area-inset-top, 2rem))",
                            paddingBottom:
                                "max(2rem, env(safe-area-inset-bottom, 2rem))",
                        }}
                    >
                        <motion.button
                            variants={mobileItemVariants}
                            onClick={closeMobileMenu}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2 sm:p-3 text-white hover:bg-white/10 rounded-xl transition-colors z-10"
                            aria-label="Close menu"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                top: "max(1rem, env(safe-area-inset-top, 1rem))",
                            }}
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.button>{" "}
                        <motion.div
                            variants={mobileItemVariants}
                            className="text-center mb-6 sm:mb-8 md:mb-12 pt-12 sm:pt-16"
                        >
                            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                            </div>
                            <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 px-4">
                                {contactInfo.company}
                            </motion.h2>
                            <p className="text-sm sm:text-base text-white/80 px-4">
                                Professional Home Inspections
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm text-white/70 px-4">
                                <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                <span className="text-center">
                                    InterNACHI Certified • Veteran-Owned
                                </span>
                            </div>
                        </motion.div>{" "}
                        <motion.nav
                            className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12 w-full max-w-sm mx-auto px-2"
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
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={`w-full text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl block text-center ${
                                                    pathname === item.href
                                                        ? "text-white bg-white/15 border border-white/30 shadow-lg"
                                                        : "text-white hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                                                }`}
                                                style={
                                                    {
                                                        outline: "none",
                                                        WebkitTapHighlightColor:
                                                            "transparent",
                                                    } as React.CSSProperties
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                ),
                            )}
                        </motion.nav>{" "}
                        <motion.div
                            variants={mobileItemVariants}
                            className="text-center space-y-4 sm:space-y-6 w-full max-w-sm mx-auto px-2"
                        >
                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center justify-center space-x-3 sm:space-x-4 text-white hover:text-white transition-colors px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 border border-white/20 w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={
                                    {
                                        outline: "none",
                                        WebkitTapHighlightColor: "transparent",
                                    } as React.CSSProperties
                                }
                            >
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"
                                    style={
                                        {
                                            outline: "none",
                                            WebkitTapHighlightColor:
                                                "transparent",
                                        } as React.CSSProperties
                                    }
                                >
                                    <Phone
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        style={
                                            {
                                                outline: "none",
                                                WebkitTapHighlightColor:
                                                    "transparent",
                                            } as React.CSSProperties
                                        }
                                    />
                                </div>
                                <div className="text-left min-w-0 flex-1">
                                    <div className="text-lg sm:text-xl font-semibold truncate">
                                        {contactInfo.phone}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/70">
                                        Call for inspection
                                    </div>
                                </div>
                            </motion.a>

                            <motion.p className="text-white/70 text-xs sm:text-sm max-w-xs mx-auto px-2 leading-relaxed">
                                Serving{" "}
                                {contactInfo.serviceAreas
                                    .slice(0, 3)
                                    .join(", ")}{" "}
                                & surrounding areas
                            </motion.p>
                        </motion.div>
                        {/* Bottom spacer for safe area */}
                        <div className="flex-1 min-h-4" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
