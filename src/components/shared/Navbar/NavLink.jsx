"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === href ? "text-pink-700 font-semibold" : "text-gray-700"
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
