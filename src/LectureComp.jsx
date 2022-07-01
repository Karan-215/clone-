import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { BiLinkExternal } from 'react-icons/bi';
function LectureComp(props) {
  return (
    <>
      <div className=" shadow-lg rounded-md  ">
        <div className=" w-max pl-8 px-4">
          <div className="flex space-x-5">
          <h1 className="font-semibold">Lecture #65 </h1>
          <span className="font-semibold text-gray-500"> (fri Jun 24 2022)</span>
          </div>
          <h4 className=" text-gray-500">Duration 03:11:04</h4>
          <ul className="list-disc py-4 pl-12">
            <li className="font-semibold">Refactoring to normalized data storage</li>
            <li className="font-semibold">Refactoring to sub reducers</li>
            <li className="font-semibold">Refactoring to createSelector</li>
            <li className="font-semibold">Added ShowDetail screen.</li>
          </ul>
          </div>
          <div className="">
          <a href="#" className="text-gray-600 mt-4 flex items-center justify-center"> <BiLinkExternal/> Watch/Downloading Recording</a>
          </div>
        </div>
        
        
      
    </>
  );
}

export default LectureComp;
