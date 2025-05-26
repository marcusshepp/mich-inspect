"use client";
import {
    Card,
    cardHover,
    fadeInUp,
    IconBox,
    Section,
    SectionHeader,
    staggerContainer,
} from "components/shared";
import { motion } from "framer-motion";
import {
    Award,
    Building,
    Droplets,
    FlaskConical,
    Home,
    Zap,
    Camera,
} from "lucide-react";

export default function AboutCertifications() {
    const certifications = [
        {
            title: "State of Michigan Licensed Builder",
            icon: Building,
            description:
                "Official state licensing for construction and building expertise with comprehensive training",
            color: "from-blue-500 to-blue-600",
        },
        {
            title: "InterNACHI Certified Professional Inspector",
            icon: Award,
            description:
                "International Association of Certified Home Inspectors - highest industry standard",
            color: "from-primary to-primary-600",
        },
        {
            title: "InterNACHI Certified Well & Septic Evaluator",
            icon: Droplets,
            description:
                "Specialized certification for comprehensive water and septic system evaluation",
            color: "from-cyan-500 to-cyan-600",
        },
        {
            title: "InterNACHI Certified Mold Inspector",
            icon: FlaskConical,
            description:
                "Professional mold detection, assessment, and indoor air quality evaluation",
            color: "from-green-500 to-green-600",
        },
        {
            title: "InterNACHI Certified Radon Tester",
            icon: Home,
            description:
                "Certified to test for dangerous radon gas levels and provide mitigation guidance",
            color: "from-orange-500 to-orange-600",
        },
        {
            title: "MSU Certified Well & Septic Inspector",
            icon: Zap,
            description:
                "Michigan State University specialized certification program for water systems",
            color: "from-purple-500 to-purple-600",
        },
        {
            title: "Certified Infrared Thermography Technician",
            icon: Camera,
            description:
                "Advanced thermal imaging technology certification for hidden issue detection",
            color: "from-red-500 to-red-600",
        },
    ];

    return (
        <Section background="gray" aria-labelledby="certifications-heading">
            <SectionHeader
                badge="Professional Certifications"
                badgeIcon={<Award className="w-4 h-4" />}
                title="Industry-Leading Credentials"
                subtitle="Our extensive certifications ensure you receive the most comprehensive and professional inspection services available"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {certifications.map((cert, index: number) => (
                    <motion.div
                        key={cert.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="bg-white p-6 group cursor-pointer h-full"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`cert-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-6">
                                    <IconBox
                                        icon={<cert.icon className="w-8 h-8" />}
                                        gradient={cert.color}
                                        size="md"
                                        className="group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                    />
                                </div>

                                <h3
                                    id={`cert-${index}-title`}
                                    className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors leading-tight flex-grow-0"
                                >
                                    {cert.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                    {cert.description}
                                </p>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
