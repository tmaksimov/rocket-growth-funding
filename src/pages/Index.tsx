
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import FundingCalculator from "@/components/FundingCalculator";
import QualifySection from "@/components/QualifySection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar openContactForm={openContactForm} />
      
      <main>
        <HeroSection 
          openContactForm={openContactForm} 
          scrollToCalculator={scrollToCalculator} 
        />
        
        <section id="why-us">
          <WhyUsSection />
        </section>
        
        <section id="calculator" ref={calculatorRef} className="py-12">
          <FundingCalculator openContactForm={openContactForm} />
        </section>
        
        <section id="qualify">
          <QualifySection openContactForm={openContactForm} />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="trust">
          <TrustSection />
        </section>
        
        <section id="faq">
          <FaqSection />
        </section>
        
        <section id="cta">
          <CtaSection openContactForm={openContactForm} />
        </section>
      </main>
      
      <Footer />
      
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Index;
