"use client";
import React, { useState } from "react";
import {
  lectureData,
  studentLinks,
  assignmentData,
} from "../../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../../components/SearchBar";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import Button from "@/app/components/Button";
import { cardData } from "../../../../../assets";
import { Card } from "@/app/components/Card";

const SingleCoursePage = () => {
  const [type, setType] = useState("lectures");

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

      <div className="grid grid-rows-1 md:grid-rows-[auto_1fr] p-4 h-full">
        <div className="flex flex-col gap-4 bg-orange-500">
          <span className=" text-[10px] md:text-sm  opacity-50">
            Dashboard / Student / Course / Introduction_to_Phyton_Programming
          </span>
          <span className=" text-[18px] font-medium">
            Introduction to Phyton Programming
          </span>
          <div className="flex flex-row gap-2 min-h-3 bg-stone-500">
            <button
              id="lectures"
              className={`p-4 text-xs ${
                type === "lectures" ? "bg-[#F5F6FB]" : "bg-[#FFFEFC]"
              }`}
              onClick={() => setType("lectures")}
            >
              Lectures
            </button>
            <button
              id="assignment"
              className={`p-4 text-xs ${
                type === "assignment" ? "bg-[#F5F6FB]" : "bg-[#FFFEFC]"
              }`}
              onClick={() => setType("assignment")}
            >
              Assignments
            </button>
          </div>
        </div>
        <div className="grid grid-rows-[0.25fr_0.5fr_1fr]">
          <div className=" bg-red-500">
            <div className="flex flex-col p-3 gap-1">
              <h3 className=" text-xs md:text-lg">Reference </h3>
              <hr className=" w-full border border-black opacity-50" />
              <p className=" text-[10px] md:text-sm">Book For Reference.pdf</p>
            </div>
          </div>
          <div className=" bg-blue-500 flex flex-col p-3 gap-1">
            <h3 className=" text-xs md:text-lg">Description </h3>
            <hr className=" w-full border border-black opacity-50" />
            <p className=" text-[10px] md:text-sm">
              This course provides a comprehensive overview of artificial
              intelligence (AI), exploring its fundamental concepts, techniques,
              and applications. Students will delve into the history of AI, its
              various subfields (e.g., machine learning, natural language
              processing, robotics), and the ethical implications of AI
              development. Through hands-on projects and case studies, students
              will gain practical experience in building and applying AI models
              to real-world problems.Key Topics: History and Evolution of AI
              Machine Learning Algorithms (e.g., linear regression, decision
              trees, neural networks) Natural Language Processing (NLP) and
              Computer Vision Robotics and Automation Ethical Considerations in
              AI AI Applications in Industry and Society By the end of this
              course, students will have a solid understanding of AI principles,
              be able to critically evaluate AI systems, and possess the skills
              necessary to contribute to the field of artificial intelligence.
            </p>
          </div>
          <div className=" bg-lime-500 grid grid-flow-row p-3 gap-3">
            {type === "lectures"
              ? lectureData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className=" text-xs md:text-lg">{item.lectureNo} </h3>
                    <hr className=" w-full border border-black opacity-50" />
                    <p className=" text-[10px] opacity-50">
                      {item.uploadDateTime}
                    </p>
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className=" w-5 h-5"
                        src="/lecicon.png"
                        alt="lec icon"
                      />
                      <p className=" text-[10px] md:text-sm font-medium">
                        {item.pdfName}
                      </p>
                    </div>
                  </div>
                ))
              : assignmentData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className=" text-xs md:text-lg">
                      {item.assignmentNo}{" "}
                    </h3>
                    <hr className=" w-full border border-black opacity-50" />
                    <p className=" text-[10px] opacity-50">
                      {item.uploadDateTime}
                    </p>
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className=" w-5 h-5"
                        src="/assignmneticon.png"
                        alt="lec icon"
                      />
                      <p className=" text-[10px] md:text-sm font-medium">
                        {item.pdfName}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCoursePage;
