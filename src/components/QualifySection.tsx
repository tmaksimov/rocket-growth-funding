
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface QualifyProps {
  openContactForm: () => void;
}

const QualifySection: React.FC<QualifyProps> = ({ openContactForm }) => {
  const requirements = [
    "Revenue from $30K/month",
    "Minimum 6 months of operations",
    "Available receivables in any platform"
  ];
  
  const platforms = [
    { name: "Apple App Store", logo: "apple" },
    { name: "Google Play", logo: "google-play" },
    { name: "Unity Ads", logo: "unity" },
    { name: "Meta", logo: "meta" },
    { name: "AppLovin", logo: "applovin" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Apply?</h2>
            
            <div className="space-y-4 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 mr-3 mt-1 bg-mint-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-mint-600" />
                  </span>
                  <span className="text-lg">{req}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Supported Platforms:</h3>
              <div className="flex flex-wrap gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      {/* Simplified logo placeholders */}
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              onClick={openContactForm}
              className="bg-rocket-600 hover:bg-rocket-700 text-white"
            >
              Check If You Qualify
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <div className="inline-block bg-mint-100 text-mint-700 rounded-full px-4 py-1 text-sm font-medium mb-4">
                RECEIVABLES FUNDING
              </div>
              <h3 className="text-2xl font-bold mb-2">Take control of your cash flow</h3>
              <p className="text-gray-600">
                Get immediate access to your future receivables and reinvest in growth.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Monthly Revenue</div>
                  <div className="text-2xl font-bold">$30K - $1M+</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Advance Rate</div>
                  <div className="text-2xl font-bold">Up to 90%</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Funding Speed</div>
                  <div className="text-2xl font-bold">3-5 Days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Terms</div>
                  <div className="text-2xl font-bold">Flexible</div>
                </div>
              </div>
              
              <Button 
                onClick={openContactForm}
                className="w-full bg-mint-500 hover:bg-mint-600 text-white"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualifySection;
