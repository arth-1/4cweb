import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Lightbulb, Rocket, Users } from "lucide-react";

const activities = [
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Mission",
        description: "To empower the next generation of marketing professionals through hands-on experience, mentorship, and real-world application. We create opportunities for growth through projects, industry-led workshops, and expert guidance, preparing students to confidently tackle the evolving challenges in marketing."
    },
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Vision",
        description: "Creating a future where creativity and technology unite to solve marketing’s toughest problems. We inspire collaboration across disciplines, encourage data-driven approaches, and foster innovation, driving positive change in how marketing solutions are developed and delivered."
    },
        {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Values",
        description: "Valuesntegrity and curiosity guide our journey. We promote inclusivity, collaboration, and ethical leadership, enabling every participant to learn, grow, and excel. Our commitment is to support each other and build a dynamic, resilient marketing community."
    },

]

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission</h2>
            <p className="text-lg text-foreground/80 mt-2">Collect, Connect, Contest, Commence </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity) => (
                <CardContainer key={activity.title} className="inter-var">
                    <CardBody className="glass-card relative group/card hover:shadow-xl hover:shadow-emerald-500/[0.05] w-full h-auto rounded-xl p-8 border border-white/10 transition-all duration-300">
                        <CardItem translateZ="50" className="mb-4 flex justify-center">
                            {activity.icon}
                        </CardItem>
                        <CardItem
                            translateZ="60"
                            className="text-2xl font-headline font-semibold mb-2 text-center text-white"
                        >
                            {activity.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="40"
                            className="text-foreground/70 text-center"
                        >
                            {activity.description}
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
      </div>
    </section>
  );
}
