"use client";
import AboutHero from "app/_components/about-hero";
import AboutStory from "app/_components/about-story";
import AboutTeam from "app/_components/about-team";
import AboutCertifications from "app/_components/about-certifications";
import Footer from "components/ui/footer";

export default function AboutPageContent() {
    return (
        <div className="min-h-screen overflow-hidden">
            <AboutHero />
            <AboutStory />
            <AboutTeam />
            <AboutCertifications />
            <Footer />
        </div>
    );
}
