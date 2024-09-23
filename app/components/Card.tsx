import Image from "next/image";
import React from "react";
interface CardProps {
  courseCode: string;
  courseName: string;
  image: string;
  isLoading: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  courseCode,
  courseName,
  image,
  isLoading = false,
  onClick,
}) => {
  return (
    <div className="h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg border-2 border-gray-100 shadow-lg transition-transform hover:scale-105">
      <div className="h-[90px] bg-[#FAF7F2] p-3">
        <div className="flex flex-col space-y-[1px]">
          <h5 className="text-[18px] font-semibold ">{courseCode}</h5>
          <span className="text-[14px] text-gray-600">{courseName}</span>
        </div>
      </div>
      <div className="flex h-[190px] items-center justify-center bg-[#FAF7F2]">
        <Image className="h-full w-full object-cover" src={image} alt="image" />
      </div>
    </div>
  );
};
