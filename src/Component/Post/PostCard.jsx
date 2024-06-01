import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import PostDropDown from "../Dropdown/PostDropDown";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import Comment from "../Comment/Comment";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLike, setIsPostLike] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenComment = () => {
    onOpen();
  };

  const handleSavePost = () => {
    setIsSave(!isSave);
  };

  const handlePostLike = () => {
    setIsPostLike(!isPostLike);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <div className=" border-t">
        <div className="flex justify-between px-10 py-5">
          {/*User profile */}
          <div className="flex gap-3 items-center">
            <img
              className="w-12 h-12 rounded-full "
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm ">username</p>
              <p className="font-thin text-sm "> Rohini, Delhi, Bihar</p>
            </div>
          </div>
          <div>
            <BsThreeDots onClick={handleClick} />
            <div className="relative">{showDropDown && <PostDropDown />}</div>
          </div>
        </div>
        <div onClick={handleOpenComment} className=" cursor-pointer w-full">
          <img
            className=" object-cover"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-2">
          <div className="flex items-center space-x-6">
            {isPostLike ? (
              <AiFillHeart
                className="text-3xl  cursor-pointer text-red-600 "
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-3xl hover:opacity-50 cursor-pointer "
                onClick={handlePostLike}
              />
            )}
            <FaRegComment
              onClick={handleOpenComment}
              className="text-2xl hover:opacity-50 cursor-pointer "
            />
            <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer " />
          </div>
          <div className="">
            {isSave ? (
              <BsBookmarkFill
                className="text-xl hover:opacity-50 cursor-pointer "
                onClick={handleSavePost}
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer "
              />
            )}
          </div>
        </div>
        <div className="w-full py-1 px-5">
          <p className="font-bold">201 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">
            {" "}
            view all 100 comments
          </p>
        </div>
        <div className=" px-5 py-1">
          <div className="flex  items-center ">
            <input
              type="text"
              placeholder="Add a comment.."
              className="border-none outline-none w-full"
            />
            <BsEmojiSmile className="cursor-pointer hover:opacity-50" />
          </div>
        </div>
      </div>
      <Comment
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLike={isPostLike}
        isSave={isSave}
      />
    </div>
  );
};
export default PostCard;
