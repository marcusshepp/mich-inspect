import { contactInfo } from "@/lib/contact-info"
import AboutPageClient from "./AboutPageClient"

export const metadata = {
  title: "About Our Licensed Home Inspectors | Mich-Inspect",
  description: `Meet ${contactInfo.founder} and our team of certified home inspectors. Veteran-owned business with 10+ years experience, InterNACHI certified, serving Michigan with integrity and expertise.`,
  keywords: [
    "licensed home inspector Michigan",
    "certified home inspector",
    "veteran owned home inspection",
    "InterNACHI certified inspector",
    "Charles West home inspector",
    "Michigan home inspection team",
    "professional home inspector qualifications",
  ],
  openGraph: {
    title: "About Our Licensed Home Inspectors | Mich-Inspect",
    description: `Meet ${contactInfo.founder} and our team of certified home inspectors. Veteran-owned business with 10+ years experience.`,
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
