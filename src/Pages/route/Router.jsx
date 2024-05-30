import React from "react";
import Sidebar from "../../Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ProfileScreen from "../Profile/ProfileScreen";

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border-r-slate-500  border-4">
          <Sidebar />
        </div>
        <div classsName="w-full">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
