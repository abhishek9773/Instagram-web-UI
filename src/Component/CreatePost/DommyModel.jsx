import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import LiveVideo from "./LiveVideo";
import Post from "./Post";

const DommyModel = () => {
  const {
    isOpen: isOpenPost,
    onOpen: onOpenPost,
    onClose: onClosePost,
  } = useDisclosure();
  const {
    isOpen: isOpenVideoLive,
    onOpen: onOpenVideoLive,
    onClose: onCloseVideoLive,
  } = useDisclosure();

  const handelOpenPost = () => {
    onOpenPost();
  };
  const handleOpenVideoLive = () => {
    onOpenVideoLive();
  };
  return (
    <div>
      <div
        onClick={handelOpenPost}
        className="hover:bg-gray-300 px-2 py-1 rounded-md cursor-pointer"
      >
        Post
      </div>
      <Post isOpen={isOpenPost} onClose={onClosePost} />
      <div
        onClick={handleOpenVideoLive}
        className="hover:bg-gray-300 px-2 py-1 rounded-md cursor-pointer"
      >
        Live Video
      </div>
      <LiveVideo isOpen={isOpenVideoLive} onClose={onCloseVideoLive} />
    </div>
  );
};

export default DommyModel;
