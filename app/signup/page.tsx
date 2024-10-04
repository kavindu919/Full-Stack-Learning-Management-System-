import React from "react";

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#FAF7F2] p-2">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-center gap-16">
        <h1 className="text-3xl font-medium md:text-5xl">Create an Account</h1>
      </div>

      {/* Form Section */}
      <form className="grid w-full max-w-3xl grid-cols-1 rounded-md bg-[#FFFEFC] p-3 shadow-md md:grid-cols-2">
        <div className="flex flex-col gap-2 p-4">
          {/* First Name */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-xs font-medium md:text-sm">First Name</span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* birthdy */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Birthday</span>
            <input
              type="date"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* address */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Address</span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* email */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Email</span>
            <input
              type="email"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* password */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Password</span>
            <input
              type="password"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {/* lastname */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Last Name</span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* Gender */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Gender</span>
            <select
              name="gender"
              id="gender"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* Province */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">Province</span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* Contact no */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">
              Contact Number
            </span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
          {/* Confirm password */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-sm font-medium md:text-sm">
              Confrim Password
            </span>
            <input
              type="text"
              className="w-full rounded border-2 border-gray-300 p-2 focus:border-black focus:outline-none"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-2">
        <button className="gap-1 rounded bg-[#FFDC7F] p-3 text-base font-bold shadow-md">
          Sign in
        </button>
        <span>
          Already Have an Account ? <span className="font-bold">Log In</span>
        </span>
      </div>
    </div>
  );
};

export default Signup;
