
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/b377b433-16a0-4b0e-bd37-5957a4004bfa.png" 
        alt="GrowthRocket Logo" 
        className="h-8 text-blue-600"
      />
    </div>
  );
};

export default Logo;
