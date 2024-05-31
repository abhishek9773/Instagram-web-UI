import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const UserPostCard = () => {
  return (
    <div className="relative w-60 h-60 overflow-hidden m-0.5">
      <img
        className="block w-full h-full cursor-pointer"
        src="https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out flex items-center justify-center ">
        <div className="text-white  text-center flex justify-between w-1/2">
          <div className="flex items-center ">
            <AiFillHeart />
            <span className="ml-1">20</span>
          </div>
          <div className="flex items-center ">
            <FaComment />
            <span className="ml-1">10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
