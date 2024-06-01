import React from "react";
import Story from "../../Component/Story/Story";
import HomeRight from "../../Component/HomeRight/HomeRight";
import PostCard from "../../Component/Post/PostCard";

const HomePage = () => {
  return (
    <div className="flex mt-6  w-[100%] justify-center ">
      <div className="w-[65%] px-10">
        <div className="flex space-x-3   rounded-md justify-around w-full overflow-y-scroll">
          {[1, 1, 1, 1, 1, 1, , 1, 1, 1].map((item) => (
            <Story />
          ))}
        </div>{" "}
        <div className="space-y-5 w-[80%] ml-20  mt-8 ">
          {" "}
          {[1, 1, 1].map((item) => (
            <PostCard />
          ))}
        </div>
      </div>
      <div className=" w-[25%] ">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomePage;
