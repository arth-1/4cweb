import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-24 min-h-screen bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-16 max-w-5xl mx-auto shadow-2xl rounded-2xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-accent">About Us</h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-primary">4C</span> — Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias natus ullam dolorum praesentium, quidem rerum dolor suscipit asperiores voluptatem, soluta dolores ipsum cumque? Blanditiis itaque aliquam soluta iste accusantium quidem..
              </p>
              <ul className="list-disc pl-6 text-foreground/70 space-y-2 mb-8">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold text-accent">Content:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error unde praesentium vero accusamus mollitia pariatur ex
              </p>
              <p className="text-foreground/80">
                <span className="font-semibold text-accent">Content:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error unde praesentium vero accusamus mollitia pariatur ex
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-6">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="About 4C Team"
                  fill
                  className="object-cover"
                  data-ai-hint="teamwork creativity marketing"
                />
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center text-foreground/80 text-sm">
                <span className="font-semibold text-accent">Founded:</span> IDK &mdash; <span className="font-semibold text-primary">Driven by Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
