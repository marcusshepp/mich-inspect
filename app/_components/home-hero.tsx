"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/lib/contact-info";
import {
    Phone,
    Calendar,
    Shield,
    Users,
    TrendingUp,
    Camera,
} from "lucide-react";
import {
    Button,
    FloatingElement,
    fadeInUp,
    staggerContainer,
    slideInRight,
} from "components/shared";

export default function HomeHero() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />

            <motion.div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-[url('/attic2.webp?height=1080&width=1920')] bg-cover bg-center bg-no-repeat"></div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />

            <FloatingElement
                delay={0}
                duration={6}
                className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            />

            <FloatingElement
                delay={2}
                duration={4}
                className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl"
            />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate={isHeroInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <motion.div variants={fadeInUp} className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" />
                                <span>
                                    Veteran-Owned & InterNACHI Certified
                                </span>
                            </div>
                        </motion.div>

                        <motion.h1
                            id="hero-heading"
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-white"
                        >
                            Michigan's Most
                            <motion.span
                                className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                Trusted Inspector
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl"
                        >
                            Get complete peace of mind with comprehensive home
                            inspections by{" "}
                            <span className="font-semibold text-white">
                                {contactInfo.founder}
                            </span>
                            .
                            <span className="block mt-4 text-lg">
                                ✓ 3,500+ inspections completed
                                <br />
                                ✓ 24-hour digital reports with photos
                                <br />✓ Advanced thermal imaging technology
                            </span>
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                variant="secondary"
                                size="lg"
                                className="px-8 py-4 text-lg font-bold shadow-lg bg-white text-primary hover:bg-white/90"
                                aria-label="Schedule your home inspection"
                            >
                                <Calendar className="w-5 h-5" />
                                Schedule Inspection
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold shadow-lg"
                                as="a"
                                href={`tel:${contactInfo.phone}`}
                                aria-label={`Call us at ${contactInfo.phone}`}
                            >
                                <Phone className="w-5 h-5" />
                                {contactInfo.phone}
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-white/80"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>Same-day scheduling</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>Digital reports in 24hrs</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isHeroInView ? "visible" : "hidden"}
                        variants={slideInRight}
                        className="lg:col-span-5 relative"
                    >
                        <motion.div
                            className="relative perspective-1000"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl mb-10 shadow-2xl overflow-hidden border border-white/20">
                                <img
                                    src="/attic.webp?height=500&width=600"
                                    alt="Professional home inspector conducting thermal imaging inspection with advanced equipment"
                                    className="w-full h-80 lg:h-96 object-cover relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                                <motion.div
                                    className="absolute bottom-6 left-6 right-6 text-white bg-neutral-900/80 rounded-2xl p-4 border border-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                            <Camera className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">
                                                Professional Inspection
                                            </p>
                                            <p className="text-sm text-white/80">
                                                Thermal imaging & comprehensive
                                                evaluation
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 rounded-3xl blur-xl -z-10" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
