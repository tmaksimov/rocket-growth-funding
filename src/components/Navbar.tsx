
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ openContactForm }: { openContactForm: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
           <img src="/GRlogo.png" alt="GrowthRocket Logo" className="h-8 w-auto" />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#why-us" className="text-gray-700 hover:text-rocket-600 transition">Why Us</a>
          <a href="#calculator" className="text-gray-700 hover:text-rocket-600 transition">Calculator</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-rocket-600 transition">How It Works</a>
          <a href="#faq" className="text-gray-700 hover:text-rocket-600 transition">FAQ</a>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            onClick={openContactForm}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Get Funded
          </Button>
        </div>
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#why-us" 
              className="text-gray-700 hover:text-rocket-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#calculator" 
              className="text-gray-700 hover:text-rocket-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-rocket-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-rocket-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              onClick={() => {
                openContactForm();
                setIsMenuOpen(false);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full"
            >
              Get Funded
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

