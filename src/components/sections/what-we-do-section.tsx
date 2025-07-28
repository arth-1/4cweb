import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Lightbulb, Rocket, Users } from "lucide-react";

const activities = [
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor reiciendis aperiam laboriosam assumenda, neque veritatis eos voluptatem saepe corporis sunt delectus provident qui, quam dolore! Quidem natus architecto tempora?."
    },
    {
        icon: <Lightbulb className="w-10 h-10 text-accent" />,
        title: "Lorem Ipsum 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor reiciendis aperiam laboriosam assumenda, neque veritatis eos voluptatem saepe corporis sunt delectus provident qui, quam dolore! Quidem natus architecto tempora?."
    },
    {
        icon: <Users className="w-10 h-10 text-accent" />,
        title: "Lorem Ipsum 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor reiciendis aperiam laboriosam assumenda, neque veritatis eos voluptatem saepe corporis sunt delectus provident qui, quam dolore! Quidem natus architecto tempora?."
    }
]

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Do</h2>
            <p className="text-lg text-foreground/80 mt-2">Pushing the boundaries of marketing innovation. </p>
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
