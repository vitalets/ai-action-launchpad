
import React from 'react';
import FeatureCard from './FeatureCard';
import { Bot, Type, Globe, FileText, Brain, Send } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Text Summarization",
      description: "Transform lengthy articles and documents into concise summaries with a single click.",
      icon: FileText
    },
    {
      title: "Language Translation",
      description: "Instantly translate selected text into any language to break down communication barriers.",
      icon: Globe
    },
    {
      title: "Smart Rewriting",
      description: "Rewrite content in different tones and styles to match your specific needs.",
      icon: Type
    },
    {
      title: "AI Response Generation",
      description: "Get AI-powered responses to questions, emails, and messages in seconds.",
      icon: Bot
    },
    {
      title: "Content Analysis",
      description: "Analyze the sentiment, complexity, and key points of any text you select.",
      icon: Brain
    },
    {
      title: "Cross-Platform Sharing",
      description: "Easily share transformed content across your favorite platforms and apps.",
      icon: Send
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Supercharge your browsing experience with these time-saving AI-powered capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
