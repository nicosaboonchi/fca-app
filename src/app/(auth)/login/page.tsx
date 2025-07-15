"use client";

import React from "react";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import Image from "next/image";

const LoginPage = () => {
  useEffect(() => {
    // Fetch user data or perform any necessary setup
  }, []);

  useEffect(() => {
    // send analytics data or perform cleanup
  }, []);

  // Other effects

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center p-6">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
