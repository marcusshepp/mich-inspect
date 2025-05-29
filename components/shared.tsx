"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "lib/utils";
import { ReactNode, forwardRef } from "react";
interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    as?: "button" | "a";
    href?: string;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            className,
            children,
            as = "button",
            href,
            ...props
        },
        ref,
    ) => {
        const baseClasses: string = "btn";
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
        const Component = as === "a" ? motion.a : motion.button;
        return (
            <Component
                ref={ref}
                href={as === "a" ? href : undefined}
                className={cn(
                    baseClasses,
                    variantClasses[variant],
                    sizeClasses[size],
                    className,
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                {...props}
            >
                {children}
            </Component>
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
                className={cn(
                    "bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow duration-200 overflow-hidden",
                    hover && "hover:shadow-md",
                    className,
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
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
}: SectionProps) => {
    const backgroundClasses = {
        white: "bg-white",
        gray: "bg-gray-50",
        gradient: "bg-gradient-to-br from-gray-50 to-white",
        dark: "bg-secondary-900 text-white",
    };
    return (
        <section
            id={id}
            className={cn(
                "py-20 px-6 relative",
                backgroundClasses[background],
                className,
            )}
        >
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
}: SectionHeaderProps) => {
    return (
        <motion.div
            className={cn(
                centered ? "text-center" : "text-left",
                "mb-16",
                className,
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {badge && (
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-700 text-sm font-medium mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    {badgeIcon}
                    <span>{badge}</span>
                </motion.div>
            )}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-neutral-600">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
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
    gradient = "from-accent-500 to-tertiary-500",
    size = "md",
    className,
    animate = true,
}: IconBoxProps) => {
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
                `rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`,
                className,
            )}
            whileHover={animate ? { scale: 1.05 } : {}}
            transition={{ duration: 0.2 }}
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
    iconColor = "text-tertiary-600",
    className,
}: FeatureListProps) => {
    return (
        <ul className={cn("space-y-3", className)} role="list">
            {features.map((feature: string, index: number) => (
                <motion.li
                    key={index}
                    className="flex items-center text-sm text-secondary-700 leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                    <svg
                        className={cn("w-5 h-5 mr-3 flex-shrink-0", iconColor)}
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
    gradient = "from-primary via-accent-600 to-tertiary",
}: GradientTextProps) => {
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
    duration = 1.5,
    suffix = "",
    className,
}: AnimatedCounterProps) => {
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                initial={{ scale: 0.8 }}
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
    duration = 4,
    className,
}: FloatingElementProps) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
export const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
export const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.02,
        y: -4,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
};
