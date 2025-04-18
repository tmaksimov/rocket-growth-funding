
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Submit your product & receivables",
      description: "Send us a link to your app or game + your receivables data from stores for the past 3 months.",
      color: "bg-rocket-500"
    },
    {
      number: "02",
      title: "Talk to us – get your custom solution",
      description: "A short call to understand your business model and growth strategy. We'll structure a plan that fits your cycles, revenue model, and needs.",
      color: "bg-mint-500"
    },
    {
      number: "03",
      title: "Review your proposal",
      description: "Transparent terms – fast decisions. You'll receive an unbeatable personalized offer.",
      color: "bg-blue-500"
    },
    {
      number: "04",
      title: "Get funds",
      description: "Once approved, funds are transferred to your account within days, ready for you to grow your business.",
      color: "bg-rocket-700"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple four-step process to get you funded quickly
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 lg:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`lg:flex items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Step number */}
                <div className="hidden lg:flex flex-shrink-0 w-28 h-28 rounded-full items-center justify-center text-4xl font-bold text-white mb-6 lg:mb-0 mx-auto lg:mx-0" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                
                {/* Mobile step number */}
                <div className="lg:hidden flex flex-shrink-0 w-16 h-16 rounded-full items-center justify-center text-2xl font-bold text-white mb-6 mx-auto" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                
                {/* Content */}
                <div className={`lg:w-5/12 text-center lg:text-left ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for even distribution */}
                <div className="hidden lg:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
