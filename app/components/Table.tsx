import React from "react";
interface TableProps {
  columns: string[];
  data: Array<{ [key: string]: any }>;
}
export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-separate border-spacing-x-1">
        <thead className="bg-white text-left text-[14px] font-medium">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-2 py-4 text-left text-xs md:text-sm font-medium  border border-[#FFFEFC]"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#F8F8F8] text-xs md:text-sm font-normal">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-2 py-4 text-left text-xs md:text-sm font-normal  border border-[#FFFEFC]"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
