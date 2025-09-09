import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Contract Overview</h2>
        </div>
        <div className="flex gap-2"></div>
      </div>

      {/* Top widgets + action */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Total contracts</div>
            <div className="text-2xl font-bold">9</div>
          </div>
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Active</div>
            <div className="text-2xl font-bold">5</div>
          </div>
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Expiring (90d)</div>
            <div className="text-2xl font-bold">1</div>
          </div>
        </div>
      </div>

      {/* Client-side interactive table with quick filters */}
    </div>
  );
};

export default Page;
