import React from "react";
import AssignmentDetails from "./AssignmentDetails";

function Assignment() {
  return (
    <div className="  py-6 px-20 w-full  ">
     <h1 className="text-2xl font-bold">assignment  list</h1>
     <div className=" shadow-lg  space-y-6 px-52 pb-10">

     <AssignmentDetails></AssignmentDetails>
     <AssignmentDetails></AssignmentDetails>
     <AssignmentDetails></AssignmentDetails>
     <AssignmentDetails></AssignmentDetails>
     <AssignmentDetails></AssignmentDetails>

     </div>
     
   </div>
  );
}

export default Assignment;
