"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

type Contract = {
  id: string;
  client: string;
  start: string;
  end: string;
  status: "Active" | "Expired" | "Pending";
  value: number;
};

export default function ContractsTableClient({
  contracts,
}: {
  contracts: Contract[];
}) {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showExpiringOnly, setShowExpiringOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filtered = useMemo(() => {
    const now = new Date();
    return contracts.filter((c) => {
      if (statusFilter && c.status !== statusFilter) return false;
      if (showExpiringOnly) {
        const end = new Date(c.end);
        const diffDays =
          (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        if (!(diffDays <= 30 && diffDays >= 0)) return false;
      }
      if (search.trim()) {
        const s = search.toLowerCase();
        if (
          !(
            `${c.id}`.toLowerCase().includes(s) ||
            c.client.toLowerCase().includes(s)
          )
        )
          return false;
      }
      return true;
    });
  }, [contracts, statusFilter, search, showExpiringOnly]);

  const clearFilters = () => {
    setStatusFilter(null);
    setShowExpiringOnly(false);
    setSearch("");
  };

  // pagination
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIdx = (page - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  // reset page when filters change
  React.useEffect(() => {
    setPage(1);
  }, [statusFilter, search, showExpiringOnly, pageSize]);

  return (
    <div className="flex flex-col gap-4">
      {/* quick filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setStatusFilter(null)}
            className={`px-3 py-1 rounded ${
              statusFilter === null
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("Active")}
            className={`px-3 py-1 rounded ${
              statusFilter === "Active"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("Pending")}
            className={`px-3 py-1 rounded ${
              statusFilter === "Pending"
                ? "bg-yellow-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatusFilter("Expired")}
            className={`px-3 py-1 rounded ${
              statusFilter === "Expired"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Expired
          </button>
          <button
            onClick={() => setShowExpiringOnly((s) => !s)}
            className={`px-3 py-1 rounded ${
              showExpiringOnly
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Expiring (30d)
          </button>
          <button
            onClick={clearFilters}
            className="px-3 py-1 rounded bg-transparent text-sm text-gray-500"
          >
            Clear
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by id or client"
              className="px-8 py-2 border rounded-md text-sm w-56"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">Rows:</label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="px-2 py-1 border rounded-md text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto bg-white border rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr className="bg-gray-200 border-b-1">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Client
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Start
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                End
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Value
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {pageItems.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">{c.id}</td>
                <td className="px-4 py-3 text-sm truncate max-w-[180px]">
                  {c.client}
                </td>
                <td className="px-4 py-3 text-sm">{c.start}</td>
                <td className="px-4 py-3 text-sm">{c.end}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : c.status === "Expired"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  ${c.value.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-3">
                    <Link
                      href={`/(group)/contracts/${c.id}`}
                      className="text-blue-600 text-sm"
                    >
                      View
                    </Link>
                    <Link
                      href={`/(group)/contracts/${c.id}/edit`}
                      className="text-gray-600 text-sm"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-sm text-gray-500"
                >
                  No contracts match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination controls */}
      <div className="flex items-center justify-between py-3">
        <div className="text-sm text-gray-600">
          Showing {Math.min(startIdx + 1, totalItems)}-
          {Math.min(startIdx + pageItems.length, totalItems)} of {totalItems}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded border bg-white disabled:opacity-50"
          >
            Prev
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-2 py-1 rounded ${
                  page === i + 1
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded border bg-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
