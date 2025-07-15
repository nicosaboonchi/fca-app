import { Button } from "@/components/button";
import { Input } from "@/components/input";
import React from "react";

const LoginForm = () => {
  function handleSubmit() {
    // Handle form submission
  }

  function validateInput() {
    // Validate user input
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border w-full rounded-xl max-w-sm md:max-w-md"
    >
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">LOGIN</h1>
          <p>Login with your Kitchell account.</p>
        </div>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
