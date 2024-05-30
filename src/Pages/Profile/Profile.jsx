import React from "react";
import ProfileUserDetail from "../../Component/ProfileComponent/ProfileUserDetail";
import UserPostShow from "../../Component/ProfileComponent/UserPostShow";

const Profile = () => {
  return (
    <div className="">
      <div className="">
        <ProfileUserDetail />
      </div>
      <div className="px-20">
        <UserPostShow />
      </div>
    </div>
  );
};

export default Profile;
