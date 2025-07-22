"use client";

import React from "react";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";
import Image from "next/image";

const RegisterPage = () => {
  useEffect(() => {
    // Fetch user data or perform any necessary setup
  }, []);

  useEffect(() => {
    // send analytics data or perform cleanup
  }, []);

  // Other effects

  return (
    <div className="bg-gray-100 w-full max-w-sm md:max-w-3xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
      <RegisterForm />
      <div className="hidden w-full md:block relative">
        <Image
          src="/teamPhoto.png"
          alt="team photo"
          fill
          className="absolute inset-0 object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
