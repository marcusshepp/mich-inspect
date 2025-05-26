"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { contactInfo } from "@/lib/contact-info"
import {
  Home,
  Building,
  CheckCircle,
  Camera,
  Droplets,
  Zap,
  Shield,
  FileText,
  Phone,
  Mail,
  Award,
  Search,
  Bug,
  FlaskConical,
  Thermometer,
  Wrench,
  Eye,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react"

// Loading component
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
          Loading Services
        </motion.p>
      </div>
    </motion.div>
  )
}

// Animation variants
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
      delayChildren: 0.1,
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

export default function ServicesPageContent() {
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const residentialAreas = [
    {
      title: "Roof & Attic",
      description: "Complete roof structure, materials, ventilation, and attic insulation evaluation",
      icon: Home,
      details: ["Shingles & materials", "Gutters & downspouts", "Ventilation systems", "Insulation assessment"],
    },
    {
      title: "Exterior",
      description: "Siding, windows, doors, and overall structural exterior assessment",
      icon: Eye,
      details: ["Siding condition", "Window & door integrity", "Exterior trim", "Paint & caulking"],
    },
    {
      title: "Decks & Porches",
      description: "Safety and structural integrity of all outdoor structures",
      icon: Building,
      details: ["Structural support", "Railing safety", "Deck materials", "Foundation attachment"],
    },
    {
      title: "Grading & Drainage",
      description: "Property drainage patterns and water management systems",
      icon: Droplets,
      details: ["Site grading", "Drainage systems", "Water flow patterns", "Foundation protection"],
    },
    {
      title: "Basement & Foundation",
      description: "Foundation integrity, basement conditions, and structural elements",
      icon: Shield,
      details: ["Foundation walls", "Basement moisture", "Structural beams", "Floor systems"],
    },
    {
      title: "HVAC Systems",
      description: "Heating, ventilation, and air conditioning system evaluation",
      icon: Thermometer,
      details: ["Heating systems", "Cooling systems", "Ductwork", "Ventilation adequacy"],
    },
    {
      title: "Plumbing",
      description: "Complete water supply and drainage system inspection",
      icon: Wrench,
      details: ["Water supply lines", "Drainage systems", "Fixtures & faucets", "Water pressure"],
    },
    {
      title: "Electrical",
      description: "Electrical panel, wiring, and safety system evaluation",
      icon: Zap,
      details: ["Main electrical panel", "Wiring systems", "GFCI protection", "Safety compliance"],
    },
    {
      title: "Interior",
      description: "Interior walls, floors, ceilings, and built-in components",
      icon: Home,
      details: ["Wall conditions", "Floor systems", "Ceiling integrity", "Built-in appliances"],
    },
    {
      title: "Garages",
      description: "Garage structure, doors, and safety features assessment",
      icon: Building,
      details: ["Garage doors", "Structural elements", "Electrical systems", "Safety features"],
    },
  ]

  const additionalServices = [
    {
      title: "Commercial Building Inspection",
      description: "Comprehensive inspections for commercial properties and investment buildings",
      icon: Building,
      features: ["Multi-unit properties", "Commercial systems", "Code compliance", "Investment analysis"],
    },
    {
      title: "Pre-Listing Inspection",
      description: "Identify issues before listing to maximize sale price and reduce negotiations",
      icon: Star,
      features: ["Seller advantage", "Issue identification", "Repair prioritization", "Market preparation"],
    },
    {
      title: "New Construction Inspection",
      description: "Quality assurance for newly built homes and construction oversight",
      icon: Wrench,
      features: ["Builder quality check", "Code compliance", "Warranty protection", "Peace of mind"],
    },
    {
      title: "Four-Point Inspection",
      description: "Insurance-focused inspection of HVAC, electrical, plumbing, and roofing",
      icon: CheckCircle,
      features: ["Insurance requirements", "System age verification", "Safety assessment", "Quick turnaround"],
    },
    {
      title: "Re-Inspection",
      description: "Follow-up inspections to verify completed repairs and improvements",
      icon: Search,
      features: ["Repair verification", "Safety confirmation", "Documentation", "Peace of mind"],
    },
    {
      title: "WDO/Termite Inspection",
      description: "Wood-destroying organism detection and damage assessment",
      icon: Bug,
      features: ["Termite detection", "Wood damage assessment", "Treatment recommendations", "Prevention advice"],
    },
    {
      title: "Mold Inspection",
      description: "Professional mold detection and indoor air quality assessment",
      icon: FlaskConical,
      features: ["Visual inspection", "Moisture detection", "Air quality testing", "Health protection"],
    },
    {
      title: "Radon Testing",
      description: "Professional radon gas testing for health and safety protection",
      icon: Thermometer,
      features: ["EPA protocols", "Accurate testing", "Health protection", "Mitigation guidance"],
    },
    {
      title: "Water Testing & Septic Evaluations",
      description: "Well water quality testing and septic system functionality assessment",
      icon: Droplets,
      features: ["Water quality analysis", "Septic pumping evaluation", "System functionality", "Health safety"],
    },
    {
      title: "HUD Manufactured Home Certifications",
      description: "Specialized inspections for manufactured and mobile homes",
      icon: Home,
      features: ["HUD compliance", "Manufactured home expertise", "Certification process", "Financing assistance"],
    },
  ]

  const technologyHighlights = [
    {
      title: "Thermal Imaging Technology",
      description: "Advanced infrared cameras detect hidden moisture, energy loss, and electrical issues",
      icon: Camera,
    },
    {
      title: "Digital Reports",
      description: "Comprehensive digital reports delivered within 24 hours with photos and recommendations",
      icon: FileText,
    },
    {
      title: "Moisture Detection",
      description: "Professional moisture meters identify hidden water damage and potential mold issues",
      icon: Droplets,
    },
  ]

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-white py-20 lg:py-32 px-6 overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              id="services-hero-heading"
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Complete Property
              <span className="block text-secondary">Inspection Services</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed">
              From residential homes to commercial buildings, we provide comprehensive inspection services using
              advanced technology and InterNACHI Standards of Practice.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg min-h-[44px]"
              >
                Schedule Inspection
              </motion.button>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Residential Inspection */}
      <section className="py-20 px-6 bg-white" aria-labelledby="residential-heading">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 id="residential-heading" className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Residential Home Inspection
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our comprehensive residential inspection covers every major system and component of your home, following
              InterNACHI Standards of Practice for thorough evaluation.
            </p>
          </AnimatedSection>

          <AnimatedSection variant={staggerContainer}>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 cursor-pointer"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`area-${index}-title`}
                >
                  <motion.div variants={cardHover}>
                    <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <area.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>

                    <h3 id={`area-${index}-title`} className="text-xl font-bold text-neutral-800 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{area.description}</p>

                    <ul className="space-y-2" role="list">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-neutral-50" aria-labelledby="additional-services-heading">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 id="additional-services-heading" className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Additional Inspection Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Specialized inspection services for unique property needs and specific requirements
            </p>
          </AnimatedSection>

          <AnimatedSection variant={staggerContainer}>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 cursor-pointer group"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`service-${index}-title`}
                >
                  <motion.div variants={cardHover}>
                    <div className="bg-accent-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-200 transition-colors">
                      <service.icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    </div>

                    <h3 id={`service-${index}-title`} className="text-xl font-bold text-neutral-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-4" role="list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-neutral-700">
                          <ArrowRight className="w-4 h-4 text-secondary mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Highlights */}
      <section
        className="py-20 px-6 bg-gradient-to-br from-primary to-primary-800 text-white"
        aria-labelledby="technology-heading"
      >
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 id="technology-heading" className="text-4xl lg:text-5xl font-bold mb-6">
              Advanced Technology
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We use state-of-the-art equipment and technology to provide the most comprehensive inspections possible
            </p>
          </AnimatedSection>

          <AnimatedSection variant={staggerContainer}>
            <motion.div variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
              {technologyHighlights.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={fadeInUp}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                  role="article"
                  aria-labelledby={`tech-${index}-title`}
                >
                  <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <tech.icon className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <h3 id={`tech-${index}-title`} className="text-2xl font-bold mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-primary-100 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* InterNACHI Standards */}
      <section className="py-20 px-6 bg-white" aria-labelledby="standards-heading">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant={slideInLeft}>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="InterNACHI certification and standards documentation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection variant={slideInRight}>
              <h2 id="standards-heading" className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                InterNACHI Standards of Practice
              </h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                All our inspections follow the rigorous InterNACHI Standards of Practice, ensuring consistent,
                comprehensive, and professional evaluation of every property component.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive inspection protocols",
                  "Standardized reporting procedures",
                  "Professional ethics and conduct",
                  "Continuing education requirements",
                  "Industry best practices",
                ].map((standard, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg text-neutral-700">{standard}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-xl border border-accent-200">
                <p className="text-accent-800 font-semibold">
                  InterNACHI Certified Professional Inspector ensures you receive the highest quality inspection
                  services available in the industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Military Discount */}
      <section className="py-20 px-6 bg-secondary" aria-labelledby="discount-heading">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-secondary" aria-hidden="true" />
              </div>

              <h2 id="discount-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Military & Public Service Discount
              </h2>
              <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                We honor those who serve our communities and country. Special pricing available for active military,
                veterans, police officers, firefighters, and other public servants on all inspection services.
              </p>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="bg-white text-secondary hover:bg-neutral-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2 shadow-lg min-h-[44px]"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call for Discount Details
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-primary text-white" aria-labelledby="contact-cta-heading">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 id="contact-cta-heading" className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
              Contact {contactInfo.company} today to schedule your comprehensive property inspection. Professional
              service, advanced technology, and detailed reporting you can trust.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors flex items-center gap-3 shadow-lg min-h-[44px]"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                {contactInfo.phone}
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-xl font-semibold transition-colors flex items-center gap-3 min-h-[44px]"
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
                {contactInfo.email}
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span>24-Hour Reports</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Camera className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span>Thermal Imaging</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span>Veteran-Owned</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
