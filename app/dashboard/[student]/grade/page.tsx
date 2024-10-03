"use client";
import {
  gradebookAssignmentsColumns,
  gradebookAssignmentsData,
  studentLinks,
} from "../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../components/SearchBar";
import "react-day-picker/style.css";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Table } from "@/app/components/Table";
import BarChart from "@/app/components/BarChart";

const UserGrade = () => {
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

      {/* <div className="grid grid-rows-[auto_1fr] bg-[#FFFEFC] p-4">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] md:text-sm opacity-50">
            Dashboard / Student / Grade_Book
          </span>
          <h3 className=" text-sm md:text-lg font-medium">
            Assignment Gradebook
          </h3>
          <div className="flex items-start">
            <select
              name="course"
              id="course"
              className="pl-3 pr-8 py-2 border border-black"
            >
              <option value="Select Course">Select Course</option>
              <option value="">Course 1</option>
              <option value="">Course 2</option>
              <option value="">Course 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3 w-full">
          <Table
            columns={gradebookAssignmentsColumns}
            data={gradebookAssignmentsData}
          />

          <div className="flex flex-col gap-2 p-4 w-full">
            <h3 className=" text-sm md:text-lg font-medium">
              Overall Grade Distribution
            </h3>
            <span className="text-[10px] md:text-sm opacity-50">
              Grades form 08 / 16 to 09/18
            </span>
            <BarChart />
          </div>
        </div>
      </div>
    </div> */}
      <div className="grid grid-rows-[auto_1fr] bg-[#FFFEFC] p-4">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] md:text-sm opacity-50">
            Dashboard / Student / Grade_Book
          </span>
          <h3 className="text-sm md:text-lg font-medium">
            Assignment Gradebook
          </h3>
          <div className="flex items-start">
            <select
              name="course"
              id="course"
              className="pl-3 pr-8 py-2 border border-black"
            >
              <option value="Select Course">Select Course</option>
              <option value="">Course 1</option>
              <option value="">Course 2</option>
              <option value="">Course 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3 min-w-[320px]">
          {/* Responsive Table Container */}
          <div className="overflow-x-auto w-full">
            <Table
              columns={gradebookAssignmentsColumns}
              data={gradebookAssignmentsData}
            />
          </div>
          {/* Responsive Bar Chart Container */}
          <div className="flex flex-col gap-2 p-4 w-full">
            <h3 className="text-sm md:text-lg font-medium">
              Overall Grade Distribution
            </h3>
            <span className="text-[10px] md:text-sm opacity-50">
              Grades from 08 / 16 to 09/18
            </span>
            <div className=" overflow-x-auto w-full">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGrade;
