import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between mt-6">
      <div></div>
      <ul className="flex items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About </NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      <div className="flex justify-between items-center gap-2.5">
        <Image src={userAvatar} width={40} height={40} alt="Users image" />
        <Link href={"/login"}>
          <button className="btn bg-pink-700 text-white">LogIn</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
