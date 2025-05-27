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
            color: "from-primary/10 to-primary/20",
        },
        {
            title: "InterNACHI Certified Professional Inspector",
            icon: Award,
            description:
                "International Association of Certified Home Inspectors - highest industry standard",
            color: "from-primary/10 to-primary/20",
        },
        {
            title: "InterNACHI Certified Well & Septic Evaluator",
            icon: Droplets,
            description:
                "Specialized certification for comprehensive water and septic system evaluation",
            color: "from-neutral-100 to-neutral-200",
        },
        {
            title: "InterNACHI Certified Mold Inspector",
            icon: FlaskConical,
            description:
                "Professional mold detection, assessment, and indoor air quality evaluation",
            color: "from-success-100 to-success-200",
        },
        {
            title: "InterNACHI Certified Radon Tester",
            icon: Home,
            description:
                "Certified to test for dangerous radon gas levels and provide mitigation guidance",
            color: "from-neutral-100 to-neutral-200",
        },
        {
            title: "MSU Certified Well & Septic Inspector",
            icon: Zap,
            description:
                "Michigan State University specialized certification program for water systems",
            color: "from-primary/10 to-primary/20",
        },
        {
            title: "Certified Infrared Thermography Technician",
            icon: Camera,
            description:
                "Advanced thermal imaging technology certification for hidden issue detection",
            color: "from-neutral-100 to-neutral-200",
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
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-3"
            >
                {certifications.map((cert, index: number) => (
                    <motion.div
                        key={cert.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="card-premium group cursor-pointer h-full"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`cert-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="card-content"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={<cert.icon className="w-8 h-8" />}
                                        gradient={cert.color}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200 shadow-sm"
                                    />
                                </div>

                                <div className="text-center flex-grow flex flex-col">
                                    <h3
                                        id={`cert-${index}-title`}
                                        className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors leading-tight"
                                    >
                                        {cert.title}
                                    </h3>
                                    <p className="text-neutral-600 text-base leading-relaxed flex-grow">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
