
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  whiteText?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  centered = true,
  whiteText = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl mb-3 font-seasons ${whiteText ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${whiteText ? 'text-white' : 'text-gray-600'}`}>{subtitle}</p>
      )}
      <div className={`w-24 h-1 bg-rosa-claro mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
