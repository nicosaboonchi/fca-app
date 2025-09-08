import React from "react";
import ContractsTableClient from "@/components/ContractsTableClient";
import { Button } from "@/components/button";

type Contract = {
  id: string;
  client: string;
  start: string;
  end: string;
  value: number;
};

const contracts: Contract[] = [
  {
    id: "C-001",
    client: "Acme Corp",
    start: "2023-01-01",
    end: "2025-01-01",
    value: 120000,
  },
  {
    id: "C-002",
    client: "Global Industries",
    start: "2022-06-15",
    end: "2024-09-30",
    value: 45000,
  },
  {
    id: "C-003",
    client: "Nico Estates",
    start: "2024-02-01",
    end: "2025-02-01",
    value: 98000,
  },
  {
    id: "C-004",
    client: "Sunrise LLC",
    start: "2024-08-01",
    end: "2025-07-31",
    value: 30000,
  },
];

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Contract Overview</h2>
        </div>
        <div className="flex gap-2">
          <Button variant={"secondary"}>Export</Button>
          <Button>Add Contract</Button>
        </div>
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
      <ContractsTableClient />
    </div>
  );
};

export default Page;
