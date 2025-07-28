import Image from 'next/image';
import Link from 'next/link';
import { Button as MovingBorderButton } from '../ui/moving-border';
import { MoveRight } from 'lucide-react';

export function HeroSectionVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[70vh] relative z-10">
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
            <div className="absolute inset-0 bg-black/50" />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter mb-2">
              Innovate<span className='text-primary'>.</span> Create<span className='text-accent'>.</span> Captivate<span className='text-primary'>.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4">
              Welcome to the 4C, where we merge creativity with technology to redefine marketing for the digital age.
            </p>
            <MovingBorderButton
              as={Link}
              href="/#contact-us"
              className="bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold text-lg"
              containerClassName=""
              borderClassName="bg-[radial-gradient(var(--aurora-blue)_40%,transparent_60%)]"
            >
              Contact Us <MoveRight className="ml-2 w-5 h-5" />
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
