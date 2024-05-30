import React from "react";
import Sidebar from "../../Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const Router = () => {
  return (
    <div>
      <div>
        <div className="w-20% border-l-slate-500 pl-10">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;