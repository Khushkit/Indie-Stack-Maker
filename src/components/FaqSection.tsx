import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "what-is-indie-maker-stack",
    question: "What is Indie Maker Stack?",
    answer: "Indie Maker Stack is a comprehensive collection of tools, resources, and business ideas specifically curated for indie makers, entrepreneurs, and solopreneurs who want to build profitable online businesses without the typical trial and error process. It includes 300+ validated business ideas, 100+ essential tools, step-by-step playbooks, and a supportive community."
  },
  {
    id: "customer-support",
    question: "Do you have customer support service?",
    answer: "Yes, we provide email support to all our customers. Once you purchase the Indie Maker Stack, you'll have access to our support team who can assist you with any questions or issues you might encounter. We typically respond within 24-48 hours on business days."
  },
  {
    id: "community-support",
    question: "Is there any community support?",
    answer: "Absolutely! One of the key benefits of the Indie Maker Stack is access to our private community of like-minded entrepreneurs. You can connect with other makers, share experiences, get feedback on your ideas, and collaborate on projects. The community is moderated to ensure a high-quality, supportive environment."
  },
  {
    id: "updates",
    question: "Do you provide updates to the content?",
    answer: "Yes, we regularly update our resources with new business ideas, tools, and playbooks. As a lifetime member, you'll receive these updates at no additional cost. We typically add new content on a monthly basis and send notifications to all members."
  },
  {
    id: "after-purchase",
    question: "What happens after I purchase?",
    answer: "After completing your purchase, you'll receive an email with login credentials to access the Indie Maker Stack platform. From there, you can explore all the resources, join the private community, and start implementing the strategies and tools that best suit your business goals."
  },
  {
    id: "lifetime-access",
    question: "What does lifetime access mean?",
    answer: "Lifetime access means you get permanent entry to all current and future resources in the Indie Maker Stack. As we continuously update and expand our toolkit, you'll receive instant access to new materials, keeping your entrepreneurial skills sharp and up-to-date."
  }
];

const FaqSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the Indie Maker Stack
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-display text-lg font-semibold hover:no-underline hover:bg-gray-50/50 data-[state=open]:bg-teal-50/50 data-[state=open]:text-teal-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Still have questions?</h3>
          <p className="text-teal-50 mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Please reach out to our customer support team.
          </p>
          <a 
            href="mailto:support@indiemakerstack.com" 
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 hover:text-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
