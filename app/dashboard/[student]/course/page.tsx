"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { useRouter } from "next/navigation";
import { courseList, studentLinks } from "../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../components/SearchBar";
import { CourseCard } from "../../../components/CourseCard";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Table } from "../../../components/Table";
import { columns, data } from "../../../../assets";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import Button from "@/app/components/Button";
import { cardData } from "../../../../assets";
import { Card } from "@/app/components/Card";

const CoursePage = () => {
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
      <div className=" min-h-full">
        <div className="grid grid-rows-1 md:grid-rows-[0.25fr_1fr] p-4 h-full">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] md:text-sm opacity-50">
              Dashboard / Student / Course
            </span>
            <span className=" text-[18px] font-medium">Course Overview</span>
            <div className=" min-w-7">
              <Button
                text="Enroll New Course"
                isLoading={false}
                disabled={false}
                onClick={() => console.log("Work")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-4 justify-center items-center">
            {cardData.map((item, index) => (
              <Card
                courseName={item.courseName}
                courseCode={item.courseCode}
                image={item.image}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
