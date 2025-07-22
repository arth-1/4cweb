'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { EVENTS_DATA } from '@/lib/data';

export function EventsSection() {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Upcoming Events</h2>
          <p className="text-lg text-foreground/80 mt-2">Join us for our next big thing.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {EVENTS_DATA.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <div className="glass-card overflow-hidden">
                        <div className="relative aspect-video">
                            <Image
                            src={event.images[0]}
                            alt={event.name}
                            data-ai-hint="event conference"
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-headline font-bold mb-2">{event.name}</h3>
                            <p className="text-foreground/70 mb-4">{event.description}</p>
                            <Link href={`/events/${event.slug}`} className="text-accent font-semibold hover:underline">
                            Learn More &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
