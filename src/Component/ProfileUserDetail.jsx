import React from "react";
import { IoIosSettings } from "react-icons/io";

const ProfileUserDetail = () => {
  return (
    <div className="py-10 border w-full ">
      <div className="flex items-center ">
        <div className="w-[25%] ">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="">
          <div className=" flex space-x-10 items-center ">
            <p> username</p>
            <p>Edit Profile</p>
            <IoIosSettings className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
