import React from "react";

interface ButtonProps {
  text: string;
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`flex items-center rounded-md bg-[#FFDC7F] px-[10px] py-[10px] text-[16px] font-semibold text-black
        hover:bg-yellow-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300
        sm:text-[14px]`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin text-white sm:h-5 sm:w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
      {text}
    </button>
  );
};
export default Button;
