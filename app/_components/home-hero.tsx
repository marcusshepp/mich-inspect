"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/lib/contact-info";
import {
    Phone,
    Calendar,
    Shield,
    Users,
    TrendingUp,
    ArrowRight,
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
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary via-primary-800 to-primary-900"
                style={{ y: heroY, opacity: heroOpacity }}
            />

            <motion.div
                className="absolute inset-0 opacity-20"
                style={{ y: heroY }}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat"></div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary/40" />

            <FloatingElement
                delay={0}
                duration={8}
                className="absolute top-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
            />

            <FloatingElement
                delay={2}
                duration={6}
                className="absolute bottom-40 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium mb-6">
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
                                className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                Trusted Inspector
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed max-w-2xl"
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
                                className="px-8 py-4 text-lg font-bold shadow-2xl"
                                aria-label="Schedule your home inspection"
                            >
                                <Calendar className="w-5 h-5" />
                                Schedule Inspection
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold shadow-xl backdrop-blur-sm"
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
                            className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-primary-200"
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
                            <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                                <img
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Professional home inspector conducting thermal imaging inspection with advanced equipment"
                                    className="w-full h-80 lg:h-96 object-cover relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                                <motion.div
                                    className="absolute bottom-6 left-6 right-6 text-white backdrop-blur-sm bg-black/20 rounded-2xl p-4 border border-white/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                                            <Camera className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">
                                                Professional Inspection
                                            </p>
                                            <p className="text-sm text-primary-200">
                                                Thermal imaging & comprehensive
                                                evaluation
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl -z-10" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">
                        Scroll to explore
                    </span>
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
            </motion.div>
        </section>
    );
}
