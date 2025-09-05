import React from "react";

const ClientCardSm = ({ name, type }: { name: string; type: string }) => {
  return (
    <div className="flex justify-center border border-black py-3 px-4 rounded-xl">
      <div className="flex gap-3">
        <div className="bg-gray-300 rounded-full w-12 h-12 flex-shrink-0" />
        <div className="flex flex-col justify-center">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-gray-500">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCardSm;
