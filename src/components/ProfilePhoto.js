import React from "react";
import profile from "../profile.jpeg";
function ProfilePhoto() {
  return (
    <>
      <img className="w-[250px] rounded-full m-auto" src={profile} alt="" />
    </>
  );
}

export default ProfilePhoto;
