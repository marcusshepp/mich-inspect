"use client";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/contact-info";
import { Users, CheckCircle } from "lucide-react";
import {
    Section,
    SectionHeader,
    Card,
    FeatureList,
    fadeInUp,
    staggerContainer,
    cardHover,
} from "components/shared";

export default function AboutTeam() {
    const teamMembers = [
        {
            name: contactInfo.founder,
            title: "Founder & Lead Inspector",
            description:
                "Veteran-owned business leader with 10+ years of inspection experience and military precision",
            image: "/placeholder.svg?height=400&width=400",
            specialties: [
                "InterNACHI Certified",
                "Thermal Imaging Expert",
                "Military Veteran",
                "10+ Years Experience",
            ],
            gradient: "from-primary to-primary-600",
        },
        {
            name: "Senior Inspector #2",
            title: "Senior Home Inspector",
            description:
                "Certified professional specializing in structural evaluations and safety assessments",
            image: "/placeholder.svg?height=400&width=400",
            specialties: [
                "Structural Analysis",
                "Safety Compliance",
                "Code Expertise",
                "Quality Assurance",
            ],
            gradient: "from-secondary to-secondary-600",
        },
        {
            name: "Certified Inspector #3",
            title: "Electrical & HVAC Specialist",
            description:
                "Expert in electrical systems, HVAC evaluations, and energy efficiency assessments",
            image: "/placeholder.svg?height=400&width=400",
            specialties: [
                "Electrical Systems",
                "HVAC Analysis",
                "Energy Efficiency",
                "Safety Standards",
            ],
            gradient: "from-accent to-accent-600",
        },
        {
            name: "Water Systems Expert #4",
            title: "Plumbing & Water Specialist",
            description:
                "Professional specializing in plumbing systems, water quality, and moisture detection",
            image: "/placeholder.svg?height=400&width=400",
            specialties: [
                "Plumbing Systems",
                "Water Quality",
                "Moisture Detection",
                "Leak Analysis",
            ],
            gradient: "from-emerald-500 to-emerald-600",
        },
    ];

    return (
        <Section background="white" aria-labelledby="team-heading">
            <SectionHeader
                badge="Meet Our Team"
                badgeIcon={<Users className="w-4 h-4" />}
                title="Four Full-Time Certified Experts"
                subtitle="Each team member brings specialized expertise and unwavering commitment to protecting your investment"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {teamMembers.map((member, index: number) => (
                    <motion.div
                        key={member.name}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="bg-white group cursor-pointer overflow-hidden h-full"
                            initial="rest"
                            whileHover="hover"
                            tabIndex={0}
                            role="article"
                            aria-labelledby={`team-member-${index}-name`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="h-full flex flex-col"
                            >
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={`Professional headshot of ${member.name}, ${member.title} at ${contactInfo.company}`}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${member.gradient}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3
                                        id={`team-member-${index}-name`}
                                        className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors"
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                                    >
                                        {member.title}
                                    </p>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                                        {member.description}
                                    </p>

                                    <div className="space-y-2">
                                        {member.specialties.map(
                                            (
                                                specialty: string,
                                                specialtyIndex: number,
                                            ) => (
                                                <div
                                                    key={specialtyIndex}
                                                    className="flex items-center text-xs text-slate-600"
                                                >
                                                    <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                                                    {specialty}
                                                </div>
                                            ),
                                        )}
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
