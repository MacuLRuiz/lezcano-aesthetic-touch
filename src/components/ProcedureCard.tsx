
import React from "react";
import { NavLink } from "react-router-dom";

interface ProcedureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({
  title,
  description,
  icon,
  link = "/procedimientos"
}) => {
  return (
    <div className="procedure-card group">
      <div className="flex flex-col h-full">
        {icon && (
          <div className="mb-4 text-borgona">{icon}</div>
        )}
        <h3 className="text-xl font-seasons mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <NavLink 
          to={link} 
          className="btn-secondary mt-auto inline-block text-center"
        >
          Consultar
        </NavLink>
      </div>
    </div>
  );
};

export default ProcedureCard;
