import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { WhoAreWeSection } from "@/components/sections/who-are-we-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhoAreWeSection />
      <WhatWeDoSection />
      <EventsSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
