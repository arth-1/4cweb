import { DraggableImageGallery } from "@/components/ui/draggable-image-gallery";
import { EVENTS_DATA } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const event = EVENTS_DATA.find(e => e.slug === slug);

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
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Event Gallery</h2>
                    <DraggableImageGallery images={event.images} />
                    <p className="text-center text-foreground/60 mt-4 text-sm">Click and drag to navigate through images</p>
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
