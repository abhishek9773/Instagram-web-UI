import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const UserPostCard = () => {
  return (
    <div>
      <div className="w-60 h-60">
        <img
          className="cursor-pointer"
          src="https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div>
            <div>
              <AiFillHeart />
              <span>20</span>
            </div>
            <div>
              <FaComment />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
