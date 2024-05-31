import React from "react";

const PostDropDown = () => {
  return (
    <div className="absolute border bg-gray-500/60  ">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
        <div className="w-[200px] text-center border-slate-200 border-b-2 hover:bg-gray-300 cursor-pointer py-2 ">
          <p>Delete</p>
        </div>
      ))}
    </div>
  );
};

export default PostDropDown;
