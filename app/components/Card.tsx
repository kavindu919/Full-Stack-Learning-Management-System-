import Image from "next/image";
import React from "react";
interface CardProps {
  courseCode: string;
  courseName: string;
  image: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  courseCode,
  courseName,
  image,
  onClick,
}) => {
  return (
    <div
      className="max-w-72  h-[150px] md:h-[200px] overflow-hidden rounded-lg bg-[#FAF7F2] shadow-md transition-transform hover:scale-105 "
      onClick={onClick}
    >
      <a href="">
        <div className="grid grid-rows-[0.5fr_1fr]">
          <div className="flex h-auto flex-col p-5">
            <h3 className=" text-[12px] md:text-[16px] font-medium truncate">
              {courseName}
            </h3>
            <p className=" text-[10px] md:text-[12px] text-gray-600">
              {courseCode}
            </p>
          </div>
          {/* <img
            className="w-full object-cover"
            src="https://picsum.photos/300/150"
            alt="Abstract Algebra Course Image"
          /> */}
          <div className="relative w-full pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={image}
              alt={`${courseName} Course Image`}
            />
          </div>
        </div>
      </a>
    </div>
  );
};
