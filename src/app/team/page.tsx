'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CORE_MEMBERS, MENTORS, SUPER_CORE_MEMBERS, CREW } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay";

function TeamCard({ name, title, image }: { name: string; title: string; image: string }) {
    return (
        <div className="p-1 h-full">
            <div className="glass-card overflow-hidden text-center p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.05]">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-accent">
                    <Image
                    src={image}
                    alt={name}
                    data-ai-hint="person portrait"
                    fill
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-full" />
                </div>
                <h3 className="text-xl font-headline font-bold text-white drop-shadow-lg">{name}</h3>
                <p className="text-accent drop-shadow-lg">{title}</p>
            </div>
        </div>
    )
}

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <section id="super-core" className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Super Core</h2>
          <p className="text-lg text-foreground/80 mt-2">The driving force behind 4C.</p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
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
            {SUPER_CORE_MEMBERS.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <TeamCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>


<section id="mentors" className="mb-24">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-headline font-bold">Advisory</h2>
    <p className="text-lg text-foreground/80 mt-2">Our guiding force.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    {MENTORS.map((member, index) => (
      <TeamCard key={index} {...member} />
    ))}
  </div>
</section>


      <section id="crew" className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Crew</h2>
          <p className="text-lg text-foreground/80 mt-2">The backbone of our operations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {CREW.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      <section id="core-team">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Core Team</h2>
          <p className="text-lg text-foreground/80 mt-2">The dedicated members making it all happen.</p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
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
            {CORE_MEMBERS.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <TeamCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>
    </div>
  );
}
