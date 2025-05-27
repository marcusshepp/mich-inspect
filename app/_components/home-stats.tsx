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
            color: "text-success-600",
            bgColor: "from-success-100 to-success-200",
            gradient: "from-success-500 to-success-600",
        },
        {
            number: "10+",
            label: "Years Experience",
            icon: Calendar,
            color: "text-primary",
            bgColor: "from-primary/10 to-primary/20",
            gradient: "from-primary to-primary/80",
        },
        {
            number: "24hr",
            label: "Report Delivery",
            icon: Clock,
            color: "text-neutral-700",
            bgColor: "from-neutral-100 to-neutral-200",
            gradient: "from-neutral-600 to-neutral-700",
        },
        {
            number: "100%",
            label: "Client Satisfaction",
            icon: Star,
            color: "text-primary",
            bgColor: "from-primary/10 to-primary/20",
            gradient: "from-primary to-primary/80",
        },
    ];

    return (
        <Section background="white" aria-labelledby="trust-heading">
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
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid-cards-4"
            >
                {trustIndicators.map((indicator, index: number) => (
                    <motion.div
                        key={indicator.label}
                        variants={fadeInUp}
                        className="group"
                    >
                        <Card
                            hover={true}
                            className="card-premium group cursor-pointer text-center"
                            initial="rest"
                            whileHover="hover"
                            role="article"
                            aria-labelledby={`stat-${index}-number`}
                        >
                            <motion.div
                                variants={cardHover}
                                className="card-content-lg flex flex-col items-center justify-center"
                            >
                                <div className="mb-6">
                                    <IconBox
                                        icon={
                                            <indicator.icon className="w-8 h-8" />
                                        }
                                        gradient={indicator.bgColor}
                                        size="lg"
                                        className="group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>

                                <motion.div
                                    id={`stat-${index}-number`}
                                    className="text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-4 group-hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.02 }}
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
                                        duration={1.5}
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

                                <div className="text-neutral-600 font-semibold text-lg leading-tight">
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
