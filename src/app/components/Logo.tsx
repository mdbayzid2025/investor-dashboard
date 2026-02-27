import React from 'react';

const logoImage = "/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Investors Hub" 
        className=" w-30"
      />
    </div>
  );
}
