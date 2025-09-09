"use client";
import React from "react";
import ClientCard from "@/components/clientCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/ui/popover";

type ClientStatus = "Active" | "Pending" | "Inactive";
type ClientType =
  | "Healthcare"
  | "Commercial"
  | "Education"
  | "Government"
  | "Residential"
  | "Industrial";

interface Client {
  id: string;
  name: string;
  type: ClientType;
  status: ClientStatus;
  buildings: number;
  projects: number;
  observations: number;
  lastActivity?: string;
  contactName?: string;
  region?: string;
  isPinned?: boolean;
}

const clients: Client[] = [
  {
    id: "CL-001",
    name: "Mercy Health Systems",
    type: "Healthcare",
    status: "Active",
    buildings: 15,
    projects: 7,
    observations: 124,
    lastActivity: "2025-09-07",
    contactName: "Sarah Johnson",
    region: "Northeast",
  },
  {
    id: "CL-002",
    name: "Acme Corporation",
    type: "Commercial",
    status: "Active",
    buildings: 12,
    projects: 4,
    observations: 89,
    lastActivity: "2025-09-06",
    contactName: "Michael Chen",
    region: "West",
  },
  {
    id: "CL-003",
    name: "State University",
    type: "Education",
    status: "Active",
    buildings: 32,
    projects: 3,
    observations: 245,
    lastActivity: "2025-09-08",
    contactName: "Dr. Robert Smith",
    region: "Midwest",
  },
  {
    id: "CL-004",
    name: "City of Springfield",
    type: "Government",
    status: "Pending",
    buildings: 28,
    projects: 2,
    observations: 167,
    lastActivity: "2025-09-05",
    contactName: "Emily Martinez",
    region: "Southeast",
  },
  {
    id: "CL-005",
    name: "Highland Residences",
    type: "Residential",
    status: "Active",
    buildings: 8,
    projects: 1,
    observations: 45,
    lastActivity: "2025-09-07",
    contactName: "James Wilson",
    region: "Southwest",
  },
  {
    id: "CL-006",
    name: "TechSpace Solutions",
    type: "Commercial",
    status: "Inactive",
    buildings: 3,
    projects: 0,
    observations: 28,
    lastActivity: "2025-08-15",
    contactName: "Lisa Anderson",
    region: "West",
  },
  {
    id: "CL-007",
    name: "Central Manufacturing",
    type: "Industrial",
    status: "Active",
    buildings: 6,
    projects: 2,
    observations: 73,
    lastActivity: "2025-09-08",
    contactName: "David Park",
    region: "Midwest",
  },
  {
    id: "CL-008",
    name: "Children's Hospital",
    type: "Healthcare",
    status: "Active",
    buildings: 4,
    projects: 3,
    observations: 156,
    lastActivity: "2025-09-07",
    contactName: "Maria Garcia",
    region: "Southeast",
  },
  {
    id: "CL-009",
    name: "Federal Agency",
    type: "Government",
    status: "Pending",
    buildings: 1,
    projects: 1,
    observations: 34,
    lastActivity: "2025-09-06",
    contactName: "William Taylor",
    region: "Northeast",
  },
  {
    id: "CL-9000",
    name: "Federal Agency HQ",
    type: "Government",
    status: "Pending",
    buildings: 1,
    projects: 1,
    observations: 34,
    lastActivity: "2025-09-06",
    contactName: "William Taylor",
    region: "Northeast",
  },
  {
    id: "CL-019",
    name: "Federal Agency HQ",
    type: "Government",
    status: "Pending",
    buildings: 1,
    projects: 1,
    observations: 34,
    lastActivity: "2025-09-06",
    contactName: "William Taylor",
    region: "Northeast",
  },
];

const Page = () => {
  const [pinnedClientIds, setPinnedClientIds] = React.useState<string[]>([]);
  const [selectedClients, setSelectedClients] = React.useState<string[]>([]);
  const [viewType, setViewType] = React.useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = React.useState<"name" | "recent" | "status">(
    "name"
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<ClientStatus | "all">(
    "all"
  );
  const [typeFilter, setTypeFilter] = React.useState<ClientType | "all">("all");

  // Toggle pin status for a client
  const togglePinned = (clientId: string) => {
    setPinnedClientIds((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  // Toggle client selection
  const toggleSelectClient = (clientId: string) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  // Sort and filter clients
  const sortedClients = React.useMemo(() => {
    return [...clients]
      .filter((client) => {
        const matchesSearch = client.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesStatus =
          statusFilter === "all" || client.status === statusFilter;
        const matchesType = typeFilter === "all" || client.type === typeFilter;
        return matchesSearch && matchesStatus && matchesType;
      })
      .sort((a, b) => {
        // First, sort by pinned status
        const isPinnedA = pinnedClientIds.includes(a.id);
        const isPinnedB = pinnedClientIds.includes(b.id);
        if (isPinnedA && !isPinnedB) return -1;
        if (!isPinnedA && isPinnedB) return 1;

        // Then, apply selected sort
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "recent":
            return (
              new Date(b.lastActivity || "").getTime() -
              new Date(a.lastActivity || "").getTime()
            );
          case "status":
            return a.status.localeCompare(b.status);
          default:
            return 0;
        }
      });
  }, [pinnedClientIds, sortBy, searchTerm, statusFilter, typeFilter]);

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Input
            className="w-[200px]"
            placeholder="Search Clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={statusFilter}
            onValueChange={(value: any) => setStatusFilter(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={typeFilter}
            onValueChange={(value: any) => setTypeFilter(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Filter Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Residential">Residential</SelectItem>
                <SelectItem value="Industrial">Industrial</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Government">Government</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={sortBy}
            onValueChange={(value: any) => setSortBy(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort</SelectLabel>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="recent">Recent Activity</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          {selectedClients.length > 0 && (
            <Button variant="outline" onClick={() => setSelectedClients([])}>
              Clear Selection ({selectedClients.length})
            </Button>
          )}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default">
                <Plus className="mr-2 h-4 w-4" /> Add Client
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4 p-4">
                <div className="space-y-1">
                  <h4 className="font-medium leading-none">Create Client</h4>
                  <p className="text-sm text-muted-foreground">
                    Please fill in the details below:
                  </p>
                </div>
                <Input placeholder="Client Name" />
                <Input placeholder="Client Type" />
                <Input placeholder="Client Status" />
                <Button>Create Client</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Client Grid */}
      <div
        className={
          viewType === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            : "flex flex-col gap-4"
        }
      >
        {sortedClients.map((client) => (
          <ClientCard
            key={client.id}
            name={client.name}
            type={client.type}
            status={client.status}
            buildings={client.buildings}
            projects={client.projects}
            observations={client.observations}
            isPinned={pinnedClientIds.includes(client.id)}
            onTogglePin={() => togglePinned(client.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
