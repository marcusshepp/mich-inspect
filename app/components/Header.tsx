"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationItem {
  name: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to opacity for scroll indicator
  const scrollIndicatorWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Enhanced animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

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
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
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
  }

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
      transition: { duration: 0.2 },
    },
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-primary"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <Link href="/" className="flex flex-col group">
                <motion.h1
                  className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                    isScrolled ? "text-primary" : "text-white"
                  } group-hover:scale-105`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {contactInfo.company}
                </motion.h1>
                <motion.span
                  className={`text-xs lg:text-sm transition-all duration-300 ${
                    isScrolled ? "text-neutral-600" : "text-primary-100"
                  }`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Professional Home Inspections
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              variants={itemVariants}
              className="hidden lg:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={`relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-md ${
                      pathname === item.href
                        ? isScrolled
                          ? "text-primary bg-primary-50"
                          : "text-secondary bg-white/10"
                        : isScrolled
                          ? "text-neutral-700 hover:text-primary hover:bg-primary-50"
                          : "text-white hover:text-primary-200 hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? "bg-primary" : "bg-secondary"
                        }`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Phone Number & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Phone Number - Enhanced hover effect */}
              <motion.div variants={itemVariants} className="hidden sm:flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Phone
                    className={`w-4 h-4 transition-colors duration-300 ${isScrolled ? "text-secondary" : "text-white"}`}
                  />
                </motion.div>
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  className={`text-sm lg:text-base font-semibold transition-all duration-300 px-2 py-1 rounded ${
                    isScrolled
                      ? "text-neutral-700 hover:text-secondary hover:bg-secondary-50"
                      : "text-white hover:text-primary-200 hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {contactInfo.phone}
                </motion.a>
              </motion.div>

              {/* Mobile Menu Button - Enhanced animation */}
              <motion.button
                variants={itemVariants}
                onClick={toggleMobileMenu}
                className={`lg:hidden p-3 rounded-md transition-all duration-300 ${
                  isScrolled
                    ? "text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200"
                    : "text-white hover:bg-primary-700 active:bg-primary-800"
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Enhanced animations */}
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
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/95 backdrop-blur-lg"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              variants={mobileMenuVariants}
              className="relative flex flex-col items-center justify-center h-full px-6"
            >
              {/* Close Button */}
              <motion.button
                variants={mobileItemVariants}
                onClick={closeMobileMenu}
                className="absolute top-6 right-6 p-3 text-white hover:bg-primary-700 rounded-md transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Company Info */}
              <motion.div variants={mobileItemVariants} className="text-center mb-12">
                <motion.h2 className="text-3xl font-bold text-white mb-2" whileHover={{ scale: 1.05 }}>
                  {contactInfo.company}
                </motion.h2>
                <p className="text-primary-100">Professional Home Inspections</p>
              </motion.div>

              {/* Navigation Links */}
              <motion.nav
                className="flex flex-col items-center space-y-6 mb-12"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {navigationItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants} custom={index}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-semibold transition-all duration-300 px-6 py-3 rounded-lg ${
                          pathname === item.href
                            ? "text-secondary bg-white/10 border border-secondary/30"
                            : "text-white hover:text-secondary hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Contact Info */}
              <motion.div variants={mobileItemVariants} className="text-center space-y-4">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center justify-center space-x-3 text-white hover:text-secondary transition-colors px-6 py-3 rounded-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div whileHover={{ rotate: 10 }}>
                    <Phone className="w-5 h-5" />
                  </motion.div>
                  <span className="text-xl font-semibold">{contactInfo.phone}</span>
                </motion.a>

                <motion.p className="text-primary-100 text-sm" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }}>
                  Serving {contactInfo.serviceAreas.slice(0, 3).join(", ")} & more
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-17 lg:h-21" />
    </>
  )
}
