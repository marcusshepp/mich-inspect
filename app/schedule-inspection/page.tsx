import { Metadata } from "next";
import { contactInfo } from "@/lib/contact-info";
import ScheduleInspectionPageClient from "./ScheduleInspectionPageClient";

export const metadata: Metadata = {
    title: "Schedule Inspection",
    description: `Schedule your professional home inspection with ${
        contactInfo.founder
    }. Choose from available dates and times that work best for you. Serving ${contactInfo.serviceAreas.join(
        ", ",
    )} and surrounding areas.`,
    keywords: [
        "home inspector near me",
        "home inspector grand rapids",
        "home inspectior michigan",
        "best home inspector",
        "schedule inspection",
        "book home inspection",
        "inspection appointment",
        "Michigan home inspector",
        "home inspection booking",
    ],
};

export default function ScheduleInspectionPage() {
    return <ScheduleInspectionPageClient />;
}
