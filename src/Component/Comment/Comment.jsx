import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const Comment = ({
  onClose,
  isOpen,
  isPostLike,
  isSave,
  handlePostLike,
  handleSavePost,
}) => {
  return (
    <div>
      {/*creating comment model */}

      <Modal size={"5xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="h-[80vh] flex  gap-3   ">
              <div className="w-[50%] flex flex-col justify-center  ">
                <img
                  className="max-h-full w-full  "
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="w-[50%] relative ">
                <div className="flex items-center justify-between m-2 border-b py-2 ">
                  <div className="flex gap-3 items-center ">
                    <div>
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-semibold hover:opacity-50 cursor-pointer">
                        abhsihek9773
                      </p>
                    </div>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <div className="h-[60vh] overflow-y-scroll ">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                    <CommentCard />
                  ))}
                </div>
                {/* need to strict with down */}
                <div className="absolute bottom-0 w-full bg-white">
                  <div className="">
                    <div className="flex justify-between items-center w-full px-2 py-2 ">
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
                        <FaRegComment className="text-2xl hover:opacity-50 cursor-pointer " />
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
                  </div>
                  <div className="flex flex-col gap-1 px-3">
                    <p className="font-semibold">1,000 likes</p>
                    <p className="text-sm opacity-50">10 hour ago</p>
                  </div>
                  <div className=" px-4 py-1">
                    <div className="flex jusitfy-between items-center ">
                      <input
                        type="text"
                        placeholder="Add a comment.."
                        className=" border-none outline-none w-full"
                      />
                      <BsEmojiSmile className="cursor-pointer hover:opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Comment;
