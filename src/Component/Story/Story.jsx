import React from "react";

const Story = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img
        className="h-[68px] w-[68px] rounded-full"
        src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p className="text-xs">Username</p>
    </div>
  );
};

export default Story;
