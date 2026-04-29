"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === href
          ? "text-red-600 font-semibold border-b-2 border-b-red-500"
          : "text-gray-700"
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
