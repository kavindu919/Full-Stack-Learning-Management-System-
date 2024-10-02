"use client";

import { studentLinks } from "../../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../../components/SearchBar";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import Button from "@/app/components/Button";

const UserAssignment = () => {
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
      <div className="grid grid-rows-[0.3fr_1fr_1fr] bg-[#FFFEFC]">
        {/* top section */}
        <div className=" p-4 flex flex-col gap-8">
          <span className="text-[10px] md:text-xs opacity-50">
            Dashboard / Student / Course / Assignment 01 / Submisson
          </span>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row">
              <span className="text-[10px] md:text-xs opacity-50">
                Uploaded:
              </span>
              <span className="text-[10px] md:text-xs font-medium ">
                2024/09/05 15.46
              </span>
            </div>
            <div className="flex flex-row">
              <span className="text-[10px] md:text-xs opacity-50">
                Uploaded:
              </span>
              <span className="text-[10px] md:text-xs font-medium ">
                2024/09/05 15.46
              </span>
            </div>
          </div>
        </div>
        {/* submisson details */}
        <div className=" p-4 flex flex-col gap-3">
          <h4 className=" text-xs md:text-lg font-medium">Instruction</h4>
          <span className=" text-[10px] md:text-sm">
            To submit your assignment, ensure your file is named correctly, then
            log in to the LMS platform, navigate to the course's assignment
            section, and click Submit Assignment. Upload your file, confirm the
            details, and click Submit. Make sure to double-check that your
            submission is successful before the deadline.
          </span>
          <span className="text-[10px] md:text-xs opacity-50">
            Assignment Submission
          </span>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <span className="text-[10px] md:text-xs opacity-50">
                File Support:
              </span>
              <span className="text-[10px] md:text-xs font-medium ">
                Any standard image,Document, Presentation, Sheet, PDF, or Text
                File allowed
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-[10px] md:text-xs opacity-50">
                Total File Size:
              </span>
              <span className="text-[10px] md:text-xs font-medium ">
                Max 10 MB
              </span>
            </div>
          </div>
          <h4 className=" text-xs md:text-lg font-medium">Add Files </h4>
          <hr className=" border border-black opacity-30" />

          <h1>Make file adding mechnisum</h1>
          <div className=" min-w-5">
            <Button
              text="Upload"
              isLoading={false}
              disabled={false}
              onClick={() => console.log("Click Me")}
            />
          </div>
        </div>
        <div className=" flex flex-col p-4">
          <h4 className=" text-xs md:text-lg font-medium">Submission Status</h4>

          <div className="flex items-center">
            <table className="table-auto border-separate border-spacing-2">
              <tbody>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    File Submitted :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    Submitted Time :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    Submission Status :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    Submission Status :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    Grading Status :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
                <tr>
                  <th className="p-2 pr-4 text-[10px] md:text-base font-normal text-left">
                    Feedback :
                  </th>
                  <td className="w-96 min-w-9 bg-[#D9D9D9] p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAssignment;
