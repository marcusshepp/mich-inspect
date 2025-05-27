import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { contactInfo } from "@/lib/contact-info";
import Header from "./components/Header";
import FloatingActions from "components/ui/floating-actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://mich-inspect.com"),
    title: {
        default: `${contactInfo.company} - Professional Home Inspections`,
        template: `%s | ${contactInfo.company}`,
    },
    description: `Professional home inspection services by ${contactInfo.founder}. Serving ${contactInfo.serviceAreas.join(", ")} and surrounding areas. Call ${contactInfo.phone} for reliable inspections.`,
    keywords: [
        "home inspection",
        "property inspection",
        "real estate inspection",
        "Michigan home inspector",
        "Grand Rapids home inspection",
        "Lansing home inspection",
        "thermal imaging inspection",
        "veteran owned business",
        "InterNACHI certified",
        "mold inspection",
        "radon testing",
        "septic inspection",
    ],
    authors: [{ name: contactInfo.founder }],
    creator: contactInfo.company,
    publisher: contactInfo.company,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://mich-inspect.com",
        siteName: contactInfo.company,
        title: `${contactInfo.company} - Professional Home Inspections`,
        description: `Professional home inspection services serving ${contactInfo.serviceAreas.join(", ")} and surrounding areas.`,
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `${contactInfo.company} - Professional Home Inspection Services`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${contactInfo.company} - Professional Home Inspections`,
        description: `Professional home inspection services serving Michigan communities.`,
        images: ["/og-image.jpg"],
    },
    verification: {
        google: "your-google-verification-code",
    },
    alternates: {
        canonical: "https://mich-inspect.com",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#1e3a8a" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="format-detection" content="telephone=no" />
            </head>
            <body
                className={inter.className}
                style={{ overscrollBehavior: "none" }}
            >
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                    Skip to main content
                </a>
                <Header />
                <main id="main-content" className="min-h-screen bg-background">
                    {children}
                </main>
                <FloatingActions />
            </body>
        </html>
    );
}
