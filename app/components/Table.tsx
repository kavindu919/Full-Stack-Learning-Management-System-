import React from "react";

interface TableProps {
  columns: string[];
  data: Array<{ [key: string]: any }>;
}
const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-white text-left text-[14px] font-medium">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-2 py-4 text-left text-xs md:text-sm font-medium"
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
                  className="px-2 py-4 text-left text-xs md:text-sm font-normal"
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
