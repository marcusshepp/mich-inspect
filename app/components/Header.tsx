"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Menu, X, Shield, Award } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname: string = usePathname();
    const { scrollYProgress } = useScroll();
    const scrollIndicatorWidth = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"],
        { clamp: true },
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

    return (
        <>
            {" "}
            <motion.div
                className="scroll-indicator fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary z-50 origin-left"
                style={{
                    scaleX: scrollIndicatorWidth,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
            />{" "}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled ? "glass shadow-lg" : "bg-primary/95"
                }`}
                style={
                    {
                        outline: "none",
                        border: "none",
                        WebkitTapHighlightColor: "transparent",
                        WebkitUserSelect: "none",
                        userSelect: "none",
                    } as React.CSSProperties
                }
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 lg:h-18">
                        <motion.div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="flex flex-col group"
                                style={
                                    {
                                        outline: "none",
                                        WebkitTapHighlightColor: "transparent",
                                    } as React.CSSProperties
                                }
                            >
                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative">
                                        {" "}
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                isScrolled
                                                    ? "bg-primary shadow-sm"
                                                    : "bg-white/10 border border-white/20"
                                            }`}
                                            style={
                                                {
                                                    outline: "none",
                                                    WebkitTapHighlightColor:
                                                        "transparent",
                                                } as React.CSSProperties
                                            }
                                        >
                                            <Shield
                                                className={`w-6 h-6 ${
                                                    isScrolled
                                                        ? "text-white"
                                                        : "text-white"
                                                }`}
                                                style={
                                                    {
                                                        outline: "none",
                                                        WebkitTapHighlightColor:
                                                            "transparent",
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </div>
                                        <div
                                            className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                                            style={
                                                {
                                                    outline: "none",
                                                    WebkitTapHighlightColor:
                                                        "transparent",
                                                } as React.CSSProperties
                                            }
                                        >
                                            <Award
                                                className="w-2.5 h-2.5 text-white"
                                                style={
                                                    {
                                                        outline: "none",
                                                        WebkitTapHighlightColor:
                                                            "transparent",
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <motion.h1
                                            className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                                                isScrolled
                                                    ? "text-neutral-900"
                                                    : "text-white"
                                            }`}
                                        >
                                            {contactInfo.company}
                                        </motion.h1>
                                        <motion.span
                                            className={`text-xs lg:text-sm transition-all duration-300 ${
                                                isScrolled
                                                    ? "text-neutral-600"
                                                    : "text-white/80"
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
                            <motion.div className="hidden sm:flex items-center space-x-3">
                                {" "}
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                        isScrolled
                                            ? "bg-primary shadow-sm"
                                            : "bg-white/10 border border-white/20"
                                    }`}
                                    style={
                                        {
                                            outline: "none",
                                            WebkitTapHighlightColor:
                                                "transparent",
                                        } as React.CSSProperties
                                    }
                                >
                                    <Phone
                                        className="w-5 h-5 text-white"
                                        style={
                                            {
                                                outline: "none",
                                                WebkitTapHighlightColor:
                                                    "transparent",
                                            } as React.CSSProperties
                                        }
                                    />
                                </div>
                                <motion.a
                                    href={`tel:${contactInfo.phone}`}
                                    className={`text-sm lg:text-base font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                                        isScrolled
                                            ? "text-neutral-700 hover:text-primary"
                                            : "text-white hover:text-white/80"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {contactInfo.phone}
                                </motion.a>
                            </motion.div>{" "}
                            <motion.button
                                onClick={toggleMobileMenu}
                                className={`lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                                    isScrolled
                                        ? "text-neutral-700 hover:bg-neutral-100"
                                        : "text-white hover:bg-white/10"
                                }`}
                                aria-label={
                                    isMobileMenuOpen
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={isMobileMenuOpen}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    minHeight: "44px",
                                    minWidth: "44px",
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: isMobileMenuOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {" "}
                                    {isMobileMenuOpen ? (
                                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                    ) : (
                                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <div className="h-17 lg:h-19" />
        </>
    );
}
