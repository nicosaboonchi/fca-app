import React from "react";
import Link from "next/link";
import ContractsTableClient from "@/components/ContractsTableClient";

type Contract = {
  id: string;
  client: string;
  start: string;
  end: string;
  status: "Active" | "Expired" | "Pending";
  value: number;
};

const contracts: Contract[] = [
  {
    id: "C-001",
    client: "Acme Corp",
    start: "2023-01-01",
    end: "2025-01-01",
    status: "Active",
    value: 120000,
  },
  {
    id: "C-002",
    client: "Global Industries",
    start: "2022-06-15",
    end: "2024-09-30",
    status: "Expired",
    value: 45000,
  },
  {
    id: "C-003",
    client: "Nico Estates",
    start: "2024-02-01",
    end: "2025-02-01",
    status: "Active",
    value: 98000,
  },
  {
    id: "C-004",
    client: "Sunrise LLC",
    start: "2024-08-01",
    end: "2025-07-31",
    status: "Pending",
    value: 30000,
  },
];

const Page = () => {
  const total = contracts.length;
  const active = contracts.filter((c) => c.status === "Active").length;
  const expiring = contracts.filter((c) => {
    const end = new Date(c.end);
    const now = new Date();
    const diffDays = (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays <= 90 && diffDays >= 0;
  }).length;

  return (
    <div className="flex flex-col gap-6">
      {/* Top widgets + action */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Total contracts</div>
            <div className="text-2xl font-bold">{total}</div>
          </div>
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Active</div>
            <div className="text-2xl font-bold">{active}</div>
          </div>
          <div className="bg-white border p-4 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">Expiring (90d)</div>
            <div className="text-2xl font-bold">{expiring}</div>
          </div>
        </div>

        <div className="md:ml-4">
          <Link
            href="/(group)/contracts/new"
            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm"
          >
            New Contract
          </Link>
        </div>
      </div>

      {/* Client-side interactive table with quick filters */}
      <ContractsTableClient contracts={contracts} />
    </div>
  );
};

export default Page;
