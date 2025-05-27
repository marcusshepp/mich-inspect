"use client";
import { motion } from "framer-motion";
import {
    Camera,
    FileText,
    Droplets,
    Lightbulb,
    CheckCircle,
} from "lucide-react";
import {
    Section,
    SectionHeader,
    Card,
    IconBox,
    fadeInUp,
    staggerContainer,
    cardHover,
} from "components/shared";

export default function ServicesTechnology() {
    const technologyHighlights = [
        {
            title: "Advanced Thermal Imaging",
            description:
                "State-of-the-art FLIR infrared cameras detect hidden moisture, energy loss, electrical issues, and structural problems invisible to the naked eye",
            icon: Camera,
            features: [
                "Energy loss detection",
                "Hidden moisture identification",
                "Electrical hot spot detection",
                "Structural anomaly visualization",
            ],
            gradient: "from-primary to-primary/80",
        },
        {
            title: "Comprehensive Digital Reports",
            description:
                "Professional digital inspection reports with high-resolution photos, detailed findings, and actionable recommendations delivered within 24 hours",
            icon: FileText,
            features: [
                "24-hour delivery guarantee",
                "High-resolution photography",
                "Detailed findings documentation",
                "Actionable repair recommendations",
            ],
            gradient: "from-neutral-700 to-neutral-800",
        },
        {
            title: "Professional Moisture Detection",
            description:
                "Advanced moisture meters and humidity sensors identify hidden water damage, potential mold growth areas, and structural moisture issues",
            icon: Droplets,
            features: [
                "Hidden water damage detection",
                "Mold risk assessment",
                "Structural moisture analysis",
                "HVAC humidity evaluation",
            ],
            gradient: "from-primary to-primary/80",
        },
    ];

    return (
        <Section background="dark" aria-labelledby="technology-heading">
            <SectionHeader
                badge="Advanced Technology"
                badgeIcon={
                    <div className="bg-white/10 rounded-full p-1">
                        <Lightbulb className="w-3 h-3" />
                    </div>
                }
                title="State-of-the-Art Inspection Technology"
                subtitle="We utilize cutting-edge equipment and advanced technology to provide the most comprehensive and accurate inspections available in the industry"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-3"
            >
                {technologyHighlights.map((tech, index: number) => (
                    <motion.div
                        key={tech.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="glass-dark rounded-2xl border border-white/20 group cursor-pointer h-full bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-white/5"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`tech-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="card-content-lg h-full flex flex-col text-center"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={
                                            <tech.icon className="w-10 h-10" />
                                        }
                                        gradient={tech.gradient}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200 shadow-lg"
                                    />
                                </div>

                                <h3
                                    id={`tech-${index}-title`}
                                    className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-white"
                                >
                                    {tech.title}
                                </h3>

                                <p className="text-neutral-300 leading-relaxed mb-6 group-hover:text-white transition-colors flex-grow text-base">
                                    {tech.description}
                                </p>

                                <ul className="space-y-3" role="list">
                                    {tech.features.map(
                                        (
                                            feature: string,
                                            featureIndex: number,
                                        ) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center text-sm text-neutral-300 group-hover:text-white transition-colors leading-relaxed"
                                            >
                                                <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
