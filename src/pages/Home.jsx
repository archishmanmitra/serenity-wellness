import React from "react";
import HeroSection from "../components/home/HeroSection";
import ApproachSection from "../components/home/ApproachSection";
import ServicesPreview from "../components/home/ServicesPreview";
import TestimonialSection from "../components/home/TestimonialSection";
import CtaCard from "../components/shared/CtaCard";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ApproachSection />
            <ServicesPreview />
            <TestimonialSection />
            <CtaCard />
        </div>
    );
}