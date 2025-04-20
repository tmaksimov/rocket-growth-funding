import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Verified } from "lucide-react";

interface Testimonial {
  quote: string;
  company: string;
  url: string;
  name: string; // Add the missing name property
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white border border-gray-200 shadow-sm transform transition-all duration-300 hover:shadow-md">
    <CardContent className="p-6">
      <div className="text-gray-700 mb-4">
        "{testimonial.quote}"
      </div>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={`https://unavatar.io/github/${testimonial.url}`} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center space-x-1">
            <div className="font-medium text-gray-800">{testimonial.name}</div>
            <Verified className="h-4 w-4 text-blue-500" />
          </div>
          <a href={testimonial.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
            {testimonial.company}
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TrustSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "We needed more funds for user acquisition and CAPEX. GrowthRocket structured a solution that kept our growth dynamiс without sacrificing equity",
      company: "JET Sharing",
      url: "https://jetshr.com/",
      name: "Alex"
    },
    {
      quote: "GrowthRocket help and offer really the most favorable rates and conditions, anticipating wishes..",
      company: "Twinby",
      url: "https://twinby.com",
      name: "Nika"
    },
    {
      quote: "The process was incredibly fast and straightforward. GrowthRocket provided the capital we needed to launch our new feature.",
      company: "Pixel Push",
      url: "https://pixelpush.com/pixelpush",
      name: "Andrew"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading App Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See why top app developers trust GrowthRocket to fuel their growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
