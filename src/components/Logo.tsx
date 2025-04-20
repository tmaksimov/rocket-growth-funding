
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/7e45bec6-8e1f-4d19-b656-023140c9f950.png" 
        alt="GrowthRocket Logo" 
        className="h-8"
      />
    </div>
  );
};

export default Logo;
