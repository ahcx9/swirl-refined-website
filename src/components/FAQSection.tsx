
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can digital menus improve my restaurant's efficiency?",
    answer: "Digital menus eliminate the need for printing physical menus, allowing instant updates to items and prices. They reduce order errors by directly transmitting selections to the kitchen, speed up table turnover by 20-30% through faster ordering processes, and collect valuable customer data for targeted marketing and menu optimization."
  },
  {
    question: "What kind of restaurants benefit most from Swirl's solutions?",
    answer: "Swirl's solutions benefit a wide range of establishments, from quick-service restaurants needing fast ordering to fine dining restaurants seeking enhanced guest experiences. Our platform is particularly valuable for multi-location restaurants requiring consistent operations, establishments with frequently changing menus, and restaurants looking to gather customer data for marketing and optimization."
  },
  {
    question: "How difficult is it to implement Swirl's digital ordering system?",
    answer: "Implementing Swirl's system is designed to be simple and quick. Our team handles the entire setup process, from menu digitization to staff training. The average restaurant can be fully operational within 1-2 weeks. Our intuitive admin dashboard makes ongoing management easy, requiring minimal technical skill, and our 24/7 support team is always available to help with any questions."
  },
  {
    question: "Can Swirl integrate with my existing POS system?",
    answer: "Yes, Swirl is designed to integrate seamlessly with most major POS systems, including Square, Toast, Clover, Lightspeed, and many others. Our integration ensures orders flow smoothly from customers directly to your kitchen without the need for manual re-entry. If you have a custom or less common POS, our team can work with you to develop a specific integration solution."
  },
  {
    question: "How does QR code ordering affect the guest experience?",
    answer: "QR ordering enhances the guest experience by giving customers control over their dining experience. They can browse the menu at their own pace, customize orders without miscommunication, and pay when they're ready without waiting for staff. Our system still allows for human interaction when needed, creating a perfect balance between efficiency and hospitality that results in higher customer satisfaction and increased repeat visits."
  },
  {
    question: "What kind of analytics and insights will I receive from Swirl?",
    answer: "Swirl provides comprehensive analytics including item popularity rankings, peak ordering times, average order values, customer return rates, and promotional campaign performance. These insights help you optimize your menu, staffing, pricing strategies, and marketing efforts. Our dashboard presents data in easy-to-understand visualizations, and custom reports can be scheduled for regular delivery to your email."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            FAQ
          </h2>
          <div className="h-0.5 w-16 bg-purple mx-auto"></div>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                <span className="font-medium text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
