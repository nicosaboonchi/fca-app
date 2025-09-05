import React from "react";
import { Button } from "@/components/button";

const page = () => {
  return (
    <div className="p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1>Client Home</h1>
          <p>Type: Individual</p>
        </div>
        <div>
          <Button>Edit Client</Button>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Data</span>
        <span>Data</span>
        <span>Data</span>
      </div>
    </div>
  );
};

export default page;
