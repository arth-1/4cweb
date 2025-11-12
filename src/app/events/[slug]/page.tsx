'use client';

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { EVENTS_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const event = EVENTS_DATA.find(e => e.slug === slug);

    if (!event) {
        notFound();
    }

    // Split images into two groups for two carousels
    const midPoint = Math.ceil(event.images.length / 2);
    const firstHalfImages = event.images.slice(0, midPoint);
    const secondHalfImages = event.images.slice(midPoint);

    return (
        <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">{event.name}</h1>
                </div>
                
                <div className="glass-card p-8 md:p-12 mb-12">
                    <p className="text-lg text-foreground/80 leading-relaxed">{event.fullDescription}</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Event Gallery</h2>
                    
                    {/* First Carousel */}
                    <div className="mb-8">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnInteraction: false,
                                })
                            ]}
                            opts={{
                                align: 'start',
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {firstHalfImages.map((image, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-2">
                                            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-black/20">
                                                <Image
                                                    src={image}
                                                    alt={`${event.name} - Image ${index + 1}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>

                    {/* Second Carousel - only show if there are images in second half */}
                    {secondHalfImages.length > 0 && (
                        <div className="mb-8">
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 3500,
                                        stopOnInteraction: false,
                                    })
                                ]}
                                opts={{
                                    align: 'start',
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {secondHalfImages.map((image, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-2">
                                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-black/20">
                                                    <Image
                                                        src={image}
                                                        alt={`${event.name} - Image ${index + midPoint + 1}`}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden sm:flex" />
                                <CarouselNext className="hidden sm:flex" />
                            </Carousel>
                        </div>
                    )}

                    <p className="text-center text-foreground/60 mt-4 text-sm">Use arrows to navigate • Auto-plays continuously</p>
                </div>
            </div>
        </div>
    );
}
