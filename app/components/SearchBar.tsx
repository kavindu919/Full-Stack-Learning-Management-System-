import React from "react";
interface SearchBarProps {
  text: string;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="relative flex items-center">
      <span className="absolute right-4">
        <img src="/searchbar.png" alt="Search Icon" className="h-4 w-4" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="pl-5 h-[32px] w-[625px] flex bg-[#F6F6FB] rounded-md focus:outline-none"
      />
    </div>
  );
};
