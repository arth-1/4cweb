import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "The 4C team has been instrumental in transforming our marketing strategy. Their innovative approach and deep understanding of digital trends helped us achieve a 300% increase in engagement.",
    name: "Sarah Chen",
    designation: "Marketing Director at TechFlow",
    src: "https://placehold.co/500x500.png",
  },
  {
    quote:
      "Working with 4C was a game-changer for our startup. Their creative workshops and mentorship program gave us the tools we needed to build a strong brand identity from scratch.",
    name: "Marcus Rodriguez",
    designation: "Founder & CEO of InnovateX",
    src: "https://placehold.co/501x501.png",
  },
  {
    quote:
      "The events organized by 4C are top-notch. I've attended multiple workshops and each one provided valuable insights that I immediately applied to my work. The networking opportunities are incredible.",
    name: "Emily Johnson",
    designation: "Digital Marketing Specialist",
    src: "https://placehold.co/502x502.png",
  },
  {
    quote:
      "4C's mentorship program connected me with industry experts who guided my career transition into marketing. The collaborative environment and hands-on learning approach made all the difference.",
    name: "David Kim",
    designation: "Marketing Analyst at DataDriven Co.",
    src: "https://placehold.co/503x503.png",
  },
  {
    quote:
      "The creativity and innovation that 4C brings to every project is remarkable. They don't just follow trends; they create them. Our collaboration resulted in award-winning campaigns.",
    name: "Lisa Wang",
    designation: "Creative Director at BrandScope",
    src: "https://placehold.co/504x504.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Community Says</h2>
          <p className="text-lg text-foreground/80 mt-2">
            Hear from professionals who've transformed their careers with 4C.
          </p>
        </div>
        <div className="glass-card p-8 w-fit mx-auto">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
