"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "lib/utils";
import { ReactNode, forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = "primary", size = "md", className, children, ...props },
        ref,
    ) => {
        const baseClasses = "btn";
        const variantClasses = {
            primary: "btn-primary",
            secondary: "btn-secondary",
            outline: "btn-outline",
            ghost: "btn-ghost",
        };
        const sizeClasses = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    baseClasses,
                    variantClasses[variant],
                    sizeClasses[size],
                    className,
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    },
);

Button.displayName = "Button";

interface CardProps extends HTMLMotionProps<"div"> {
    hover?: boolean;
    children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ hover = true, className, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn("card", hover && "card-hover", className)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                {...props}
            >
                {children}
            </motion.div>
        );
    },
);

Card.displayName = "Card";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "gray" | "gradient" | "dark";
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    background = "white",
}) => {
    const backgroundClasses = {
        white: "bg-white",
        gray: "bg-gradient-to-br from-gray-50 to-white",
        gradient: "bg-gradient-to-br from-primary-50 via-white to-accent-50",
        dark: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-24 px-6 relative overflow-hidden",
                backgroundClasses[background],
                className,
            )}
        >
            {background === "gradient" && (
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
                </div>
            )}
            {background === "dark" && (
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
                </div>
            )}
            <div className="container-custom relative z-10">{children}</div>
        </section>
    );
};

interface SectionHeaderProps {
    badge?: string;
    badgeIcon?: ReactNode;
    title: string;
    subtitle?: string;
    titleGradient?: boolean;
    centered?: boolean;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    badgeIcon,
    title,
    subtitle,
    titleGradient = false,
    centered = true,
    className,
}) => {
    return (
        <motion.div
            className={cn(
                centered ? "text-center" : "text-left",
                "mb-20",
                className,
            )}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {badge && (
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {badgeIcon}
                    <span>{badge}</span>
                </motion.div>
            )}

            <h2
                className={cn(
                    "text-5xl lg:text-6xl font-bold mb-8",
                    titleGradient ? "text-slate-800" : "text-slate-800",
                )}
            >
                {titleGradient ? (
                    <>
                        {title.split(" ").slice(0, -1).join(" ")}
                        <span className="block gradient-text">
                            {title.split(" ").slice(-1)}
                        </span>
                    </>
                ) : (
                    title
                )}
            </h2>

            {subtitle && (
                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

interface IconBoxProps {
    icon: ReactNode;
    gradient?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    animate?: boolean;
}

export const IconBox: React.FC<IconBoxProps> = ({
    icon,
    gradient = "from-primary to-primary-600",
    size = "md",
    className,
    animate = true,
}) => {
    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-16 h-16",
        lg: "w-20 h-20",
    };

    const iconSizes = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
    };

    return (
        <motion.div
            className={cn(
                sizeClasses[size],
                `rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`,
                className,
            )}
            whileHover={animate ? { scale: 1.1, rotate: 5 } : {}}
            transition={{ duration: 0.3 }}
        >
            <div className={cn(iconSizes[size], "text-white")}>{icon}</div>
        </motion.div>
    );
};

interface FeatureListProps {
    features: string[];
    iconColor?: string;
    className?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
    features,
    iconColor = "text-emerald-500",
    className,
}) => {
    return (
        <ul className={cn("space-y-3", className)} role="list">
            {features.map((feature: string, index: number) => (
                <motion.li
                    key={index}
                    className="flex items-center text-sm text-slate-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                    <svg
                        className={cn("w-4 h-4 mr-3 flex-shrink-0", iconColor)}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {feature}
                </motion.li>
            ))}
        </ul>
    );
};

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    gradient?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
    children,
    className,
    gradient = "from-primary via-accent to-secondary",
}) => {
    return (
        <span
            className={cn(
                `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`,
                className,
            )}
        >
            {children}
        </span>
    );
};

interface AnimatedCounterProps {
    from: number;
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    from,
    to,
    duration = 2,
    suffix = "",
    className,
}) => {
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.span
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration, ease: "easeOut" }}
            >
                {to}
                {suffix}
            </motion.span>
        </motion.span>
    );
};

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
    children,
    delay = 0,
    duration = 6,
    className,
}) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        rotateY: 0,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    hover: {
        scale: 1.05,
        y: -10,
        rotateY: 2,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};
