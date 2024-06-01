import React from "react";

const HomeRight = () => {
  return (
    <div>
      <div className="pl-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 p-3">
            <div>
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold text-sm ">abhishek9773i</p>
              <p className="opacity-50">Abhishek kumar</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-blue-600 text-sm">Switch</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center w-full pl-3 ">
            <p className="font-bold opacity-60 text-sm">Suggested for you</p>
            <p className="hover:opacity-50 cursor-pointer font-bold text-sm">
              See All
            </p>
          </div>
        </div>
        {[1, 1, 1, 1, 1].map((item) => (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 px-3 py-2">
              <div>
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold text-sm ">abhishek9773i</p>
                <p className="opacity-50">Abhishek kumar</p>
              </div>
            </div>
            <div>
              <p className="font-semibold hover:opacity-80 cursor-pointer text-blue-600 text-sm">
                Follow
              </p>
            </div>
          </div>
        ))}
        <div>
          <div className="text-xs">
            <ul className="flex gap-3 pl-5 pb-1">
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                About
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Help
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Press
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                API
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Jobs
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Privacy
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Teams
              </li>
            </ul>
            <ul className="flex gap-3 pl-5 pt-1">
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Locations
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Language
              </li>
              <li className="hover:opacity-50 cursor-pointer hover:underline">
                Meta Verified
              </li>
            </ul>
            <p className="text-xs px-5 py-2 opacity-50">
              © 2024 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
