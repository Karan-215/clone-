import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MainLayout(props) {
  return (
    
    <div className="flex   ">
      <div className="">
      <SideBar></SideBar>
      </div>
      
      <div className=" p-2   ml-64 w-full  ">
        <Outlet></Outlet>
      </div>
    </div>
    
  );
}

export default MainLayout;
