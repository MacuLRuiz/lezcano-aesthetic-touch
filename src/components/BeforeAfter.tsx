
import React from "react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="aspect-square bg-gris-claro rounded overflow-hidden">
            <img 
              src={beforeImage} 
              alt={`Antes - ${title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-sm mt-2 font-medium">Antes</p>
        </div>
        <div>
          <div className="aspect-square bg-gris-claro rounded overflow-hidden">
            <img 
              src={afterImage} 
              alt={`Después - ${title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-sm mt-2 font-medium">Después</p>
        </div>
      </div>
      <h3 className="text-lg text-borgona text-center mt-4">{title}</h3>
    </div>
  );
};

export default BeforeAfter;
