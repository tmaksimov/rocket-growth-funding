
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-white mr-2" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c0-1.5 2-2.5 2-2.5l1.5-4.5m0 0L6.5 6c-.5-1.5.5-2 1-2s1.5 0 2 2l1 3.5" />
                <path d="M9.5 9.5L11 13c.5 1.5 1.5 2 2.5 0L17 3.5" />
                <path d="M14 15.5c2-1 4 .5 4 2.5v1c0 1-1 2-2 2s-5-1-5-4" />
              </svg>
              <span className="text-xl font-bold text-white">GrowthRocket</span>
            </div>
            <p className="mb-6">
              Fast and flexible funding for app and game developers. 
              Get the capital you need to grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#why-us" className="hover:text-white transition">Why Us</a></li>
              <li><a href="#qualify" className="hover:text-white transition">Calculator</a></li>
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
              <li className="flex items-center">
                
                
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GrowthRocket. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
