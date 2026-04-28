import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default layout;
