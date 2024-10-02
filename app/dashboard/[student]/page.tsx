"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { useRouter } from "next/navigation";
import { courseList, studentLinks } from "../../../assets";
import Image from "next/image";
import { SearchBar } from "../../components/SearchBar";
import { CourseCard } from "../../components/CourseCard";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Table } from "../../components/Table";
import { columns, data } from "../../../assets";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((state) => state.dashboard);
  const router = useRouter();

  // Check if the role is correct
  useEffect(() => {
    if (role !== "student") router.push("/");
  }, [role, router]);

  const [selected, setSelected] = useState<Date>();

  return (
    <div className="min-h-screen grid grid-rows-[60px_1fr] md:grid-cols-[256px_1fr]">
      {/* Header */}
      <div className="col-span-full row-span-1 bg-white flex flex-col md:flex-row items-center ">
        <div className="grid  grid-cols-[256px_1fr_1fr] mt-2">
          <div className=" w-[141px] h-[32px] md:w-[256px] md:h-[60px]">
            <Image src="/Logo.jpg" alt="Logo" width={256} height={60} />
          </div>
          <div className="flex items-center justify-center pl-6">
            <SearchBar text="" />
          </div>
          <div className="flex items-center justify-end gap-4 pr-3">
            <BellOutlined />
            <UserOutlined />
            <MenuOutlined className="md:hidden" />
          </div>
        </div>
      </div>

      {/* Sidebar (full height on medium screens and larger) */}
      <div className="hidden bg-[#FAF7F2] md:block md:h-full">
        <div className="flex flex-col p-8 h-full gap-[28px]">
          <ul className="text-[12px] font-medium flex flex-col gap-[30px]">
            {studentLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="flex items-center gap-[15px] p-4 rounded hover:bg-[#707FDD]"
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
      <div>
        <div className="bg-[#FFFEFC] p-4">
          <div className="grid grid-rows-1 md:grid-rows-[517px_1fr]">
            <div className="grid grid-rows-1  md:grid-cols-[1fr_2fr]">
              <div className="flex flex-col  p-4 md:flex md:flex-col gap-[15px] md:gap-[24px] md:items-start">
                <h3 className="text-[18px]">Quick Access</h3>
                <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[24px] md:justify-center w-full">
                  <button
                    aria-label="Enroll Course"
                    className="flex cursor-pointer flex-row items-center gap-3 bg-[#FAF7F2] p-[0.5rem] shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#FFDC7F] rounded"
                  >
                    <img
                      src="https://picsum.photos/200"
                      alt="enroll image"
                      className="min-h-[37px] w-[42px] rounded"
                    />
                    <span className="text-[12px] md:text-[14px]">
                      Enroll Course
                    </span>
                  </button>
                  <button
                    aria-label="Announcement"
                    className="flex cursor-pointer flex-row items-center gap-3 bg-[#FAF7F2] p-[0.5rem] shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#FFDC7F] rounded"
                  >
                    <img
                      src="https://picsum.photos/200"
                      alt="announcement image"
                      className="min-h-[37px] w-[42px] rounded"
                    />
                    <span className="text-[12px] md:text-[14px]">
                      Announcement
                    </span>
                  </button>
                </div>
                {/* Calendar */}
                <div className="mt-2 md:flex items-center justify-center hidden">
                  <div className="bg-[#FAF7F2] p-4 rounded w-auto">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                    />
                  </div>
                </div>
              </div>

              {/* Course List */}
              <div className="md:max-h-[517px] overflow-y-auto">
                <div className="flex flex-col gap-3">
                  <span className=" text-[18px] pt-[12px] pl-[12px]">
                    My Course
                  </span>

                  <ul className="flex flex-col gap-[10px] p-4">
                    {courseList.map((item, index) => (
                      <li key={index}>
                        <CourseCard
                          courseImage={item.courseImage}
                          courseName={item.courseName}
                          courseCode={item.courseCode}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2  p-4">
              <span className="text-[18px] pl-1">Assignment Submitting </span>
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
