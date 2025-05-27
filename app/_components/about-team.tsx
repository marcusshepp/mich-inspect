"use client";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/contact-info";
import { Users, CheckCircle } from "lucide-react";
import {
    Section,
    SectionHeader,
    Card,
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
            gradient: "from-primary to-primary/80",
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
            gradient: "from-neutral-700 to-neutral-800",
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
            gradient: "from-primary to-primary/80",
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
            gradient: "from-neutral-700 to-neutral-800",
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
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-4"
            >
                {teamMembers.map((member, index: number) => (
                    <motion.div
                        key={member.name}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="card-premium group cursor-pointer overflow-hidden h-full"
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
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={`Professional headshot of ${member.name}, ${member.title} at ${contactInfo.company}`}
                                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${member.gradient}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />
                                </div>

                                <div className="card-content flex-grow flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3
                                            id={`team-member-${index}-name`}
                                            className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors"
                                        >
                                            {member.name}
                                        </h3>
                                        <p
                                            className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                                        >
                                            {member.title}
                                        </p>
                                        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                                            {member.description}
                                        </p>
                                    </div>

                                    <div className="space-y-3 flex-grow">
                                        {member.specialties.map(
                                            (
                                                specialty: string,
                                                specialtyIndex: number,
                                            ) => (
                                                <div
                                                    key={specialtyIndex}
                                                    className="flex items-center text-xs text-neutral-600"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-success-600 mr-3 flex-shrink-0" />
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
