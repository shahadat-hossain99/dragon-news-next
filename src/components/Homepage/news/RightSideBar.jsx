import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RightSideBar = () => {
  return (
    <div className="space-y-9">
      <div className="space-y-5 px-2">
        <h2 className="font-bold text-xl">LogIn With</h2>
        <div className="flex flex-col gap-3">
          <button className="btn btn-outline border-blue-500 text-blue-500">
            <FcGoogle />
            LogIn with Google
          </button>
          <button className="btn  btn-outline">
            <FaGithub />
            LogIn With GitHub
          </button>
        </div>
      </div>

      <div className="space-y-5 px-2">
        <h2 className="font-bold text-xl">Find Us On</h2>
        <div className="flex flex-col ">
          <button className="btn btn-outline  p-3">
            <FcGoogle /> Google
          </button>
          <button className="btn  btn-outline  p-3">
            <FaFacebook /> Facebook
          </button>
          <button className="btn  btn-outline  w-full p-3">
            <FaLinkedin /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
