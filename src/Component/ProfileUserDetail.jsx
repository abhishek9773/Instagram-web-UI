import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const ProfileUserDetail = () => {
  return (
    <div className="m-2 px-20 py-10 border">
      <div className="flex gap-10  ">
        <div className="p-10">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex  gap-20">
            <p> userName</p>
            <p>editProfile</p>
            <AiOutlineSetting className="text-2xl cursor-pointer" />
          </div>
          <div className="flex gap-10">
            <p>
              10 <spen>posts</spen>
            </p>
            <p>
              35 <spen>followers</spen>
            </p>
            <p>
              196 <spen>followring</spen>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
