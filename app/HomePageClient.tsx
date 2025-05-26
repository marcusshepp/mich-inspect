"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { contactInfo } from "@/lib/contact-info"
import {
  Phone,
  Mail,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Camera,
  FileText,
  Home,
  Zap,
  Droplets,
  Star,
  Calendar,
} from "lucide-react"

// Enhanced loading component
function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="w-16 h-16 border-4 border-white border-t-secondary rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-lg font-semibold"
        >
          Loading {contactInfo.company}
        </motion.p>
      </div>
    </motion.div>
  )
}

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
}

// Animated section wrapper component
function AnimatedSection({ children, variant = fadeInUp, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Parallax effect for hero background
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Home,
      title: "Complete Home Inspections",
      description: "Comprehensive evaluation of all major systems and components",
      features: ["Structural assessment", "Electrical systems", "Plumbing evaluation"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Camera,
      title: "Thermal Imaging",
      description: "Advanced infrared technology to detect hidden issues",
      features: ["Energy loss detection", "Moisture identification", "Electrical hotspots"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Electrical Inspections",
      description: "Thorough electrical system safety evaluations",
      features: ["Panel inspections", "Wiring assessment", "Safety compliance"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Droplets,
      title: "Plumbing Systems",
      description: "Complete water and drainage system analysis",
      features: ["Pipe condition", "Water pressure", "Leak detection"],
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  const trustIndicators = [
    { number: "3,500+", label: "Inspections Completed", icon: CheckCircle, color: "text-green-600" },
    { number: "10+", label: "Years Experience", icon: Calendar, color: "text-blue-600" },
    { number: "24", label: "Hour Report Delivery", icon: Clock, color: "text-orange-600" },
    { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-yellow-600" },
  ]

  const certifications = [
    {
      title: "InterNACHI Certified",
      description: "International Association of Certified Home Inspectors",
      icon: Award,
    },
    {
      title: "Veteran-Owned Business",
      description: "Proudly serving with military precision and integrity",
      icon: Shield,
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed in Michigan with comprehensive insurance",
      icon: FileText,
    },
  ]

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with enhanced parallax */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-white py-20 lg:py-32 px-6 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Enhanced background with parallax */}
        <motion.div className="absolute inset-0 opacity-10" style={{ y: heroY }} aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1
                id="hero-heading"
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Michigan's Most Trusted
                <motion.span
                  className="block text-secondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Home Inspector
                </motion.span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed">
                Get peace of mind with comprehensive home inspections by {contactInfo.founder}.
                <span className="block mt-2 font-semibold">
                  3,500+ inspections • 24-hour digital reports • Thermal imaging technology
                </span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary min-h-[44px]"
                  aria-label="Schedule your home inspection"
                >
                  <motion.span initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }}>
                    Schedule Inspection
                  </motion.span>
                </motion.button>

                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[44px]"
                  aria-label={`Call us at ${contactInfo.phone}`}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                  {contactInfo.phone}
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={slideInRight}
              className="relative"
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional home inspector conducting thermal imaging inspection with advanced equipment"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                  aria-hidden="true"
                ></div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-semibold text-lg">Professional Inspection in Progress</p>
                  <p className="text-sm opacity-90">Thermal imaging and comprehensive evaluation</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview with enhanced cards */}
      <section className="py-20 px-6 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Comprehensive Inspection Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From foundation to roof, we inspect every critical component of your potential home investment
            </p>
          </AnimatedSection>

          <AnimatedSection variant={staggerContainer}>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 group cursor-pointer"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`service-${index}-title`}
                >
                  <motion.div variants={cardHover}>
                    <motion.div
                      className="bg-accent-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-200 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <service.icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    </motion.div>

                    <h3 id={`service-${index}-title`} className="text-xl font-semibold text-neutral-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{service.description}</p>

                    <ul className="space-y-2" role="list">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-neutral-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Indicators with enhanced animations */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent-50 to-primary-50" aria-labelledby="trust-heading">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 id="trust-heading" className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-neutral-600">Over a decade of experience serving Michigan homeowners</p>
          </AnimatedSection>

          <AnimatedSection variant={staggerContainer}>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="text-center bg-white rounded-xl p-6 shadow-sm border border-neutral-200 cursor-pointer"
                  role="article"
                  aria-labelledby={`stat-${index}-number`}
                >
                  <motion.div variants={cardHover}>
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                      <indicator.icon className={`w-12 h-12 ${indicator.color} mx-auto mb-4`} aria-hidden="true" />
                    </motion.div>
                    <motion.div
                      id={`stat-${index}-number`}
                      className="text-3xl lg:text-4xl font-bold text-primary mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {indicator.number}
                    </motion.div>
                    <div className="text-neutral-600 font-medium">{indicator.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 px-6 bg-secondary" aria-labelledby="cta-heading">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              id="cta-heading"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Ready to Schedule Your Inspection?
            </motion.h2>
            <p className="text-xl text-secondary-100 mb-12 max-w-3xl mx-auto">
              Don't let hidden issues become costly surprises. Get your comprehensive home inspection scheduled today
              and make your home purchase with confidence.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="bg-white text-secondary hover:bg-neutral-100 px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary min-h-[44px]"
                aria-label={`Call us at ${contactInfo.phone} to schedule inspection`}
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </motion.div>
                {contactInfo.phone}
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary min-h-[44px]"
                aria-label={`Email us at ${contactInfo.email}`}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </motion.div>
                {contactInfo.email}
              </motion.a>
            </div>

            <motion.p
              className="text-secondary-100 text-lg"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
            >
              <strong>Same-day scheduling available</strong> • Digital reports within 24 hours
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-neutral-800 text-neutral-300 py-12 px-6" role="contentinfo">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <motion.h3 className="text-2xl font-bold text-white mb-4" whileHover={{ scale: 1.02 }}>
                  {contactInfo.company}
                </motion.h3>
                <p className="text-neutral-400 mb-4">Professional home inspection services by {contactInfo.founder}</p>
                <p className="text-sm text-neutral-500">InterNACHI Certified • Veteran-Owned • Licensed & Insured</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                <div className="space-y-2">
                  <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <motion.a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-white transition-colors focus:outline-none focus:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contactInfo.phone}
                    </motion.a>
                  </motion.p>
                  <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <motion.a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-white transition-colors focus:outline-none focus:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contactInfo.email}
                    </motion.a>
                  </motion.p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
                <p className="text-sm text-neutral-400">{contactInfo.serviceAreas.slice(0, 4).join(" • ")} & more</p>
              </div>
            </div>

            <motion.div
              className="border-t border-neutral-700 pt-8 text-center"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <p>&copy; 2024 {contactInfo.company}. All rights reserved.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
