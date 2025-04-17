
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, CheckCircle, Headphones, Shield, PercentCircle } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color: string;
}) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${color}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full p-3 bg-white bg-opacity-30">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const WhyUsSection = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast Funding",
      description: "Get funded in days, not months. Quick decisions when you need them most.",
      color: "bg-gradient-to-br from-rocket-50 to-rocket-100",
    },
    {
      icon: CheckCircle,
      title: "Easy to Start",
      description: "Simple onboarding with essential documentation you can quickly provide.",
      color: "bg-gradient-to-br from-mint-50 to-mint-100",
    },
    {
      icon: Headphones,
      title: "24/7 Hands-on Support",
      description: "Beyond funding, our team provides expert insights in marketing and financial strategy.",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "We do not use your data for anything other than funding decisions, unlike other competitors.",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      icon: PercentCircle,
      title: "Flexible Terms",
      description: "Transparent pricing without surprises and unbeatable terms that fit your business.",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GrowthRocket?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built a funding platform specifically for app and game developers who need speed, support, and freedom to grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
