import React from "react";
import ClientCard from "@/components/clientCard";
import ClientCardSm from "@/components/clientCardSm";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>Quick Clients</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <ClientCardSm name="Client Name" type="Client Type" />
        <ClientCardSm name="Client Name" type="Client Type" />
        <ClientCardSm name="Client Name" type="Client Type" />
        <ClientCardSm name="Client Name" type="Client Type" />
        <ClientCardSm name="Client Name" type="Client Type" />
      </div>
      <div>All Clients</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ClientCard
          name="Client Name"
          type="Client Type"
          status="Status"
          buildings={99}
          projects={5}
          observations={2}
        />
        <ClientCard
          name="Client Name"
          type="Client Type"
          status="Status"
          buildings={99}
          projects={5}
          observations={2}
        />
        <ClientCard
          name="Client Name"
          type="Client Type"
          status="Status"
          buildings={99}
          projects={5}
          observations={2}
        />
      </div>
    </div>
  );
};

export default page;
