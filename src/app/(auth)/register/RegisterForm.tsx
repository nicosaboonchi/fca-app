import { Button } from "@/components/button";
import { Input } from "@/components/input";
import React from "react";

const RegisterForm = () => {
  function handleSubmit() {
    // Handle form submission
  }

  function validateInput() {
    // Validate user input
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex px-8 py-4 w-full rounded-xl justify-center items-center"
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p>Create a new account.</p>
        </div>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Sign Up</Button>
        <span className="text-sm">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Log in.
          </a>
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
