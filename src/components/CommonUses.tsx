
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Handshake, TrendingUp, BookOpen, Globe, FileText, DollarSign, Percent } from "lucide-react";

const UseCard = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
  <Card className="bg-white border border-gray-200 shadow-sm transform transition-all duration-300 hover:shadow-md">
    <CardContent className="p-6 flex items-center space-x-4">
      <div className="rounded-full p-2 bg-rocket-50">
        <Icon className="h-6 w-6 text-rocket-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </CardContent>
  </Card>
);

const CommonUses = () => {
  const uses = [
    { icon: Users, title: "Customer acquisition" },
    { icon: Handshake, title: "Hiring team members" },
    { icon: TrendingUp, title: "Support cash flow" },
    { icon: BookOpen, title: "Brand awareness" },
    { icon: Globe, title: "Market expansion" },
    { icon: FileText, title: "Product development" },
    { icon: DollarSign, title: "Top-up funding round" },
    { icon: Percent, title: "Strategic bets" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Uses for GrowthRocket
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            App developers use GrowthRocket for financing in lieu of and alongside other funding to supercharge growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uses.map((use, index) => (
            <UseCard key={index} {...use} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonUses;
