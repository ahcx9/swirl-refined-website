
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

const leftColumnFaqs: FAQItem[] = [
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
    question: "Can Swirl integrate with other POS systems?",
    answer: "Swirl is a comprehensive restaurant management ecosystem with our own POS system. We don't integrate with external POS systems because our solution is designed to work seamlessly as an all-in-one platform. This ensures perfect synchronization between all modules like digital menus, inventory management, staff management, and analytics, delivering a superior experience compared to fragmented solutions."
  },
  {
    question: "What kind of training do you provide for restaurant staff?",
    answer: "We provide comprehensive training for all restaurant staff, including managers, servers, and kitchen staff. Our training includes hands-on sessions, video tutorials, and detailed documentation. We also offer ongoing support after implementation to ensure your team is comfortable and confident using our system."
  }
];

const rightColumnFaqs: FAQItem[] = [
  {
    question: "How does QR code ordering affect the guest experience?",
    answer: "QR ordering enhances the guest experience by giving customers control over their dining experience. They can browse the menu at their own pace, customize orders without miscommunication, and pay when they're ready without waiting for staff. Our system still allows for human interaction when needed, creating a perfect balance between efficiency and hospitality that results in higher customer satisfaction and increased repeat visits."
  },
  {
    question: "What kind of analytics and insights will I receive from Swirl?",
    answer: "Swirl provides comprehensive analytics including item popularity rankings, peak ordering times, average order values, customer return rates, and promotional campaign performance. These insights help you optimize your menu, staffing, pricing strategies, and marketing efforts. Our dashboard presents data in easy-to-understand visualizations, and custom reports can be scheduled for regular delivery to your email."
  },
  {
    question: "How does Swirl handle data security and customer privacy?",
    answer: "Data security is our top priority. Swirl implements industry-leading security protocols including end-to-end encryption, secure payment processing that meets PCI DSS standards, regular security audits, and strict access controls. Customer data is stored securely and managed in compliance with global privacy regulations like GDPR, ensuring your customers' information is always protected."
  },
  {
    question: "What support can I expect after implementing Swirl's solutions?",
    answer: "Swirl provides 24/7 customer support through multiple channels including phone, email, and live chat. Our dedicated customer success managers ensure smooth operation of your system and help you maximize its benefits. We also offer regular system updates with new features and improvements based on customer feedback, keeping your restaurant at the cutting edge of technology."
  },
  {
    question: "Do you offer hardware for the POS system or only software?",
    answer: "Swirl offers both software and hardware solutions for a complete POS experience. Our hardware includes high-quality touchscreen terminals, kitchen display systems, receipt printers, barcode scanners, and payment processing devices. We carefully select reliable hardware that integrates perfectly with our software, ensuring a seamless and robust restaurant management system."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-swirl-gray max-w-2xl mx-auto mb-4">
            Get answers to common questions about Swirl's restaurant management solutions
          </p>
          <div className="h-0.5 w-16 bg-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnFaqs.map((faq, index) => (
                <AccordionItem 
                  key={`left-${index}`} 
                  value={`left-item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white mb-4"
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
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {rightColumnFaqs.map((faq, index) => (
                <AccordionItem 
                  key={`right-${index}`} 
                  value={`right-item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white mb-4"
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
