"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { useRouter } from "next/navigation";
import { courseList, studentLinks } from "../../assets";
import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { CourseCard } from "./CourseCard";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((state) => state.dashboard);
  const router = useRouter();
  //chek the role is correct
  useEffect(() => {
    if (role !== "student") router.push("/");
  }, [role, router]);

  return (
    <div className="grid h-screen grid-rows-[60px_1fr] md:grid-cols-[256px_1fr]">
      {/* Header */}
      <div className="col-span-full row-span-1 bg-white flex items-center">
        <div className=" pl-0">
          <Image
            src="/Logo.jpg"
            alt="Logo"
            width={256}
            height={64}
            className=""
          />
        </div>
        <div className=" ml-auto">
          <SearchBar text="" />
        </div>
        <div className=" flex justify-center gap-[24px] pl-[550px]">
          <Image
            src="/bell.png"
            alt="Logo"
            width={34}
            height={34}
            className=""
          />
          <Image
            src="/profile.png"
            alt="Logo"
            width={34}
            height={34}
            className=""
          />
        </div>
      </div>
      {/* Sidebar (full height on medium screens and larger) */}
      <div className="hidden bg-[#FAF7F2] md:block md:h-full">
        <div className="flex flex-col p-8 h-full gap-[28px]">
          <ul className="text-[12px] font-medium flex flex-col gap-[30px]">
            {studentLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="flex items-center gap-[15px] p-4 rounded  hover:bg-[#707FDD]"
                  href={item.url}
                >
                  <Image
                    src={item.image}
                    alt="sidebar"
                    width={20}
                    height={20}
                  />
                  <span className="text-[15px] font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="bg-white">
        <div className="bg-[#FFFEFC]">
          <div className="ml-[24px] mt-[24px] grid h-screen grid-rows-1 border-2 border-black md:grid-rows-[517px_1fr]">
            <div className="grid grid-rows-1 bg-red-400 md:grid-cols-[2fr_1fr]">
              <div className="border-2 border-black">
                {courseList.map((item, index) => (
                  <ul>
                    <li key={index}>
                      <CourseCard
                        courseImage={item.courseImage}
                        courseName={item.courseName}
                        courseCode={item.courseCode}
                      />
                    </li>
                  </ul>
                ))}
              </div>
              <div>hh</div>
            </div>
            <div className="bg-lime-400">kk</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
