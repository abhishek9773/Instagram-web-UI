import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import Post from "./CreatePost/Post";
import PostOrLiveVideo from "./CreatePost/PostOrLiveVideo";
import Search from "./Search/Search";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisiable, SetIsSearchVisiable] = useState(false);
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/profile");
    } else if (title === "Home" || title === "Instagram") {
      navigate("/");
    } else if (title === "Explore") {
      navigate("/explore");
    } else if (title === "Reels") {
      navigate("/reels");
    } else if (title === "Message") {
      navigate("/message");
    } else if (title === "Notification") {
      navigate("/notification");
    } else if (title === "PostCreate") {
      // setIsOpen(!isOpen);
      navigate("/post");
    }
    if (title === "Search") {
      SetIsSearchVisiable(true);
    } else {
      SetIsSearchVisiable(false);
    }
  };
  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div className="flex flex-col justify-between h-full pt-6 px-10">
        <div>
          <div
            onClick={() => handleTabClick("Instagram")}
            className="flex items-center mb-5 cursor-pointer text-lg"
          >
            {activeTab === "Instagram" ? (
              <AiFillInstagram className="text-3xl p-3px" />
            ) : (
              <AiOutlineInstagram className="text-3xl p-3px" />
            )}
          </div>
        </div>
        <div>
          <div className="pb-6">
            {mainu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex  items-center  cursor-pointer py-5"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}

                {/* <p
                    className={`${
                      activeTab === item.title ? "font-bold" : "font-smbold"
                    }`}
                  >
                    {item.title}
                  </p> */}
              </div>
            ))}
          </div>
          <PostOrLiveVideo isOpen={isOpen} />
        </div>
      </div>
      {isSearchVisiable && <Search />}
    </div>
  );
};

export default Sidebar;
