import React from "react";
import { Outlet, useParams } from "react-router-dom";
import MainLayout from "./MainLayout";
import SideBar from "./SideBar";
import { BiLinkExternal ,BiCheckCircle} from 'react-icons/bi';


function AssignmentDetails(props) {
  // const data = useParams();
  return (
    <>
    
    <div className=" shadow-lg rounded-md   ">
      
        <div className="  pl-8 px-4 flex items-center justify-between">
          <div>
          <div className="flex space-x-5">
          <h1 className="font-semibold">#{props.no} {props.title} </h1>
          <span className="font-semibold text-gray-500"> (fri Jun 24 2022)</span>
          </div>
          <div className="flex flex-col">
          <p className="text-red-600 ">
            Due date {props.DueDate}
            </p>
            <p className="text-red-600 font-thin">
            (submission counted as late submission)
            </p>
            </div>
            </div>
            <div>
              <p  className="font-semibold test-xl text-red-500">Not Submited</p>
            </div>
          
          
          
          </div>
          <div className="hover:bg-gray-800  rounded-b-md">
          <a href="#" className="hover:text-green-800 text-xl font-medium flex items-center justify-center py-4 space-x-4 text-green-500 "><span> <BiCheckCircle/> </span><span>submit</span></a>
          </div>
        </div>
        </>

    
// Assignment details bahai{data.assignmentnumber}
     
  );
}

export default AssignmentDetails;
