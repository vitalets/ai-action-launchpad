
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Using AI Action Today
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of users who are saving time and boosting productivity with AI-powered text actions.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg font-medium gap-2"
          onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
        >
          <Download className="w-5 h-5" /> Add to Chrome - It's Free
        </Button>
        <p className="mt-6 text-white/60 text-sm">
          Compatible with Chrome 70 and above. No registration required.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
