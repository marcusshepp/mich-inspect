"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
    name: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
];

interface MainNavigationProps {
    isScrolled: boolean;
}

export default function MainNavigation({ isScrolled }: MainNavigationProps) {
    const pathname: string = usePathname();

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <motion.nav
            variants={itemVariants}
            className="hidden lg:flex items-center space-x-2"
            role="navigation"
            aria-label="Main navigation"
        >
            {navigationItems.map((item: NavigationItem) => (
                <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href={item.href}
                        className={`relative text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                            pathname === item.href
                                ? isScrolled
                                    ? "text-primary bg-primary/10 shadow-sm border border-primary/20"
                                    : "text-white bg-white/15 shadow-lg border border-white/20"
                                : isScrolled
                                  ? "text-neutral-700 hover:text-primary hover:bg-primary/5"
                                  : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                    >
                        {item.name}
                        {pathname === item.href && (
                            <motion.div
                                layoutId="activeTab"
                                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                                    isScrolled ? "bg-primary" : "bg-white"
                                }`}
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        )}
                    </Link>
                </motion.div>
            ))}
        </motion.nav>
    );
}
