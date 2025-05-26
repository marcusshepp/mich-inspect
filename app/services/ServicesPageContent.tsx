"use client";
import ServicesAdditional from "app/_components/services-additional";
import ServicesTechnology from "app/_components/services-technology";
import ServicesHero from "app/_components/services-hero";
import ServicesResidential from "app/_components/services-residential";

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen overflow-hidden">
            <ServicesHero />
            <ServicesResidential />
            <ServicesAdditional />
            <ServicesTechnology />
        </div>
    );
}
