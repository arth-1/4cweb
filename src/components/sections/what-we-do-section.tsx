import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Lightbulb, Rocket, Users } from "lucide-react";

const activities = [
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Events",
        description: "We focus on events that inculcate enjoyment as well as contain a generous dose of Marketing related tasks. We also organize workshops and seminars which are respected by industry leaders, academicians and participants alike. In this competitive world, making a lasting impression is important- now more than ever. We believe in helping students learn to hone their skills in this regard so that nothing stops them from achieving their goals!"
    }
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
