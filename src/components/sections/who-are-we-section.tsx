import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function WhoAreWeSection() {
  return (
    <section id="who-we-are" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <CardContainer className="inter-var w-full">
          <CardBody className="glass-card relative group/card hover:shadow-sm hover:shadow-blue-500/[0.005] w-full h-auto rounded-xl p-8 md:p-12 border border-white/20 transition-all duration-700 ease-out">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-white">
                <CardItem
                  translateZ="60"
                  className="text-3xl md:text-4xl font-headline font-bold mb-4"
                >
                  Who Are We?
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-lg text-foreground/80 leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic eius quia, ipsa, sequi excepturi at distinctio delectus molestias a quidem, qui nobis! Atque, nemo placeat! At repellendus laborum consectetur! 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic eius quia, ipsa, sequi excepturi at distinctio delectus molestias a quidem, qui nobis! Atque, nemo placeat! At repellendus laborum consectetur! 
                </CardItem>
              </div>
              <CardItem translateZ="50" className="w-full">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image 
                    src="https://placehold.co/600x400.png"
                    alt="Our Team"
                    data-ai-hint="team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
