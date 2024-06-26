import React from "react";
import Post from "../../Component/CreatePost/Post";
import LiveVideo from "../../Component/CreatePost/LiveVideo";
import Audience from "../../Component/CreatePost/Audience/Audience";
import { useDisclosure } from "@chakra-ui/react";

const CreatePost = () => {
  const {
    isOpen: isOpenLiveVideo,
    onOpen: onOpenLiveVideo,
    onClose: onCloseLiveVideo,
  } = useDisclosure();

  const {
    isOpen: isOpenPost,
    onOpen: onOpenPost,
    onClose: onClosePost,
  } = useDisclosure();
  const handleOpenPost = () => {
    onOpenPost();
  };
  const handleOpenLiveVideo = () => {
    onOpenLiveVideo();
  };
  return (
    <div>
      <div>
        <div>
          <p
            onClick={handleOpenPost}
            className="cursor-pointer py-1 px-2 hover:bg-gray-300"
          >
            {" "}
            create post{" "}
          </p>
          <Post isOpen={isOpenPost} onClose={onClosePost} />
        </div>
        <div>
          <p
            onClick={handleOpenLiveVideo}
            className="cursor-pointer py-1 px-2 hover:bg-gray-300"
          >
            {" "}
            create Live video{" "}
          </p>
          <LiveVideo isOpen={isOpenLiveVideo} onClose={onCloseLiveVideo} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
