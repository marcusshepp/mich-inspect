"use client";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Clock, Star, TrendingUp } from "lucide-react";
import {
    Section,
    SectionHeader,
    Card,
    IconBox,
    AnimatedCounter,
    fadeInUp,
    staggerContainer,
    cardHover,
} from "components/shared";

export default function HomeStats() {
    const trustIndicators = [
        {
            number: "3,500+",
            label: "Inspections Completed",
            icon: CheckCircle,
            color: "text-emerald-600",
            bgColor: "from-emerald-100 to-emerald-200",
            gradient: "from-emerald-500 to-emerald-600",
        },
        {
            number: "10+",
            label: "Years Experience",
            icon: Calendar,
            color: "text-blue-600",
            bgColor: "from-blue-100 to-blue-200",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            number: "24hr",
            label: "Report Delivery",
            icon: Clock,
            color: "text-orange-600",
            bgColor: "from-orange-100 to-orange-200",
            gradient: "from-orange-500 to-orange-600",
        },
        {
            number: "100%",
            label: "Client Satisfaction",
            icon: Star,
            color: "text-yellow-600",
            bgColor: "from-yellow-100 to-yellow-200",
            gradient: "from-yellow-500 to-yellow-600",
        },
    ];

    return (
        <Section background="gradient" aria-labelledby="trust-heading">
            <SectionHeader
                badge="Proven Track Record"
                badgeIcon={<TrendingUp className="w-4 h-4" />}
                title="Numbers That Speak Volumes"
                subtitle="Over a decade of experience serving Michigan homeowners with excellence and integrity"
                titleGradient={true}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {trustIndicators.map((indicator, index: number) => (
                    <motion.div
                        key={indicator.label}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="p-8 bg-white group cursor-pointer text-center"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`stat-${index}-number`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="flex flex-col items-center"
                            >
                                <div className="mb-6">
                                    <IconBox
                                        icon={
                                            <indicator.icon className="w-8 h-8" />
                                        }
                                        gradient={indicator.bgColor}
                                        size="lg"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <motion.div
                                    id={`stat-${index}-number`}
                                    className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-3 group-hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <AnimatedCounter
                                        from={0}
                                        to={
                                            parseInt(
                                                indicator.number.replace(
                                                    /\D/g,
                                                    "",
                                                ),
                                            ) || 100
                                        }
                                        duration={2}
                                        suffix={
                                            indicator.number.includes("+")
                                                ? "+"
                                                : indicator.number.includes("%")
                                                  ? "%"
                                                  : indicator.number.includes(
                                                          "hr",
                                                      )
                                                    ? "hr"
                                                    : ""
                                        }
                                    />
                                </motion.div>

                                <div className="text-slate-600 font-semibold text-lg">
                                    {indicator.label}
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
