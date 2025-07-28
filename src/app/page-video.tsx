import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { HeroSectionVideo } from "@/components/sections/hero-section-video";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { WhoAreWeSection } from "@/components/sections/who-are-we-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function HomeVideo() {
  return (
    <div className="flex flex-col">
      <HeroSectionVideo />
      <TracingBeam>
        <WhoAreWeSection />
        <WhatWeDoSection />
        <EventsSection />
        <SponsorsSection />
        <TestimonialsSection />
      </TracingBeam>
      <ContactSection />
    </div>
  );
}
