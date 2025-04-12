
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

const Index = () => {
  // Update page title
  React.useEffect(() => {
    document.title = 'AI Action - Select text. Right-click. Let AI do the magic.';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />

        <section className="pt-10 px-6 md:px-12 bg-secondary">
          <div className="relative flex items-center justify-center w-full">
            <Logo className="animate-float" />
          </div>
        </section>

        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
