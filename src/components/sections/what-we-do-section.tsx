import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
    <section id="what-we-do" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Do</h2>
            <p className="text-lg text-foreground/80 mt-2">Pushing the boundaries of marketing innovation. </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity) => (
                <div key={activity.title} className="glass-card p-8 text-center flex flex-col items-center">
                    <div className="mb-4">{activity.icon}</div>
                    <h3 className="text-2xl font-headline font-semibold mb-2">{activity.title}</h3>
                    <p className="text-foreground/70">{activity.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
