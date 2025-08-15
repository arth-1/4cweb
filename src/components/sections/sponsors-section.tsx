'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { SPONSORS } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay"

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Sponsors</h2>
          <p className="text-lg text-foreground/80 mt-2">Our Partners</p>
        </div>
        <Carousel
            plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                })
              ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {SPONSORS.map((sponsor, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-4">
                  <div className="glass-card flex items-center justify-center p-6 h-32">
                    <div className="relative w-full h-full">
                         <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            data-ai-hint="company logo"
                            fill
                            className="object-contain"
                            />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
