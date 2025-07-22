import Image from "next/image";

export function WhoAreWeSection() {
  return (
    <section id="who-we-are" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Who Are We?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic eius quia, ipsa, sequi excepturi at distinctio delectus molestias a quidem, qui nobis! Atque, nemo placeat! At repellendus laborum consectetur! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic eius quia, ipsa, sequi excepturi at distinctio delectus molestias a quidem, qui nobis! Atque, nemo placeat! At repellendus laborum consectetur! 
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
               <Image 
                src="https://placehold.co/600x400.png"
                alt="Our Team"
                data-ai-hint="team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
