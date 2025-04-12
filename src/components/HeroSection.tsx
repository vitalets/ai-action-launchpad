
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { MousePointer, ArrowRight } from 'lucide-react';
import { EXTENSION_WEBSTORE_URL } from '@/config';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-pattern pt-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-foreground">AI </span>
            <span className="heading-outline text-transparent">Action</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8">
            Select text. Right-click. Let AI do the magic.
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0">
            Our Chrome extension supercharges your right-click menu with AI-powered actions. 
            Process selected text in one click to get instant explanations, summaries, translations, and more.
            {/* Get instant explanations of selected text, perform smart translations, summarize articles, and do more with just a click. */}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg font-medium gap-2"
              onClick={() => window.open(EXTENSION_WEBSTORE_URL, "_blank")}
            >
              Add to Chrome <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg font-medium border-primary text-primary hover:bg-primary/5"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Logo className="animate-float" />
            {/* <div className="absolute -bottom-10 right-0 text-5xl animate-pulse">
              <MousePointer className="w-16 h-16 text-foreground/20 transform -rotate-45" />
            </div> */}
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div> */}
    </section>
  );
};

export default HeroSection;
