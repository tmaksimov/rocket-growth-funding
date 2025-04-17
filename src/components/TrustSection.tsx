
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      quote: "GrowthRocket helped us close our funding gap and scale our user acquisition faster than we thought possible.",
      author: "Jane Smith",
      company: "JetSHR",
      url: "https://jetshr.com/",
    },
    {
      quote: "Their funding model perfectly aligned with our app's revenue cycles. No more waiting months for store payouts.",
      author: "Michael Johnson",
      company: "Twinby",
      url: "https://twinby.com/",
    },
    {
      quote: "Working with GrowthRocket felt like having a financial partner rather than just a funding source.",
      author: "Sarah Williams",
      company: "Dwelly Group",
      url: "https://dwelly.group",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block animate-pulse bg-rocket-600 text-white rounded-full px-8 py-3 text-lg font-semibold mb-6">
              The team behind this platform has funded over £50M across 100+ deals
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Trusted by Founders</h2>
            
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              {["JetSHR", "Twinby", "Dwelly Group", "Many Gaming Apps"].map((logo, index) => (
                <div key={index} className="bg-gray-100 px-6 py-3 rounded-lg">
                  <span className="font-semibold text-gray-800">{logo}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-none hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-rocket-400 mb-4" />
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <a href={testimonial.url} target="_blank" rel="noopener noreferrer" className="text-rocket-600 text-sm hover:underline">
                        {testimonial.company}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
