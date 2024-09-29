import React from "react";
import { SearchOutlined } from "@ant-design/icons";
interface SearchBarProps {
  text: string;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="relative flex items-center min-w-[100px] md:w-max-[625px]">
      <span className="absolute right-4">
        <SearchOutlined />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="pl-5 h-[32px] w-full md:w-[625px] bg-[#F6F6FB] rounded-md focus:outline-none text-[12px]"
      />
    </div>
  );
};
