export const designTokens = {
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
        "6xl": "12rem",
    },
    borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
    },
    fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
    },
    colors: {
        primary: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#731017",
            600: "#651014",
            700: "#570e11",
            800: "#4a0c0e",
            900: "#3d0a0c",
            950: "#2d0709",
        },
        secondary: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a",
        },
        accent: {
            50: "#ffffff",
            100: "#fefefe",
            200: "#fdfdfd",
            300: "#fcfcfc",
            400: "#fbfbfb",
            500: "#ffffff",
            600: "#f5f5f5",
            700: "#e5e5e5",
            800: "#d4d4d4",
            900: "#a3a3a3",
            950: "#737373",
        },
        success: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16",
        },
        warning: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03",
        },
        error: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            950: "#450a0a",
        },
        neutral: {
            50: "#ffffff",
            100: "#fafafa",
            200: "#f5f5f5",
            300: "#e5e5e5",
            400: "#d4d4d4",
            500: "#a3a3a3",
            600: "#737373",
            700: "#525252",
            800: "#404040",
            900: "#262626",
            950: "#000000",
        },
    },
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 20px rgb(115 16 23 / 0.3)",
        "glow-lg": "0 0 40px rgb(115 16 23 / 0.4)",
    },
    gradients: {
        primary: "linear-gradient(135deg, #731017 0%, #651014 100%)",
        secondary: "linear-gradient(135deg, #262626 0%, #171717 100%)",
        accent: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
        success: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
        hero: "linear-gradient(135deg, #731017 0%, #651014 50%, #570e11 100%)",
        sunset: "linear-gradient(135deg, #731017 0%, #651014 50%, #570e11 100%)",
    },
    transitions: {
        fast: "150ms ease-in-out",
        DEFAULT: "200ms ease-in-out",
        slow: "300ms ease-in-out",
        spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    animation: {
        durations: {
            fast: "150ms",
            DEFAULT: "200ms",
            slow: "300ms",
            slower: "400ms",
            slowest: "500ms",
        },
        easings: {
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
            spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        },
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
    zIndex: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
} as const;

export type DesignTokens = typeof designTokens;

export const getColorValue = (color: string, shade?: number): string => {
    const [colorName, colorShade] = color.split("-");
    const finalShade = shade || parseInt(colorShade) || 500;

    if (colorName === "white") return "#ffffff";
    if (colorName === "black") return "#000000";
    if (colorName === "transparent") return "transparent";

    const colorMap =
        designTokens.colors[colorName as keyof typeof designTokens.colors];
    if (!colorMap) return color;

    return colorMap[finalShade as keyof typeof colorMap] || color;
};

export const getSpacing = (size: keyof typeof designTokens.spacing): string => {
    return designTokens.spacing[size];
};

export const getShadow = (size: keyof typeof designTokens.shadows): string => {
    return designTokens.shadows[size];
};

export const getGradient = (
    name: keyof typeof designTokens.gradients,
): string => {
    return designTokens.gradients[name];
};
