"use client";

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { setRole } from "../../lib/slice/dashboardSlice";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((state) => state.dashboard);

  const handleRoleChange = (newRole: "student" | "instructor" | "admin") => {
    dispatch(setRole(newRole));
  };

  return (
    <div className="grid h-screen grid-rows-[60px_1fr] md:grid-cols-[256px_1fr]">
      {/* Header */}
      <div className="col-span-full row-span-1 bg-white">
        Header (60px height)
      </div>
      {/* Sidebar (full height on medium screens and larger) */}
      <div className="hidden bg-[#FAF7F2] md:block md:h-full">
        <div className="flex flex-col p-8 h-full gap-[28px]">
          <ul className="text-[12px] font-medium flex flex-col gap-[30px]">
            <li>
              <a
                className="flex items-center gap-[15px] p-4 rounded  hover:bg-[#707FDD]"
                href="#"
              >
                <img
                  className="h-[15px] w-[15px]"
                  src="./assets/menu.png"
                  alt=""
                />
                <span className="text-[15px] font-medium">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="bg-white">Main Content</div>
    </div>
  );
};

export default UserDashboard;
