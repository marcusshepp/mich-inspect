export const contactInfo = {
  company: "Mich-Inspect",
  phone: "616-755-2255",
  email: "charlie@mich-inspect.net",
  serviceAreas: ["Grand Rapids", "Lansing", "Big Rapids", "Mount Pleasant", "Mason", "Kalamazoo", "Ada"],
  founder: "Charles West",
} as const

export type ContactInfo = typeof contactInfo
