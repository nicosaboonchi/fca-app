import React from "react";

const Page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome back, Nico!
        </h2>
        <p className="text-gray-600 mt-2">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">
            Active Contracts
          </h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">567</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Buildings</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">89</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Reports</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">23</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
