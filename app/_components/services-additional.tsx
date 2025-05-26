"use client";
import { motion } from "framer-motion";
import {
    Building,
    Star,
    Wrench,
    CheckCircle,
    Search,
    Bug,
    FlaskConical,
    Thermometer,
    Droplets,
    Target,
    ArrowRight,
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

export default function ServicesAdditional() {
    const additionalServices = [
        {
            title: "Commercial Building Inspection",
            description:
                "Comprehensive multi-unit and commercial property inspections with investment analysis",
            icon: Building,
            features: [
                "Multi-unit property evaluation",
                "Commercial system analysis",
                "Code compliance verification",
                "Investment risk assessment",
            ],
            gradient: "from-slate-500 to-slate-600",
            popular: false,
        },
        {
            title: "Pre-Listing Inspection",
            description:
                "Strategic seller inspections to maximize property value and reduce negotiation issues",
            icon: Star,
            features: [
                "Seller market advantage",
                "Issue identification & prioritization",
                "Repair cost estimation",
                "Market preparation strategy",
            ],
            gradient: "from-emerald-500 to-emerald-600",
            popular: true,
        },
        {
            title: "New Construction Inspection",
            description:
                "Quality assurance inspections for newly constructed homes with warranty protection",
            icon: Wrench,
            features: [
                "Builder quality verification",
                "Code compliance checking",
                "Warranty issue identification",
                "Move-in confidence assurance",
            ],
            gradient: "from-blue-500 to-blue-600",
            popular: false,
        },
        {
            title: "Four-Point Inspection",
            description:
                "Insurance-required focused inspection of critical home systems for coverage qualification",
            icon: CheckCircle,
            features: [
                "Insurance requirement fulfillment",
                "System age verification",
                "Safety compliance assessment",
                "Fast turnaround service",
            ],
            gradient: "from-green-500 to-green-600",
            popular: false,
        },
        {
            title: "Re-Inspection Services",
            description:
                "Follow-up inspections to verify completed repairs and system improvements",
            icon: Search,
            features: [
                "Repair completion verification",
                "Safety improvement confirmation",
                "Detailed documentation",
                "Quality assurance guarantee",
            ],
            gradient: "from-orange-500 to-orange-600",
            popular: false,
        },
        {
            title: "WDO/Termite Inspection",
            description:
                "Professional wood-destroying organism detection with comprehensive damage assessment",
            icon: Bug,
            features: [
                "Termite & pest detection",
                "Wood damage evaluation",
                "Treatment recommendations",
                "Prevention strategy planning",
            ],
            gradient: "from-red-500 to-red-600",
            popular: false,
        },
        {
            title: "Mold Inspection & Testing",
            description:
                "Professional mold detection and indoor air quality assessment for health protection",
            icon: FlaskConical,
            features: [
                "Visual mold inspection",
                "Moisture source identification",
                "Air quality testing",
                "Health risk assessment",
            ],
            gradient: "from-purple-500 to-purple-600",
            popular: true,
        },
        {
            title: "Radon Gas Testing",
            description:
                "EPA-protocol radon testing for cancer risk assessment and mitigation guidance",
            icon: Thermometer,
            features: [
                "EPA-approved testing methods",
                "Accurate measurement protocols",
                "Health risk evaluation",
                "Mitigation system guidance",
            ],
            gradient: "from-gray-500 to-gray-600",
            popular: false,
        },
        {
            title: "Water & Septic Testing",
            description:
                "Well water quality analysis and septic system functionality comprehensive evaluation",
            icon: Droplets,
            features: [
                "Water quality laboratory analysis",
                "Septic system evaluation",
                "Bacterial contamination testing",
                "System functionality assessment",
            ],
            gradient: "from-cyan-500 to-cyan-600",
            popular: true,
        },
    ];

    return (
        <Section
            background="white"
            aria-labelledby="additional-services-heading"
        >
            <SectionHeader
                badge="Specialized Services"
                badgeIcon={<Target className="w-4 h-4" />}
                title="Specialized Inspection Solutions"
                subtitle="Advanced inspection services tailored to unique property needs and specific industry requirements"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {additionalServices.map((service, index: number) => (
                    <motion.div
                        key={service.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className={`bg-white p-8 group cursor-pointer relative overflow-hidden h-full ${service.popular ? "ring-2 ring-secondary/20" : ""}`}
                            initial="rest"
                            whileHover="hover"
                            tabIndex={0}
                            role="article"
                            aria-labelledby={`service-${index}-title`}
                        >
                            {service.popular && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-secondary to-secondary-600 text-white text-xs font-bold rounded-full">
                                    Popular
                                </div>
                            )}

                            <motion.div
                                variants={cardHover}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-6">
                                    <IconBox
                                        icon={
                                            <service.icon className="w-8 h-8" />
                                        }
                                        gradient={service.gradient}
                                        size="lg"
                                        className="group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                    />
                                </div>

                                <h3
                                    id={`service-${index}-title`}
                                    className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors"
                                >
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-6" role="list">
                                    {service.features.map(
                                        (
                                            feature: string,
                                            featureIndex: number,
                                        ) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center text-sm text-slate-700"
                                            >
                                                <ArrowRight className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <div className="flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors pt-4 border-t border-slate-100">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
