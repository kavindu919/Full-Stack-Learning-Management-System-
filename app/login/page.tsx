import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#FAF7F2] md:grid-cols-2">
      {/* Left Column (Form Section) */}
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h2 className="text-3xl font-bold md:text-5xl">Welcome Back</h2>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <span className="text-xs font-medium md:text-sm">First Name</span>
          <input
            type="text"
            className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
          />
        </div>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <span className="text-xs font-medium md:text-sm">Password</span>
          <input
            type="password"
            className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
          />
        </div>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <button className="w-full rounded bg-[#FFDC7F] p-3 text-base font-bold shadow-md">
            Log in
          </button>
          <span className="text-center">
            Don't Have an Account? <span className="font-bold">Sign Up</span>
          </span>
        </div>
      </div>

      {/* Right Column (Image Section) */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.jpg"
          alt="Welcome Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Login;
