"use client";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/contact-info";
import { Target } from "lucide-react";
import { Section, SectionHeader } from "components/shared";
import { slideInLeft, slideInRight } from "lib/animations";

export default function AboutStory() {
    return (
        <Section background="gray" aria-labelledby="company-story-heading">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideInLeft}
                    className="lg:col-span-6"
                >
                    <div className="relative">
                        <img
                            src="/attic.webp?height=600&width=700"
                            alt={`${contactInfo.founder} transitioning from military service to professional home inspection career`}
                            className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl" />
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-neutral-200/5 to-primary/5 rounded-3xl blur-xl -z-10" />
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideInRight}
                    className="lg:col-span-6"
                >
                    <SectionHeader
                        badge="Our Story"
                        badgeIcon={<Target className="w-4 h-4" />}
                        title="From Military Service to Home Protection"
                        titleGradient={true}
                        centered={false}
                        className="mb-8"
                    />

                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                        <p>
                            <strong className="text-neutral-900">
                                {contactInfo.company}
                            </strong>{" "}
                            was founded by{" "}
                            <strong className="text-primary">
                                {contactInfo.founder}
                            </strong>
                            , a dedicated military veteran who recognized the
                            critical need for thorough, honest home inspections
                            throughout Michigan.
                        </p>

                        <p>
                            After serving our country with honor and
                            distinction, Charlie brought the same level of
                            precision, attention to detail, and unwavering
                            integrity that defined his military service to the
                            home inspection industry.
                        </p>

                        <p>
                            What began as a one-person mission has evolved into
                            a team of four full-time certified inspectors, each
                            handpicked and trained to uphold Charlie's
                            commitment to protecting Michigan families through
                            comprehensive, technology-enhanced home evaluations.
                        </p>

                        <div className="bg-gradient-to-r from-primary/10 to-neutral-100/50 rounded-2xl p-6 border border-primary/20">
                            <p className="text-primary font-semibold text-xl mb-2">
                                Over 3,500 inspections later...
                            </p>
                            <p className="text-neutral-700">
                                We continue to serve with the same dedication,
                                precision, and unwavering commitment to
                                excellence that defined our military service.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
