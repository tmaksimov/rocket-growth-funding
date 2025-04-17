
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
      question: "What kind of companies do you finance?",
      answer: "We work with mobile apps, games, SaaS, and subscription-based businesses that generate at least $30K in monthly revenue (MRR), have an active bank account, and receive payments from platforms like Apple, Google, or ad networks."
    },
    {
      question: "How fast can I get funded?",
      answer: "Once your data is connected and onboarding is complete, funding can happen in as little as 3-5 business days."
    },
    {
      question: "What documents do I need to get the funding?",
      answer: "Just the essentials — your app's store and ad network revenue reports (e.g. App Store, Google Play, Unity Ads), a bank account statement, and company registration details. No complex financials or investor decks required."
    },
    {
      question: "How is the funding structured?",
      answer: "We fund you based on a factoring agreement, where we buy receivables already earned. You can draw down capital flexibly, and repayment terms are adapted to your cash flow — no fixed monthly payments."
    },
    {
      question: "When do I pay the commission?",
      answer: "Our fees are usually deducted automatically from the payouts you receive — so you don't need to worry about managing invoices or manual payments."
    },
    {
      question: "Do you request collateral, guarantees, or pledge of shares?",
      answer: "No. We do not require any personal guarantees, pledges, or collateral. Our financing is based solely on business performance and expected receivables."
    },
    {
      question: "Do you provide monthly reports for accounting?",
      answer: "Yes. You receive monthly statements showing funding activity, outstanding balances, and fee breakdowns — perfect for accounting and financial planning."
    },
    {
      question: "Will I lose ownership or control?",
      answer: "No. Our model is 100% non-dilutive. You keep full ownership and make all decisions — we're here to support your strategy, not control it."
    },
    {
      question: "What's the difference between RocketGrowth and traditional financing?",
      answer: "Traditional loans are slow, rigid, and often require guarantees or collateral. VC comes with dilution and long timelines. GrowthRocket is fast, flexible, and built around the way modern apps operate."
    },
    {
      question: "Do you support companies outside the US/EU?",
      answer: "We primarily work with companies incorporated in the US, EU, UK, and selected other regions. Let's discuss your case if you're outside that scope."
    },
    {
      question: "Are you a lender or VC?",
      answer: "Neither. We provide non-dilutive, performance-based financing through receivables management and marketing co-investment. No equity taken. No long-term debt."
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
                  {faq.answer}
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
