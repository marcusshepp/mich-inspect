import type { Metadata } from "next";
import { contactInfo } from "@/lib/contact-info";
import ServicesPageClient from "./ServicesPageClient";
import Footer from "components/ui/footer";

export const metadata: Metadata = {
    title: "Complete Property Inspection Services | Mich-Inspect",
    description: `Comprehensive home and commercial inspection services in Michigan. Thermal imaging, mold testing, radon testing, septic evaluations. InterNACHI certified. Call ${contactInfo.phone} for professional inspections.`,
    keywords: [
        "home inspection services Michigan",
        "commercial building inspection",
        "thermal imaging inspection",
        "mold inspection Michigan",
        "radon testing Michigan",
        "septic inspection Michigan",
        "InterNACHI certified inspection",
        "pre-listing inspection",
        "new construction inspection",
    ],
    openGraph: {
        title: "Complete Property Inspection Services | Mich-Inspect",
        description: `Comprehensive home and commercial inspection services in Michigan. Thermal imaging, mold testing, radon testing, septic evaluations.`,
    },
};

export default function ServicesPage() {
    return (
        <>
            <ServicesPageClient />
            <Footer />
        </>
    );
}
