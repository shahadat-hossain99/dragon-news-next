import BreakingNews from "@/components/shared/BreakingNews/BreakingNews";
import Header from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
