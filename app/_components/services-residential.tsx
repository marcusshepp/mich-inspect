"use client";
import { motion } from "framer-motion";
import {
    Home,
    Eye,
    Building,
    Droplets,
    Shield,
    Thermometer,
    Wrench,
    Zap,
} from "lucide-react";
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

export default function ServicesResidential() {
    const residentialAreas = [
        {
            title: "Roof & Attic Systems",
            description:
                "Complete structural integrity and ventilation evaluation with thermal imaging analysis",
            icon: Home,
            details: [
                "Shingle & material assessment",
                "Gutter & downspout inspection",
                "Ventilation system analysis",
                "Insulation evaluation",
            ],
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
        },
        {
            title: "Exterior Systems",
            description:
                "Comprehensive siding, windows, doors, and structural exterior safety assessment",
            icon: Eye,
            details: [
                "Siding condition analysis",
                "Window & door integrity",
                "Exterior trim evaluation",
                "Weather seal inspection",
            ],
            gradient: "from-success-500 to-success-600",
            iconBg: "from-success-100 to-success-200",
        },
        {
            title: "Decks & Outdoor Structures",
            description:
                "Safety-focused structural integrity evaluation of all outdoor living spaces",
            icon: Building,
            details: [
                "Structural support analysis",
                "Railing safety compliance",
                "Deck material assessment",
                "Foundation attachment",
            ],
            gradient: "from-neutral-600 to-neutral-700",
            iconBg: "from-neutral-100 to-neutral-200",
        },
        {
            title: "Grading & Drainage",
            description:
                "Property water management and drainage pattern analysis for foundation protection",
            icon: Droplets,
            details: [
                "Site grading evaluation",
                "Drainage system inspection",
                "Water flow pattern analysis",
                "Foundation protection assessment",
            ],
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
        },
        {
            title: "Foundation & Basement",
            description:
                "Structural foundation integrity and basement environmental condition evaluation",
            icon: Shield,
            details: [
                "Foundation wall inspection",
                "Basement moisture analysis",
                "Structural beam evaluation",
                "Floor system assessment",
            ],
            gradient: "from-neutral-600 to-neutral-700",
            iconBg: "from-neutral-100 to-neutral-200",
        },
        {
            title: "HVAC Systems",
            description:
                "Complete heating, ventilation, and air conditioning system performance evaluation",
            icon: Thermometer,
            details: [
                "Heating system inspection",
                "Cooling system analysis",
                "Ductwork evaluation",
                "Ventilation adequacy assessment",
            ],
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
        },
        {
            title: "Plumbing Systems",
            description:
                "Comprehensive water supply and drainage system functionality and safety inspection",
            icon: Wrench,
            details: [
                "Water supply line inspection",
                "Drainage system evaluation",
                "Fixture & faucet testing",
                "Water pressure analysis",
            ],
            gradient: "from-neutral-600 to-neutral-700",
            iconBg: "from-neutral-100 to-neutral-200",
        },
        {
            title: "Electrical Systems",
            description:
                "Complete electrical panel, wiring, and safety system code compliance evaluation",
            icon: Zap,
            details: [
                "Main electrical panel inspection",
                "Wiring system evaluation",
                "GFCI protection verification",
                "Safety code compliance",
            ],
            gradient: "from-primary to-primary/80",
            iconBg: "from-primary/10 to-primary/20",
        },
    ];

    return (
        <Section background="gray" aria-labelledby="residential-heading">
            <SectionHeader
                badge="Residential Services"
                badgeIcon={<Home className="w-4 h-4" />}
                title="Complete Home Inspection Coverage"
                subtitle="Our comprehensive residential inspection covers every major system and component following InterNACHI Standards of Practice for thorough evaluation and your complete peace of mind"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-3"
            >
                {residentialAreas.map((area, index: number) => (
                    <motion.div
                        key={area.title}
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
                            aria-labelledby={`area-${index}-title`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="card-content h-full flex flex-col"
                            >
                                <div className="mb-6 flex justify-center">
                                    <IconBox
                                        icon={<area.icon className="w-8 h-8" />}
                                        gradient={area.iconBg}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>

                                <div className="text-center flex-grow flex flex-col">
                                    <h3
                                        id={`area-${index}-title`}
                                        className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors"
                                    >
                                        {area.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed flex-grow text-base">
                                        {area.description}
                                    </p>
                                    <FeatureList features={area.details} />
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
