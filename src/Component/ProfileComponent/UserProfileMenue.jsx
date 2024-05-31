import React, { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import UserPostCard from "./UserPostCard";

const UserProfileMenue = () => {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: "POSTS",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "REELS",
      icon: <RiVideoAddLine />,
      activeTab: "",
    },
    {
      tab: "SAVED",
      icon: <BiBookmark />,
      activeTab: "",
    },
    {
      tab: "TAGGED",
      icon: <AiOutlineUser />,
      activeTab: "",
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 items-center justify-center border-t relative ">
        {tabs.map((item) => (
          <div
            className={`${
              activeTab === item.tab
                ? "border-t border-black opacity-90 border-20 font-bold "
                : "opacity-60"
            }, flex flex-row items-center cursor-pointer py-2  text-sm`}
            onClick={() => setActiveTab(item.tab)}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap ">
          {[1, 1, 1, 1, 1].map((item) => (
            <UserPostCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenue;
