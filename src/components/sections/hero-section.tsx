import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[70vh]">
        <div className="glass-card flex flex-col md:flex-row w-full max-w-7xl min-h-[420px] md:min-h-[520px] lg:min-h-[600px] shadow-2xl rounded-2xl overflow-hidden">
          {/* Left: Image */}
          <div className="relative flex-1 min-h-[280px] md:min-h-[400px] lg:min-h-[600px] max-h-[700px]">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Hero visual"
              data-ai-hint="abstract technology"
              fill
              className="object-cover object-center h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter mb-2">
              Text<span className='text-primary'>.</span> Lorem<span className='text-accent'>.</span> Text<span className='text-primary'>.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4">
              Welcome to the 4C, where we Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe corporis ipsa consequatur quis!.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg px-8 py-6 w-fit">
              <Link href="/#contact-us">
                Contact Us <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
