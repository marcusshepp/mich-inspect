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
            gradient: "from-neutral-600 to-neutral-700",
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
            gradient: "from-success-500 to-success-600",
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
            gradient: "from-primary to-primary/80",
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
            gradient: "from-success-500 to-success-600",
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
            gradient: "from-neutral-600 to-neutral-700",
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
            gradient: "from-primary to-primary/80",
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
            gradient: "from-neutral-600 to-neutral-700",
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
            gradient: "from-neutral-500 to-neutral-600",
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
            gradient: "from-primary to-primary/80",
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
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-3"
            >
                {additionalServices.map((service, index: number) => (
                    <motion.div
                        key={service.title}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className={`card-premium group cursor-pointer relative overflow-hidden h-full ${service.popular ? "ring-2 ring-primary/20" : ""}`}
                            initial="rest"
                            whileHover="hover"
                            tabIndex={0}
                            role="article"
                            aria-labelledby={`service-${index}-title`}
                        >
                            {service.popular && (
                                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-bold rounded-full z-10">
                                    Popular
                                </div>
                            )}

                            <motion.div
                                variants={cardHover}
                                className="card-content h-full flex flex-col"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={
                                            <service.icon className="w-8 h-8" />
                                        }
                                        gradient={service.gradient}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200 shadow-sm"
                                    />
                                </div>

                                <div className="text-center flex-grow flex flex-col">
                                    <h3
                                        id={`service-${index}-title`}
                                        className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed text-base">
                                        {service.description}
                                    </p>

                                    <ul
                                        className="space-y-3 mb-6 flex-grow"
                                        role="list"
                                    >
                                        {service.features.map(
                                            (
                                                feature: string,
                                                featureIndex: number,
                                            ) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center text-sm text-neutral-700 leading-relaxed"
                                                >
                                                    <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ),
                                        )}
                                    </ul>

                                    <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:text-primary transition-colors pt-4 border-t border-neutral-100">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
