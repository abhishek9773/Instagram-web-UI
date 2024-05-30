import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from "./SidebarConfig";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-[100vh] ">
      <div className="flex flex-col justify-between h-full">
        <div className="pt-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnAOJAP_bqaJDxvMz8epaUuVNdleRuMTLQg&s"
            alt=""
            className="w-40"
          />
        </div>
        <div>
          <div className="mt-10">
            {mainu.map((item) => (
              <div className="flex items-center mb-5 cursor-pointer text-lg">
                {item.icon}

                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline />
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
