
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  whiteText?: boolean;
  hideLine?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  centered = true,
  whiteText = false,
  hideLine = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl mb-3 font-seasons ${whiteText ? 'text-white' : 'text-borgona'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${whiteText ? 'text-white' : 'text-foreground'}`}>{subtitle}</p>
      )}
      {!hideLine && (
        <div className={`w-24 h-1 bg-rosa-claro mt-4 ${centered ? 'mx-auto' : ''}`}></div>
      )}
    </div>
  );
};

export default SectionTitle;
