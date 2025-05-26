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
import { fadeInUp, staggerContainer } from "./shared";

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
            className="bg-slate-900 text-slate-300 relative overflow-hidden"
            role="contentinfo"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center"></div>
            </div>

            <div className="relative z-10">
                <section className="py-16 px-6 border-b border-slate-800">
                    <div className="container-custom">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid lg:grid-cols-12 gap-12"
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
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                                                {contactInfo.company}
                                            </h3>
                                            <p className="text-sm text-slate-400">
                                                Professional Home Inspections
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                                    Veteran-owned home inspection company
                                    serving Michigan with military precision,
                                    advanced technology, and unwavering
                                    commitment to protecting your investment.
                                </p>

                                <div className="space-y-4">
                                    <motion.a
                                        href={`tel:${contactInfo.phone}`}
                                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                {contactInfo.phone}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Call for immediate service
                                            </p>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                {contactInfo.email}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Email for quotes & info
                                            </p>
                                        </div>
                                    </motion.a>

                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Service Areas
                                            </p>
                                            <p className="text-sm text-slate-500">
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
                                <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-8">
                                    {footerLinks.map(
                                        (section, index: number) => (
                                            <div key={section.title}>
                                                <h4 className="text-lg font-semibold text-white mb-4">
                                                    {section.title}
                                                </h4>
                                                <ul className="space-y-3">
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
                                                                        className="text-slate-400 hover:text-white transition-colors text-sm"
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
                                <h4 className="text-lg font-semibold text-white mb-6">
                                    Our Credentials
                                </h4>
                                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                    {certificationBadges.map(
                                        (badge, index: number) => (
                                            <motion.div
                                                key={badge.name}
                                                className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors cursor-pointer group"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <badge.icon className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                                                        {badge.name}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
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
                            className="flex flex-col md:flex-row justify-between items-center gap-4"
                        >
                            <div className="text-center md:text-left">
                                <p className="text-slate-400 text-sm">
                                    &copy; {currentYear} {contactInfo.company}.
                                    All rights reserved.
                                </p>
                                <p className="text-slate-500 text-xs mt-1">
                                    InterNACHI Certified • Veteran-Owned •
                                    Michigan Licensed & Insured
                                </p>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <motion.span
                                    className="hover:text-slate-400 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Privacy Policy
                                </motion.span>
                                <span>•</span>
                                <motion.span
                                    className="hover:text-slate-400 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Terms of Service
                                </motion.span>
                                <span>•</span>
                                <motion.span
                                    className="hover:text-slate-400 transition-colors cursor-pointer"
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
