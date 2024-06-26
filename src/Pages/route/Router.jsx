import React from "react";
import Sidebar from "../../Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import DommyModel from "../../Component/CreatePost/DommyModel";
import Story from "../Story/Story";
import Search from "../../Component/Search/Search";

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
              <Route path="/search" element={<Search />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/post" element={<DommyModel />}></Route>
              <Route path="/story" element={<Story />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Router;
