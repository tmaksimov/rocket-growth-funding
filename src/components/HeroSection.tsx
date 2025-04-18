import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  openContactForm: () => void;
  scrollToCalculator: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ openContactForm, scrollToCalculator }) => {
  return (
    <div className="pt-32 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 opacity-60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-100 opacity-60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-100 opacity-60 rounded-full blur-3xl"></div>
        
        {/* Code/numbers background elements */}
        <div className="hidden md:block absolute top-1/4 left-16 text-gray-200 text-opacity-20 text-lg">
          {`{ revenue: 120000, growth: 32%, users: 50000 }`}
        </div>
        <div className="hidden md:block absolute top-2/3 right-16 text-gray-200 text-opacity-20 text-lg">
          {`[ 128, 256, 394, 498, 603, 750 ]`}
        </div>
        <div className="hidden md:block absolute bottom-16 left-1/3 text-gray-200 text-opacity-20 text-lg">
          {`funding = receivables * 0.9 - fee`}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-700">
            Fast and Flexible Funding for Your App or Game
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Get capital in days—not months. Built for developers who need speed, support, and freedom to grow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={openContactForm}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Get Funded
            </Button>
            
            <Button
              onClick={scrollToCalculator}
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              Try Our Calculator
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { value: "100+", label: "Funded Companies" },
              { value: "$50M+", label: "Total Funding" },
              { value: "3-5 Days", label: "Funding Speed" },
              { value: "90%", label: "Max Advance Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-rocket-700 mb-2">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
