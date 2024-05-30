import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const ProfileUserDetail = () => {
  return (
    <div className="m-2 px-20 py-6  ">
      <div className="flex gap-10 items-center  ">
        <div className="p-10">
          <img
            className="w-36 h-36 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex  gap-10">
            <p> @userName</p>
            <button className="py-1 px-2 bg-slate-500/40 rounded-xl hover:bg-slate-500/70">
              Edit Profile
            </button>
            <AiOutlineSetting className="text-2xl cursor-pointer" />
          </div>
          <div className="flex gap-10">
            <div>
              <span className="font-bold">10</span> <span>posts</span>
            </div>
            <div>
              <span className="font-bold">35</span> <span>followers</span>
            </div>
            <div>
              <span className="font-bold">196</span> <span>followring</span>
            </div>
          </div>
          <div>
            <span className="font-bold">Abhishek kumar</span>
            <p>
              Software Engineer
              <br />
              🎯 Helping Startup & Business to grow in Tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
