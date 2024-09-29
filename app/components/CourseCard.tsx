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
    <div className="flex items-center bg-[#FAF7F2] p-2 min-h-[40px] sm:min-h-[60px] w-full max-w-full rounded-[10px]">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={courseImage}
          alt="Course Image"
          className="w-[32px] h-[30px] sm:w-[42px] sm:h-[37px] object-cover rounded-[5px]"
        />
      </div>

      {/* Course Info */}
      <div className="flex-grow px-3 pl-[10px] sm:pl-[20px] md:pl-[27px]">
        <p className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold">
          {courseName}
        </p>
        <p className="text-[8px] sm:text-[10px] md:text-[12px]">{courseCode}</p>
      </div>

      {/* View Button */}
      <div className="hidden pr-[12px] sm:pr-[24px] md:flex">
        <button className="bg-[#FFDC7F] px-3 py-1 text-[8px] sm:text-[10px] md:text-[12px] font-bold rounded">
          View Course
        </button>
      </div>
    </div>
  );
};
