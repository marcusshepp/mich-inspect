"use client";
import { motion } from "framer-motion";
import { Home, Camera, Zap, Droplets, CheckCircle, Award } from "lucide-react";
import {
    Section,
    SectionHeader,
    Card,
    IconBox,
    FeatureList,
    fadeInUp,
    staggerContainer,
    cardHover,
} from "components/shared";

export default function HomeServices() {
    const services = [
        {
            icon: Home,
            title: "Complete Home Inspections",
            description:
                "Comprehensive evaluation of all major systems and structural components",
            features: [
                "Structural assessment",
                "Electrical systems",
                "Plumbing evaluation",
                "HVAC inspection",
            ],
            gradient: "from-blue-500 to-blue-600",
            iconBg: "from-blue-100 to-blue-200",
        },
        {
            icon: Camera,
            title: "Thermal Imaging",
            description:
                "Advanced infrared technology to detect hidden issues and energy loss",
            features: [
                "Energy loss detection",
                "Moisture identification",
                "Electrical hotspots",
                "Insulation gaps",
            ],
            gradient: "from-red-500 to-red-600",
            iconBg: "from-red-100 to-red-200",
        },
        {
            icon: Zap,
            title: "Electrical Inspections",
            description:
                "Thorough electrical system safety and code compliance evaluations",
            features: [
                "Panel inspections",
                "Wiring assessment",
                "Safety compliance",
                "Load calculations",
            ],
            gradient: "from-yellow-500 to-yellow-600",
            iconBg: "from-yellow-100 to-yellow-200",
        },
        {
            icon: Droplets,
            title: "Plumbing Systems",
            description:
                "Complete water supply and drainage system analysis and testing",
            features: [
                "Pipe condition",
                "Water pressure",
                "Leak detection",
                "Fixture testing",
            ],
            gradient: "from-cyan-500 to-cyan-600",
            iconBg: "from-cyan-100 to-cyan-200",
        },
    ];

    return (
        <Section background="gray" aria-labelledby="services-heading">
            <SectionHeader
                badge="Comprehensive Services"
                badgeIcon={<Award className="w-4 h-4" />}
                title="Complete Inspection Solutions"
                subtitle="From foundation to roof, we inspect every critical component of your investment with military precision and advanced technology"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {services.map((service, index: number) => (
                    <motion.div
                        key={service.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="p-8 bg-white group cursor-pointer h-full"
                            initial="rest"
                            whileHover="hover"
                            tabIndex={0}
                            role="article"
                            aria-labelledby={`service-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-6">
                                    <IconBox
                                        icon={
                                            <service.icon className="w-8 h-8" />
                                        }
                                        gradient={service.iconBg}
                                        size="lg"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <h3
                                    id={`service-${index}-title`}
                                    className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors"
                                >
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <FeatureList
                                    features={service.features}
                                    iconColor="text-emerald-500"
                                />
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
