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
            gradient: "from-red-500 to-red-600",
            iconBg: "from-red-100 to-red-200",
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
            gradient: "from-green-500 to-green-600",
            iconBg: "from-green-100 to-green-200",
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
            gradient: "from-blue-500 to-blue-600",
            iconBg: "from-blue-100 to-blue-200",
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
            gradient: "from-cyan-500 to-cyan-600",
            iconBg: "from-cyan-100 to-cyan-200",
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
            gradient: "from-purple-500 to-purple-600",
            iconBg: "from-purple-100 to-purple-200",
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
            gradient: "from-orange-500 to-orange-600",
            iconBg: "from-orange-100 to-orange-200",
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
            gradient: "from-teal-500 to-teal-600",
            iconBg: "from-teal-100 to-teal-200",
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
            gradient: "from-yellow-500 to-yellow-600",
            iconBg: "from-yellow-100 to-yellow-200",
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
                viewport={{ once: true, margin: "-100px" }}
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
                                <div className="mb-8 flex justify-center">
                                    <IconBox
                                        icon={<area.icon className="w-8 h-8" />}
                                        gradient={area.iconBg}
                                        size="lg"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center flex-grow flex flex-col">
                                    <h3
                                        id={`area-${index}-title`}
                                        className="text-xl font-bold text-slate-800 mb-6 group-hover:text-primary transition-colors"
                                    >
                                        {area.title}
                                    </h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-base">
                                        {area.description}
                                    </p>
                                    <FeatureList
                                        features={area.details}
                                        iconColor="text-emerald-500"
                                    />
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
