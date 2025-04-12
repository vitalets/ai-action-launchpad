
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className || ''}`}>
      {/* Robot head */}
      <div className="w-28 h-28 bg-white rounded-xl border-4 border-primary relative shadow-lg">
        {/* Eyes */}
        <div className="absolute top-6 left-5 w-5 h-5 bg-primary rounded-full"></div>
        <div className="absolute top-6 right-5 w-5 h-5 bg-primary rounded-full"></div>
        
        {/* Smile */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-5 border-b-4 border-primary rounded-full"></div>
        
        {/* Antenna */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-8 bg-primary rounded-full">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
        </div>
        
        {/* Ears */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-12 bg-primary/80 rounded-l-lg"></div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-12 bg-primary/80 rounded-r-lg"></div>
      </div>
    </div>
  );
};

export default Logo;
