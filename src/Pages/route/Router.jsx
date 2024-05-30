import React from "react";
import Sidebar from "../../Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ProfileScreen from "../Profile/ProfileScreen";

const Router = () => {
  return (
    <div>
      <div className="flex  ">
        <div className="w-[10%] border-l-slate-800 border-2">
          <Sidebar />
        </div>
        <div className="w-full">
          <div classsName="">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Router;
