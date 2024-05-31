import React from "react";
import ProfileUserDetail from "../../Component/ProfileComponent/ProfileUserDetail";
import UserProfileMenue from "../../Component/ProfileComponent/UserProfileMenue";

const Profile = () => {
  return (
    <div className="">
      <div className="">
        <ProfileUserDetail />
      </div>
      <div className="px-20">
        <UserProfileMenue />
      </div>
    </div>
  );
};

export default Profile;
