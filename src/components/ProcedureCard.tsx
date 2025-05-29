
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
        <AspectRatio ratio={4/5} className="bg-gris-claro">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gris-claro to-gray-200 flex items-center justify-center">
              <div className="text-center">
                {icon && <div className="text-borgona text-4xl mb-2">{icon}</div>}
                <div className="text-gray-400 text-sm font-medium">Imagen próximamente</div>
              </div>
            </div>
          )}
        </AspectRatio>
      </div>
      <CardContent className="flex-grow p-4 flex flex-col">
        <h3 className="text-lg font-seasons mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
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
