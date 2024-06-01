import React from "react";
import Story from "../../Component/Story/Story";
import HomeRight from "../../Component/HomeRight/HomeRight";
import PostCard from "../../Component/Post/PostCard";

const HomePage = () => {
  return (
    <div className="flex mt-10 w-[100%] justify-center ">
      <div className="w-[65%] px-10">
        <div className="flex space-x-3  border p-4 rounded-md jusitfy-start w-full">
          {[1, 1, 1, 1].map((item) => (
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
      <div className="border w-[20%] ">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomePage;
