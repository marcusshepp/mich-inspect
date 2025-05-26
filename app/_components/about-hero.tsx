"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/lib/contact-info";
import { Shield, Users, TrendingUp, Award, MapPin } from "lucide-react";
import { FloatingElement, staggerContainer } from "components/shared";
import { fadeInUp, slideInRight } from "lib/animations";

export default function AboutHero() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="about-hero-heading"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900"></div>
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary/20" />

            <FloatingElement
                delay={0}
                duration={8}
                className="absolute top-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium">
                                <Shield className="w-4 h-4" />
                                <span>Veteran-Owned Since 2014</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            id="about-hero-heading"
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-white"
                        >
                            Meet Your
                            <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                                Inspection Team
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed max-w-2xl"
                        >
                            A veteran-owned business built on military values:
                            integrity, precision, and unwavering commitment to
                            protecting Michigan families through comprehensive
                            home evaluations.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center gap-6 justify-center lg:justify-start mb-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-white">
                                        Veteran-Owned Business
                                    </p>
                                    <p className="text-primary-200">
                                        Serving with military precision
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 gap-6 text-sm text-primary-200"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>4 Full-time Inspectors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>3,500+ Inspections</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                <span>InterNACHI Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Michigan Licensed</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isHeroInView ? "visible" : "hidden"}
                        variants={slideInRight}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative perspective-1000">
                            <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                                <img
                                    src="/placeholder.svg?height=500&width=600"
                                    alt={`${contactInfo.founder}, founder of ${contactInfo.company}, professional home inspector and military veteran`}
                                    className="w-full h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white backdrop-blur-sm bg-black/20 rounded-2xl p-4 border border-white/20">
                                    <p className="text-xl font-bold">
                                        {contactInfo.founder}
                                    </p>
                                    <p className="text-sm text-primary-200">
                                        Founder & Lead Inspector
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
