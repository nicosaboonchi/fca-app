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

const page = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="Commercial">Commercial</SelectItem>
              <SelectItem value="Residential">Residential</SelectItem>
              <SelectItem value="Industrial">Industrial</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Government">Government</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            name={client.name}
            type={client.type}
            status={client.status}
            buildings={client.buildings}
            projects={client.projects}
            observations={client.observations}
            onClick={() => console.log(`${client.name} clicked`)}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
