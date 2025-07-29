import { Button } from "@/components/button";
import { Input } from "@/components/input";
import React from "react";

const LoginForm = () => {
  // function handleSubmit() {
  //   Handle form submission
  // }

  // function validateInput() {
  //   Validate user input
  // }

  return (
    <form
      onSubmit={() => {}}
      className="flex px-8 py-4 w-full rounded-xl justify-center items-center"
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold">LOGIN</h1>
          <p>Login with your Kitchell account.</p>
        </div>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
        <span className="text-sm">
          Forgot your password?{" "}
          <a href="#" className="text-blue-500">
            Reset it.
          </a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
