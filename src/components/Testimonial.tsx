
import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  featured?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author,
  featured = false 
}) => {
  return (
    <div className={`
      ${featured 
        ? 'bg-white shadow-md p-8' 
        : 'bg-gris-claro p-6'
      } 
      rounded-md relative
    `}>
      <div className="text-4xl text-borgona opacity-20 absolute top-4 left-4">"</div>
      <p className={`
        ${featured 
          ? 'text-xl italic font-seasons text-borgona' 
          : 'text-lg italic'
        }
        mb-4 relative z-10
      `}>
        "{quote}"
      </p>
      <p className="font-medium text-right">— {author}</p>
    </div>
  );
};

export default Testimonial;
