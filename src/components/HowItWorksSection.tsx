
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, SquareMenu, Sparkles } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Select Text",
      description: "Highlight any text on any webpage that you want to transform or analyze.",
      icon: MousePointer,
      color: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      title: "Right-Click",
      description: "Open the context menu with a right-click and find the AI Action options.",
      icon: SquareMenu,
      color: "bg-primary/20",
      textColor: "text-primary"
    },
    {
      title: "Let AI Do the Magic",
      description: "Choose an action and watch as AI transforms your selected text instantly.",
      icon: Sparkles,
      color: "bg-primary/30",
      textColor: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Using AI Action is incredibly simple. Complete powerful tasks in just three quick steps.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg w-full md:w-72 lg:w-80">
              <CardContent className="pt-8 px-6 pb-8 flex flex-col items-center text-center">
                <div className={`${step.color} p-4 rounded-full mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.textColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/vaKkNFQ3K8o"
              title="AI Action Chrome Extension Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

