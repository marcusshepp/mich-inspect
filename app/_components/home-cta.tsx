"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Camera, Shield, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import { Section, Button, FloatingElement, fadeInUp } from "components/shared";

export default function HomeCTA() {
    return (
        <Section
            background="dark"
            className="py-24 px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden"
            aria-labelledby="cta-heading"
        >
            <FloatingElement
                delay={0}
                duration={6}
                className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <FloatingElement
                delay={2}
                duration={4}
                className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"
            />

            <div className="text-center relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-8 border border-white/20">
                        <Phone className="w-4 h-4" />
                        <span>Ready to Get Started?</span>
                    </motion.div>

                    <motion.h2
                        id="cta-heading"
                        className="text-5xl lg:text-6xl font-bold mb-8"
                        whileHover={{ scale: 1.02 }}
                    >
                        Schedule Your Inspection
                        <span className="block text-white/90">Today</span>
                    </motion.h2>

                    <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Don't let hidden issues become costly surprises. Get
                        your comprehensive home inspection scheduled today and
                        make your home purchase with complete confidence.
                    </p>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12">
                        <Button
                            variant="ghost"
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 px-10 py-5 text-xl font-bold shadow-2xl"
                            as="a"
                            href={`tel:${contactInfo.phone}`}
                            aria-label={`Call us at ${contactInfo.phone} to schedule inspection`}
                        >
                            <Phone className="w-6 h-6" />
                            {contactInfo.phone}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-5 text-xl font-bold"
                            as="a"
                            href={`mailto:${contactInfo.email}`}
                            aria-label={`Email us at ${contactInfo.email}`}
                        >
                            <Mail className="w-6 h-6" />
                            {contactInfo.email}
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
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
                    </div>

                    <motion.div
                        className="mt-12 pt-8 border-t border-white/20"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.02 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-white/80 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">Service Areas:</span>
                        </div>
                        <p className="text-lg font-semibold text-white">
                            {contactInfo.serviceAreas.slice(0, 4).join(" • ")} &
                            more
                        </p>
                        <p className="text-white/80 mt-2">
                            <strong>Same-day scheduling available</strong> •
                            Digital reports within 24 hours
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
