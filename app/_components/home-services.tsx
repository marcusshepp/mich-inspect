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
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
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
            gradient: "from-neutral-700 to-neutral-800",
            iconBg: "from-neutral-100 to-neutral-200",
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
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
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
            gradient: "from-neutral-700 to-neutral-800",
            iconBg: "from-neutral-100 to-neutral-200",
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
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-4"
            >
                {services.map((service, index: number) => (
                    <motion.div
                        key={service.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="card-premium group cursor-pointer h-full"
                            initial="rest"
                            whileHover="hover"
                            tabIndex={0}
                            role="article"
                            aria-labelledby={`service-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="card-content-lg h-full flex flex-col"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={
                                            <service.icon className="w-8 h-8" />
                                        }
                                        gradient={service.iconBg}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>

                                <div className="text-center flex-grow flex flex-col">
                                    <h3
                                        id={`service-${index}-title`}
                                        className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed text-base">
                                        {service.description}
                                    </p>
                                    <div className="flex-grow">
                                        <FeatureList
                                            features={service.features}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
