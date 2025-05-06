
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes swirl.cx different from other restaurant management systems?",
      answer: "Unlike other systems that only focus on specific aspects of your restaurant, swirl.cx offers an all-in-one solution that integrates digital menus, QR ordering, POS, inventory management, and analytics - all on one platform. Our system is designed specifically for restaurants with features that enhance customer experience while simplifying operations."
    },
    {
      question: "Do I need to replace my existing POS system?",
      answer: "Not necessarily. swirl.cx can work alongside your existing POS system through our integration capabilities. However, many customers choose to fully switch to our comprehensive solution to benefit from the seamless integration across all features."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. We offer flexible monthly subscriptions with no long-term commitment required. We're confident you'll love our platform and want to stay, but you're free to cancel anytime."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most restaurants are up and running within 24-48 hours. Our team handles the initial setup including menu digitization, and provides comprehensive training for your staff."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support via phone, email, and chat. Additionally, all plans include a dedicated account manager and regular check-ins to ensure everything is running smoothly."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get answers to common questions about our restaurant management platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-swirl-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
