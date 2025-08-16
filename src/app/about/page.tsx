import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Timeline } from "@/components/ui/timeline";

export default function AboutPage() {
  const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-base text-foreground/80 leading-relaxed">
          Launch of 4C's most ambitious initiatives — revolutionizing digital marketing education and creating industry partnerships that matter.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://placehold.co/500x400.png" alt="4C Workshop 2024" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Marketing Campaign" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Team Collaboration" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Innovation Lab" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base text-foreground/80 leading-relaxed">
          Expansion year — 4C established key partnerships and launched mentorship programs connecting students with industry leaders.
        </p>
        <p className="mb-8 text-sm md:text-base text-foreground/80 leading-relaxed">
          Our focus shifted to bridging creativity and technology, addressing modern marketing education gaps.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://placehold.co/500x400.png" alt="Mentorship Program" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Industry Connect" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Creative Workshops" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Tech Integration" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base text-foreground/80 leading-relaxed">
          Continued our marketing education push with campaign teardowns and explainers — helping students decode real-world brand strategy.
        </p>
        <ul className="list-disc pl-6 text-foreground/70 space-y-2 mb-6">
          <li>BookTok trends explainer (Nov 2022)</li>
          <li>Heinz “Tomato Blood” campaign analysis (Oct 2022)</li>
          <li>IKEA “Ghar Aa Jao” brand positioning breakdown (Oct 2022)</li>
          <li>Dove #ReverseSelfie social impact discussion (Nov 2022)</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://placehold.co/500x400.png" alt="Editorial 2022" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Campaign Analysis" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Brand Strategy" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Student Research" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base text-foreground/80 leading-relaxed">
          Launch phase of our editorial/knowledge initiative — connecting classroom theory with live campaigns in FMCG, retail, and tech.
        </p>
        <ul className="list-disc pl-6 text-foreground/70 space-y-2 mb-6">
          <li>First wave of marketing breakdowns (Oct–Dec 2021)</li>
          <li>Introduced student-led research-backed writeups</li>
          <li>Bridged STP frameworks with trending digital plays</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://placehold.co/500x400.png" alt="Launch 2021" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Community Learning" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Framework Application" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Content Sprints" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
        </div>
      </div>
    ),
  },
  {
    title: "2008 — Foundation",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">
          The beginning of 4C — four pillars coming together to build a student-led marketing community.
        </p>
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-3 text-sm md:text-base text-foreground/70">
            <span className="text-accent">✅</span> Connect — Building meaningful relationships
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base text-foreground/70">
            <span className="text-accent">✅</span> Collect — Gathering insights and knowledge
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base text-foreground/70">
            <span className="text-accent">✅</span> Contest — Challenging conventional thinking
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base text-foreground/70">
            <span className="text-accent">✅</span> Commence — Taking action that matters
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://placehold.co/500x400.png" alt="Foundation Year" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Early Team" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="First Initiatives" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
          <Image src="https://placehold.co/500x400.png" alt="Vision Setting" width={500} height={400}
            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 border border-white/10"/>
        </div>
      </div>
    ),
  },
];


  return (
    <div className="min-h-screen text-white">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CardContainer className="inter-var w-full">
            <CardBody className="glass-card relative group/card hover:shadow-sm hover:shadow-blue-500/[0.005] w-full h-auto rounded-xl p-8 md:p-16 max-w-5xl mx-auto shadow-xl border border-white/20 transition-all duration-700 ease-out">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <CardItem
                    translateZ="6"
                    className="text-4xl md:text-5xl font-headline font-bold mb-6 text-accent"
                  >
                    About Us
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="4"
                    className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed"
                  >
                    Welcome to <span className="font-bold text-primary">4C</span> — where creativity converges with technology to redefine the future of marketing. We are a collective of innovators, creators, and visionaries committed to bridging the gap between traditional marketing and digital transformation.
                  </CardItem>
                  <CardItem translateZ="3" className="mb-8">
                    <ul className="list-disc pl-6 text-foreground/70 space-y-2">
                      <li>Connect passionate individuals with industry opportunities</li>
                      <li>Collect insights from real-world marketing challenges</li>
                      <li>Contest conventional approaches with innovative solutions</li>
                      <li>Commence transformative projects that matter</li>
                    </ul>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="4"
                    className="text-foreground/80 mb-2"
                  >
                    <span className="font-semibold text-accent">Mission:</span> To empower the next generation of marketing professionals through hands-on experience, mentorship, and real-world application.
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="4"
                    className="text-foreground/80"
                  >
                    <span className="font-semibold text-accent">Vision:</span> Creating a future where creativity and technology seamlessly integrate to solve complex marketing challenges.
                  </CardItem>
                </div>
                <div className="flex-1 flex flex-col items-center gap-6">
                  <CardItem translateZ="5" className="w-full">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/team/aboutus.jpg"
                        alt="About 4C Team"
                        fill
                        className="object-cover"
                        data-ai-hint="teamwork creativity marketing"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ="3">
                    <div className="bg-white/10 rounded-lg p-4 text-center text-foreground/80 text-sm">
                      <span className="font-semibold text-accent">Founded:</span> 2008 &mdash; <span className="font-semibold text-primary">Powered by Creativity</span>
                    </div>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <Timeline data={timelineData} />
      </section>
    </div>
  );
}
