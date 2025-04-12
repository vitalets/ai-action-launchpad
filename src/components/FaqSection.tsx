
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Is AI Action free to use?",
      answer: "Yes, AI Action is completely free to use. We offer a generous free tier with multiple daily uses. For power users, we also offer a premium plan with unlimited usage and additional features."
    },
    {
      question: "Which browsers are supported?",
      answer: "AI Action is currently available for Google Chrome. We're working on bringing it to other browsers like Firefox, Safari, and Edge in the near future."
    },
    {
      question: "Is my data secure?",
      answer: "We take privacy seriously. The text you select is processed securely and is never stored or used for training. All processing happens in your browser or through secure API calls that respect your privacy."
    },
    {
      question: "Do I need an account to use AI Action?",
      answer: "No account is required to use the basic features of AI Action. However, creating a free account allows you to sync your preferences across devices and access premium features."
    },
    {
      question: "How accurate is the AI?",
      answer: "AI Action uses state-of-the-art language models that provide high-quality results. However, as with any AI tool, the accuracy may vary depending on the complexity and context of the text."
    },
    {
      question: "Can I suggest new features?",
      answer: "Absolutely! We love hearing from our users. You can submit feature requests through the extension's feedback form or by contacting our support team."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70 text-lg">
            Got questions? We've got answers.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
