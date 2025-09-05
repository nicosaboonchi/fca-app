import { Button } from "./button";

export default function ContractsTableClient() {
  return (
    <div className="flex flex-col gap-4">
      {/* quick filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <div className="flex items-end gap-2">
          <div className="relative">
            <input
              placeholder="Search by id or client"
              className="px-8 py-2 border rounded-md text-sm w-56"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">Rows:</label>
            <select className="px-2 py-1 border rounded-md text-sm">
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
            <tr>
              <th colSpan={7} className="px-4 py-2 border-b">
                <div className="flex gap-2">
                  <Button size="sm">All</Button>
                  <Button size="sm">Active</Button>
                  <Button size="sm">Pending</Button>
                  <Button size="sm">Expired</Button>
                </div>
              </th>
            </tr>
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
        </table>
      </div>
    </div>
  );
}
