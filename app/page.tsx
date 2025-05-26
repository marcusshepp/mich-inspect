import type { Metadata } from "next"
import { contactInfo } from "@/lib/contact-info"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Home Inspection Services | Grand Rapids, Lansing | Mich-Inspect",
  description: `Professional home inspection services in Grand Rapids, Lansing, and central Michigan. Thermal imaging, 24-hour reports, veteran-owned. Call ${contactInfo.phone} for reliable inspections by ${contactInfo.founder}.`,
  keywords: [
    "home inspection Grand Rapids",
    "home inspection Lansing",
    "Michigan home inspector",
    "thermal imaging inspection",
    "veteran owned home inspection",
    "InterNACHI certified inspector",
    "24 hour inspection reports",
  ],
  openGraph: {
    title: "Home Inspection Services | Grand Rapids, Lansing | Mich-Inspect",
    description: `Professional home inspection services in Grand Rapids, Lansing, and central Michigan. Thermal imaging, 24-hour reports, veteran-owned.`,
  },
}

export default function HomePage() {
  return <HomePageClient />
}
