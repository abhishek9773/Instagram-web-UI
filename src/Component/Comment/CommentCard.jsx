import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const CommentCard = () => {
  const [isLike, setIsPostLike] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleLike = () => {
    setIsPostLike(!isLike);
  };
  return (
    <div
      className="m-2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>
        <div className="flex gap-3 items-center">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className=" w-full flex justify-between items-center">
              <div>
                <p>
                  <span className=" font-semibold hover:opacity-50">
                    abhishek9773
                  </span>{" "}
                  great share
                </p>
              </div>
              <div className="cursor-pointer">
                {isLike ? (
                  <AiFillHeart className="text-red-500" onClick={handleLike} />
                ) : (
                  <AiOutlineHeart onClick={handleLike} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3  px-10 items-center  ">
            <p className="text-gray-500 text-sm cursor-pointer hover:opacity-50">
              10 h
            </p>
            <p className="text-gray-500 text-sm cursor-pointer hover:opacity-50">
              2 likes
            </p>
            <p className="text-gray-500 text-sm cursor-pointer hover:opacity-50">
              Reply
            </p>
            {isHover && (
              <BsThreeDots className="cursor-pointer hover:placeholder-opacity-50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
