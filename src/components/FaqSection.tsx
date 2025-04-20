
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is GrowthRocket?",
      answer: "GrowthRocket is a fintech platform delivering capital solutions for developers of mobile apps, games, and subscription-based businesses. We connect directly to real-time revenue sources like Apple, Google, Stripe and ad networks—making funding decisions seamless, fast, and data-driven."
    },
    {
      question: "Why should I use your funding?",
      answer: "We're founders too — we understand the cashflow pain. No equity. No delays. No BS. Just fast, predictable capital. We give you fast, frictionless access to funding exactly when you need it. It drives higher retention, improves user satisfaction, and helps your customers grow revenue and increase payment volume—all while generating a new revenue stream for you."
    },
    {
      question: "Am I eligible for funding?",
      answer: "We fund mobile apps, games, and subscription businesses with at least $30K/month in revenue from the App Store, Google Play, most of the AdNetworks, or Stripe/RevenueCat, if you have good B2B contracts that have a payment delay - that works well too."
    },
    {
      question: "How much capital can users access?",
      answer: "We offer limits up to 5x of your average monthly revenue and up to 95% of confirmed receivables. You can draw as much or as little as you need within that limit."
    },
    {
      question: "How is GrowthRocket different from banks or traditional lenders?",
      answer: "✅ No credit checks\n✅ No collaterals\n✅ Fully automated decisions\n✅ Revenue-based repayment (flexible cash flows)\n✅ Fast payouts\n✅ Works natively with App Store, Google Play, ad networks, and analytics tools"
    },
    {
      question: "When will I receive my funding?",
      answer: "In most cases, we fund within 24 hours after onboarding and verification."
    },
    {
      question: "How do repayments work?",
      answer: "Repayments are based on your receivables. We get paid everytime your store pays you, so you can stay focused on your product. "
    },
    {
      question: "How do I apply for funding?",
      answer: "Use our funding calculator to see your offer. If it looks good, book a call with us, submit your app data and get funded."
    },
    {
      question: "What support is available?",
      answer: "Each partner is assigned a Manager to assist with onboarding, repayment tracking, and renewals."
    },
    {
      question: "Do you support companies outside the US/EU?",
      answer: "Yes. We primarily work with companies incorporated in the US, EU, UK, and selected other regions. Let's discuss your case if you're outside that scope."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our funding process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 px-6"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
