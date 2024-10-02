"use client";
import { courseList, studentLinks } from "../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../components/SearchBar";
import "react-day-picker/style.css";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

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

      <div className="bg-[#FFFEFC] p-4"></div>
    </div>
  );
};

export default UserGrade;
