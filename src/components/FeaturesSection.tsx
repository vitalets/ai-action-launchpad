
import React from 'react';
import FeatureCard from './FeatureCard';
import { Bot, Type, Globe, FileText, Brain, Send } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Term Explanation",
      description: "Get AI-powered explanation of tricky words or phrases.",
      icon: Bot
    },
    {
      title: "Smart Rewriting",
      description: "Rewrite content in different tones and styles to match your specific needs.",
      icon: Type
    },
    {
      title: "Language Translation",
      description: "Instantly translate selected text into any language with usage examples.",
      icon: Globe
    },
    {
      title: "Text Summarization",
      description: "Transform lengthy articles into concise summaries with a single click.",
      icon: FileText
    },
    {
      title: "Check grammar",
      description: "Check grammar mistakes and imporve readability of your text.",
      icon: Send
    },
    {
      title: "Setup your own prompt",
      description: "Create custom prompt templates to get the most out of AI Action.",
      icon: Brain
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Customize your right-click menu to boost routine actions with AI.
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
