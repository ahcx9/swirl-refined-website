
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
      question: "Do you integrate with third-party POS systems?",
      answer: "While we can integrate with some third-party systems, we've found that restaurants achieve the best results by using our complete ecosystem. Our POS is designed specifically for restaurants and seamlessly connects with all our other features, providing a unified experience that third-party integrations simply can't match."
    },
    {
      question: "How does your QR ordering system work?",
      answer: "Our QR ordering system enables customers to scan a QR code at their table to instantly view your digital menu on their device. They can place orders, customize items, request assistance, and even pay directly from their phones. All orders are sent to your POS and kitchen display system in real-time, streamlining operations and reducing wait times."
    },
    {
      question: "What kind of analytics do you provide?",
      answer: "Our platform offers comprehensive analytics including sales trends, peak hour identification, top-selling items, customer behavior patterns, inventory usage, staff performance, and detailed financial reporting. These insights help you make data-driven decisions to optimize menu pricing, staffing, inventory management, and marketing strategies."
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
    },
    {
      question: "Can I customize the digital menu to match my brand?",
      answer: "Absolutely! Our digital menu is highly customizable. You can add your logo, choose colors that match your brand, upload high-quality images of your dishes, create categories, add item descriptions, highlight specials, and even include nutritional information. We also support multiple languages and currencies for international customers."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">GET ANSWERS</span>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get answers to common questions about our restaurant management platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 group">
                      <span className="group-hover:text-purple-600 transition-colors duration-200">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-swirl-gray px-6 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
