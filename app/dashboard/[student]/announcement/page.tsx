"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { useRouter } from "next/navigation";
import { studentLinks } from "../../../../assets";
import Image from "next/image";
import { SearchBar } from "../../../components/SearchBar";

import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((state) => state.dashboard);
  const router = useRouter();

  // Check if the role is correct
  useEffect(() => {
    if (role !== "student") router.push("/");
  }, [role, router]);

  const [selected, setSelected] = useState<Date>();

  return (
    <div className="min-h-screen grid grid-rows-[60px_1fr] md:grid-cols-[256px_1fr]">
      {/* Header */}
      <div className="col-span-full row-span-1 bg-white flex flex-col md:flex-row items-center ">
        <div className="grid  grid-cols-[256px_1fr_1fr] mt-2">
          <div className=" w-[141px] h-[32px] md:w-[256px] md:h-[60px]">
            <Image src="/Logo.jpg" alt="Logo" width={256} height={60} />
          </div>
          <div className="flex items-center justify-center pl-6">
            <SearchBar text="" />
          </div>
          <div className="flex items-center justify-end gap-4 pr-3">
            <BellOutlined />
            <UserOutlined />
            <MenuOutlined className="md:hidden" />
          </div>
        </div>
      </div>

      {/* Sidebar (full height on medium screens and larger) */}
      <div className="hidden bg-[#FAF7F2] md:block md:h-full">
        <div className="flex flex-col p-8 h-full gap-[28px]">
          <ul className="text-[12px] font-medium flex flex-col gap-[30px]">
            {studentLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="flex items-center gap-[15px] p-4 rounded hover:bg-[#707FDD]"
                  href={item.url}
                >
                  <Image
                    src={item.image}
                    alt="sidebar"
                    width={20}
                    height={20}
                  />
                  <span className="text-[15px] font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="gird grid-rows-[auto_1fr] bg-[#FFFEFC] p-4">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] md:text-sm opacity-50">
            Dashboard / Student/ Announcement
          </span>
          <h3 className="text-sm md:text-lg font-medium">Announcement</h3>
        </div>
        <div className="grid grid-flow-row">
          <div className="grid grid-cols-[auto_1fr] gap-4 p-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] md:text-xs">Sep 01</span>
                <span className="text-[10px] md:text-xs">11:54 PM</span>
              </div>
              <hr className="mt-2 h-20 w-0.5 border-none bg-[#a3a7aa]" />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <span className="text-sm font-semibold md:text-base">
                Topic of the Announcement
              </span>
              <span className="text-[10px] leading-relaxed md:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus ornare arcu at tempor. Ut risus ligula, aliquet non
                iaculis vel, semper vel odio. Fusce interdum justo vel ipsum
                condimentum sollicitudin. Nam pulvinar in neque sit amet
                venenatis.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-4 p-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] md:text-xs">Sep 01</span>
                <span className="text-[10px] md:text-xs">11:54 PM</span>
              </div>
              <hr className="mt-2 h-20 w-0.5 border-none bg-[#a3a7aa]" />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <span className="text-sm font-semibold md:text-base">
                Topic of the Announcement
              </span>
              <span className="text-[10px] leading-relaxed md:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus ornare arcu at tempor. Ut risus ligula, aliquet non
                iaculis vel, semper vel odio. Fusce interdum justo vel ipsum
                condimentum sollicitudin. Nam pulvinar in neque sit amet
                venenatis.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
