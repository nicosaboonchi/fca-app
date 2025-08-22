import React from "react";
import { Button } from "@/components/button";
import { Building2, FileText, Eye } from "lucide-react";

const ClientCard = ({
  name,
  type,
  status,
  buildings,
  projects,
  observations,
}: {
  name: string;
  type: string;
  status: string;
  buildings: number;
  projects: number;
  observations: number;
}) => {
  return (
    <div className="flex flex-col border-1 border-black py-2 px-4 rounded-xl gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="bg-gray-300 rounded-full w-12 h-12" />
          <div className="flex flex-col">
            <span>{name}</span>
            <span>{type}</span>
          </div>
        </div>
        <div className="px-0.5 py-1.5 bg-green-300 rounded-md text-xs font-bold">
          {status}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="items-center flex flex-col">
          <span>Buildings</span>
          <Building2 />
          <span>{buildings}</span>
        </div>
        <div className="items-center flex flex-col">
          <span>Projects</span>
          <FileText />
          <span>{projects}</span>
        </div>
        <div className="items-center flex flex-col">
          <span>Observations</span>
          <Eye />
          <span>{observations}</span>
        </div>
      </div>
      <Button>Click Me</Button>
    </div>
  );
};

export default ClientCard;
