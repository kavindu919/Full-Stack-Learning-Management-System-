import React from "react";
interface CourseCardProps {
  courseImage: string;
  courseName: string;
  courseCode: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  courseImage,
  courseName,
  courseCode,
}) => {
  return (
    <div className="flex h-[40px] w-[313px] items-center bg-[#FAF7F2] p-2 sm:h-[60px] sm:w-[625px] md:h-[60px] md:w-[750px] rounded-[10px]">
      {/* // Image */}
      <div className="h-[30px] w-[32px] flex-shrink-0 md:w-[42px] md:h-[37px] lg:w-[42px] lg:h-[37px]">
        <img
          src={courseImage}
          alt="Course Image"
          className="h-full w-full object-cover rounded-[5px]"
        />
      </div>
      {/* // Course Info */}
      <div className="flex-grow px-3 pl-[20px] md:pl-[27px]">
        <p className="text-[10px] font-semibold md:text-[14px] lg:text-[14px]">
          {courseName}
        </p>
        <p className="text-[8px] md:text-[10px] lg:text-[10px]">{courseCode}</p>
      </div>
      {/* // View Button */}
      <div className="hidden pr-[24px] md:flex">
        <button className="rounded bg-[#FFDC7F] px-3 py-1 text-[9px] font-bold text-black">
          View Course
        </button>
      </div>
    </div>
  );
};
