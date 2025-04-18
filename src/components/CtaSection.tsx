
import React from "react";
import { Button } from "@/components/ui/button";

interface CtaProps {
  openContactForm: () => void;
}

const CtaSection: React.FC<CtaProps> = ({ openContactForm }) => {
  return (
    <div className="py-20 bg-gradient-to-r from-rocket-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Supercharge Your Growth?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get the capital you need to scale your app or game with flexible, non-dilutive funding.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={openContactForm}
            className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 px-8 py-6 text-lg rounded-full"
            size="lg"
          >
            Apply Now
          </Button>
          
          <Button
            onClick={openContactForm}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-lg rounded-full border-2"
            size="lg"
          >
            Speak with Our Team
          </Button>
        </div>
        
        <p className="mt-8 text-sm opacity-80">
          No impact on your credit score. No commitment.
        </p>
      </div>
    </div>
  );
};

export default CtaSection;
