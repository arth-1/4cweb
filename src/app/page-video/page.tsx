import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { WhoAreWeSection } from "@/components/sections/who-are-we-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function PageVideo() {
  return (
    <div className="relative min-h-screen">
      {/* Full Page Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        </video>
        {/* Dark overlay for better text readability across entire page */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* All content over the video background */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <TracingBeam>
          <WhoAreWeSection />
          <WhatWeDoSection />
          <EventsSection />
          <SponsorsSection />
          <TestimonialsSection />
        </TracingBeam>
        <ContactSection />
      </div>
    </div>
  );
}
