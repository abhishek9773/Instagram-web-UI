import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/profile");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Search") {
      navigate("/search");
    } else if (title === "Explore") {
      navigate("/explore");
    } else if (title === "Reels") {
      navigate("/reels");
    } else if (title === "Message") {
      navigate("/message");
    } else if (title === "Notification") {
      navigate("/notification");
    } else if (title === "Post") {
      navigate("/post");
    }
  };
  return (
    <div className="sticky top-0 h-[100vh] ">
      <div className="flex flex-col justify-between h-full px-10">
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
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}

                <p
                  className={`${
                    activeTab === item.title ? "font-bold" : "font-smbold"
                  }`}
                >
                  {item.title}
                </p>
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
