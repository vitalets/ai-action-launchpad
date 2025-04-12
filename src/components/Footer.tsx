
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">AI Action</h3>
            <p className="text-white/70 mb-4">
              Select text. Right-click. Let AI do the magic.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary-foreground">Home</a></li>
              <li><a href="#features" className="hover:text-primary-foreground">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-foreground">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary-foreground">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Get the Extension</h4>
            <Button 
              className="bg-white text-foreground hover:bg-white/90 mb-3"
              onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
            >
              Add to Chrome
            </Button>
            <p className="text-white/70 text-sm">
              Free to use. No registration required.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-white/50 text-sm">
          <p>© {currentYear} AI Action. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
