
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  // Helper to smoothly scroll to the calculator section
  const handleCalculatorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById("qualify");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/be1a9660-07dd-4f94-83a6-4d6eab0cb9d1.png"
                alt="GrowthRocket Logo"
                className="w-8 h-8 object-contain mr-2"
                style={{ minWidth: 32 }}
              />
              <span
                className="text-xl font-bold"
                style={{
                  background: "linear-gradient(90deg, #2496F8 30%, #2074D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                GrowthRocket
              </span>
            </div>
            <p className="mb-6">
              Fast and flexible funding for app and game developers. 
              Get the capital you need to grow your business.
            </p>
            <div className="flex space-x-4">
              {/* Add social links if needed, left blank for now except for LinkedIn */}
              <a href="#" className="text-gray-400 hover:text-white"></a>
              <a href="#" className="text-gray-400 hover:text-white"></a>
              <a href="#" className="text-gray-400 hover:text-white"></a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#why-us" className="hover:text-white transition">Why Us</a></li>
              <li>
                {/* Fix Calculator link to proper scroll */}
                <a href="#qualify" className="hover:text-white transition" onClick={handleCalculatorClick}>
                  Calculator
                </a>
              </li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@growthrocket.com" className="hover:text-white transition">
                  info@growthrocket.com
                </a>
              </li>
              <li className="flex items-center"></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GrowthRocket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
