
import React from "react";
import { NavLink } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProcedureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  imageSrc?: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({
  title,
  description,
  icon,
  link = "/procedimientos",
  imageSrc
}) => {
  return (
    <Card className="procedure-card group border-gris-neutro hover:shadow-md transition-all h-full flex flex-col">
      <div className="overflow-hidden">
        <AspectRatio ratio={3/4} className="bg-gris-claro">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gris-claro flex items-center justify-center">
              {icon && <div className="text-borgona text-4xl">{icon}</div>}
            </div>
          )}
        </AspectRatio>
      </div>
      <CardContent className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-seasons mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <NavLink 
          to={link} 
          className="btn-secondary w-full text-center"
        >
          Consultar
        </NavLink>
      </CardFooter>
    </Card>
  );
};

export default ProcedureCard;
