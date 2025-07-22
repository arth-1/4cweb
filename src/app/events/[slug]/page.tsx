import { EventCollage } from "@/components/event-collage";
import { EVENTS_DATA } from "@/lib/data";
import { notFound } from "next/navigation";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
    const event = EVENTS_DATA.find(e => e.slug === params.slug);

    if (!event) {
        notFound();
    }

    return (
        <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">{event.name}</h1>
                </div>
                
                <div className="glass-card p-8 md:p-12 mb-12">
                    <p className="text-lg text-foreground/80 leading-relaxed">{event.fullDescription}</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Event Collage</h2>
                    <EventCollage imageUrls={event.images} />
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return EVENTS_DATA.map(event => ({
        slug: event.slug,
    }));
}
