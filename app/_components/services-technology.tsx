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
            gradient: "from-red-500 to-red-600",
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
            gradient: "from-blue-500 to-blue-600",
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
            gradient: "from-cyan-500 to-cyan-600",
        },
    ];

    return (
        <Section background="dark" aria-labelledby="technology-heading">
            <SectionHeader
                badge="Advanced Technology"
                badgeIcon={
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
                        <Lightbulb className="w-3 h-3" />
                    </div>
                }
                title="State-of-the-Art Inspection Technology"
                subtitle="We utilize cutting-edge equipment and advanced technology to provide the most comprehensive and accurate inspections available in the industry"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-3 gap-8"
            >
                {technologyHighlights.map((tech, index: number) => (
                    <motion.div
                        key={tech.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-sm group cursor-pointer h-full"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`tech-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="h-full flex flex-col text-center"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={
                                            <tech.icon className="w-10 h-10" />
                                        }
                                        gradient={tech.gradient}
                                        size="lg"
                                        className="group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                                    />
                                </div>

                                <h3
                                    id={`tech-${index}-title`}
                                    className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors"
                                >
                                    {tech.title}
                                </h3>

                                <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-white transition-colors flex-grow">
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
                                                className="flex items-center text-sm text-slate-300 group-hover:text-white transition-colors"
                                            >
                                                <CheckCircle className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
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
