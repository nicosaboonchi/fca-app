import { Button } from "@/components/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the FCA App</h1>
      <p>This is the home page of your Next.js application.</p>
      <Button>
        Click Me
        <ChevronRight size={18} />
      </Button>
      <Button variant="secondary">Click Me</Button>
      <Button variant="outline">Click Me</Button>
      <Button variant="ghost">Click Me</Button>

      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email:</label>
        <Input id="email" type="email" />
      </div>
    </div>
  );
}
