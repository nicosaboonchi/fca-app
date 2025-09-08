"use client";

import { Building2, FileText, Eye, type LucideIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

type ClientCardProps = {
  name: string;
  type: string;
  status: "Active" | "Pending" | "On Hold" | "Archived" | (string & {});
  buildings: number;
  projects: number;
  observations: number;
  onClick?: () => void;
};

export function ClientCard({
  name,
  type,
  status,
  buildings,
  projects,
  observations,
  onClick,
}: ClientCardProps) {
  return (
    <Card className="rounded-xl w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-muted" />
          <div className="leading-tight">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription className="text-xs">{type}</CardDescription>
          </div>
        </div>
        <Badge className={statusClass(status)}>{status}</Badge>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-3 text-center">
          <Stat label="Buildings" icon={Building2} value={buildings} />
          <Stat label="Projects" icon={FileText} value={projects} />
          <Stat label="Observations" icon={Eye} value={observations} />
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={onClick}>
          Click Me
        </Button>
      </CardFooter>
    </Card>
  );
}

function Stat({
  label,
  icon: Icon,
  value,
}: {
  label: string;
  icon: LucideIcon;
  value: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <Icon className="size-5" aria-hidden />
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function statusClass(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    case "Pending":
      return "bg-amber-100 text-amber-700 hover:bg-amber-100";
    case "On Hold":
      return "bg-sky-100 text-sky-700 hover:bg-sky-100";
    case "Archived":
      return "bg-zinc-200 text-zinc-700 hover:bg-zinc-200";
    default:
      return "";
  }
}

export default ClientCard;