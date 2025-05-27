"use client";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Shield,
    Award,
    Clock,
    Camera,
} from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "../shared";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Services",
            links: [
                { name: "Home Inspections", href: "/services" },
                { name: "Thermal Imaging", href: "/services" },
                { name: "Mold Testing", href: "/services" },
                { name: "Radon Testing", href: "/services" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/about" },
                { name: "Certifications", href: "/about" },
                { name: "Service Areas", href: "/" },
            ],
        },
        {
            title: "Contact",
            links: [
                {
                    name: "Schedule Inspection",
                    href: `tel:${contactInfo.phone}`,
                },
                { name: "Get Quote", href: `mailto:${contactInfo.email}` },
                { name: "Emergency Service", href: `tel:${contactInfo.phone}` },
            ],
        },
    ];

    const certificationBadges = [
        {
            name: "InterNACHI Certified",
            icon: Award,
            description: "Certified Professional Inspector",
        },
        {
            name: "Veteran-Owned",
            icon: Shield,
            description: "Military precision & integrity",
        },
        {
            name: "Michigan Licensed",
            icon: Camera,
            description: "State licensed & insured",
        },
        {
            name: "24-Hour Reports",
            icon: Clock,
            description: "Fast, detailed reporting",
        },
    ];

    return (
        <footer
            className="bg-neutral-900 text-neutral-300 relative overflow-hidden"
            role="contentinfo"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/attic.webp?height=400&width=1200')] bg-cover bg-center"></div>
            </div>

            <div className="relative z-10">
                <section className="py-20 px-6 border-b border-neutral-800">
                    <div className="container-custom">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid lg:grid-cols-12 gap-16"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="lg:col-span-5"
                            >
                                <div className="mb-8">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-3 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                {contactInfo.company}
                                            </h3>
                                            <p className="text-sm text-neutral-400">
                                                Professional Home Inspections
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                <p className="text-neutral-400 mb-10 leading-relaxed max-w-md text-base">
                                    Veteran-owned home inspection company
                                    serving Michigan with military precision,
                                    advanced technology, and unwavering
                                    commitment to protecting your investment.
                                </p>

                                <div className="space-y-6">
                                    <motion.a
                                        href={`tel:${contactInfo.phone}`}
                                        className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-base">
                                                {contactInfo.phone}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                Call for immediate service
                                            </p>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 bg-neutral-700/50 rounded-xl flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-base">
                                                {contactInfo.email}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                Email for quotes & info
                                            </p>
                                        </div>
                                    </motion.a>

                                    <div className="flex items-center gap-4 text-neutral-300">
                                        <div className="w-12 h-12 bg-neutral-700/50 rounded-xl flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-base">
                                                Service Areas
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                {contactInfo.serviceAreas
                                                    .slice(0, 3)
                                                    .join(", ")}{" "}
                                                & more
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="lg:col-span-4"
                            >
                                <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-10">
                                    {footerLinks.map(
                                        (section, index: number) => (
                                            <div key={section.title}>
                                                <h4 className="text-lg font-semibold text-white mb-6">
                                                    {section.title}
                                                </h4>
                                                <ul className="space-y-4">
                                                    {section.links.map(
                                                        (
                                                            link,
                                                            linkIndex: number,
                                                        ) => (
                                                            <li key={linkIndex}>
                                                                <motion.div
                                                                    whileHover={{
                                                                        x: 3,
                                                                    }}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            link.href
                                                                        }
                                                                        className="text-neutral-400 hover:text-white transition-colors text-sm leading-relaxed"
                                                                    >
                                                                        {
                                                                            link.name
                                                                        }
                                                                    </Link>
                                                                </motion.div>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="lg:col-span-3"
                            >
                                <h4 className="text-lg font-semibold text-white mb-8">
                                    Our Credentials
                                </h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {certificationBadges.map(
                                        (badge, index: number) => (
                                            <motion.div
                                                key={badge.name}
                                                className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 hover:border-neutral-600/50 hover:bg-neutral-800/70 transition-all cursor-pointer group"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                                    <badge.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                                        {badge.name}
                                                    </p>
                                                    <p className="text-xs text-neutral-500 leading-relaxed">
                                                        {badge.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-8 px-6">
                    <div className="container-custom">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row justify-between items-center gap-6"
                        >
                            <div className="text-center md:text-left">
                                <p className="text-neutral-400 text-sm">
                                    &copy; {currentYear} {contactInfo.company}.
                                    All rights reserved.
                                </p>
                                <p className="text-neutral-500 text-xs mt-2">
                                    InterNACHI Certified • Veteran-Owned •
                                    Michigan Licensed & Insured
                                </p>
                            </div>

                            <div className="flex items-center gap-6 text-xs text-neutral-500">
                                <motion.span
                                    className="hover:text-neutral-400 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Privacy Policy
                                </motion.span>
                                <span>•</span>
                                <motion.span
                                    className="hover:text-neutral-400 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Terms of Service
                                </motion.span>
                                <span>•</span>
                                <motion.span
                                    className="hover:text-neutral-400 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Accessibility
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
