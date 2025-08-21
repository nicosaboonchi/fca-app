import React from "react";

const ClientCardSm = ({ name, type }: { name: string; type: string }) => {
  return (
    <div className="flex justify-between items-center border-1 border-black py-2 px-4 rounded-xl">
      <div className="flex gap-2">
        <div className="bg-gray-300 rounded-full w-12 h-12" />
        <div className="flex flex-col">
          <span>{name}</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCardSm;
