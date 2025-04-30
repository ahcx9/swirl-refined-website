
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the QR ordering system work?",
    answer: "Our QR ordering system allows customers to scan a QR code at their table using their smartphone. This opens a digital menu where they can browse, select items, and place orders without needing to download an app. Orders are sent directly to your kitchen display system for preparation."
  },
  {
    question: "Is Swirl compatible with existing POS systems?",
    answer: "Yes, Swirl is designed to integrate seamlessly with most popular POS systems. We offer direct integrations with major providers and can custom-develop connections for specific systems. Our team will help ensure a smooth integration process."
  },
  {
    question: "How long does it take to implement Swirl?",
    answer: "Most restaurants can be fully set up with Swirl within 1-2 days. Our onboarding process includes menu digitization, staff training, and system configuration. We provide comprehensive support throughout the implementation process to ensure a smooth transition."
  },
  {
    question: "Can I customize the digital menu to match my restaurant's branding?",
    answer: "Absolutely! Swirl offers extensive customization options for your digital menu, including colors, fonts, layout, and imagery. You can showcase your restaurant's unique brand identity while providing an intuitive ordering experience for your customers."
  },
  {
    question: "What kind of customer support does Swirl provide?",
    answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our support team is highly trained to resolve technical issues quickly and provide guidance on optimizing your use of the platform."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-swirl-gray">
            Find answers to common questions about our restaurant management platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-5 text-lg hover:text-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-swirl-gray pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-10">
          <p className="text-swirl-gray mb-4">
            Still have questions? Contact our support team.
          </p>
          <Link to="/contact" className="text-purple hover:text-purple-dark font-medium">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
