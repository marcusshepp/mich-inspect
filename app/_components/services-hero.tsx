"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/lib/contact-info";
import { Award, Phone, Calendar, Clock, Camera, Shield } from "lucide-react";
import {
    Button,
    FloatingElement,
    fadeInUp,
    staggerContainer,
} from "components/shared";

export default function ServicesHero() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="services-hero-heading"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>

            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
            </div>

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
                <motion.div
                    initial="hidden"
                    animate={isHeroInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <div className="mt-20 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium">
                            <Award className="w-4 h-4" />
                            <span>
                                InterNACHI Standards • Advanced Technology
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        id="services-hero-heading"
                        variants={fadeInUp}
                        className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-white"
                    >
                        Complete Property
                        <span className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                            Inspection Services
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto"
                    >
                        From residential homes to commercial buildings, we
                        provide comprehensive inspection services using advanced
                        thermal imaging technology and following rigorous
                        InterNACHI Standards of Practice.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            className="px-10 py-5 text-lg font-bold shadow-2xl bg-white text-primary hover:bg-white/90"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Inspection
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-primary px-10 py-5 text-lg font-bold shadow-xl"
                            as="a"
                            href={`tel:${contactInfo.phone}`}
                        >
                            <Phone className="w-5 h-5" />
                            {contactInfo.phone}
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="grid md:grid-cols-3 gap-6 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 text-white/80">
                            <Clock className="w-5 h-5 text-white" />
                            <span className="font-medium">24-Hour Reports</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/80">
                            <Camera className="w-5 h-5 text-white" />
                            <span className="font-medium">Thermal Imaging</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/80">
                            <Shield className="w-5 h-5 text-white" />
                            <span className="font-medium">Veteran-Owned</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
