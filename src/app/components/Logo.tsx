import React from 'react';

const logoImage = "figma:asset/888171123e959a179e3fae6cc719b4b280686d00.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Investors Hub" 
        className="h-10 w-auto"
      />
    </div>
  );
}
