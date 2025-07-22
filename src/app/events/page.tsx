import { EVENTS_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Events</h1>
                <p className="text-xl text-foreground/80 mt-2">Explore our workshops, events, and conferences.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS_DATA.map((event) => (
                     <div key={event.slug} className="glass-card overflow-hidden">
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
                            View Details &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
