
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex items-center justify-between w-full absolute top-0 z-10">
      <div className="flex items-center">
        <span className="text-primary font-bold text-xl">AI Action</span>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-foreground/80">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </nav>
      
      <Button 
        className="bg-primary hover:bg-primary/90"
        onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
      >
        Add to Chrome
      </Button>
    </header>
  );
};

export default Header;
