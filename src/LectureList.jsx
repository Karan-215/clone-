import React from "react";
import LectureComp from "./LectureComp";


function LectureList() {
  return (
   <div className="  py-6 px-20 w-full  ">
     <h1 className="text-2xl font-bold">session list</h1>
     <div className=" shadow-lg  space-y-3 px-52 pb-10">

     <LectureComp></LectureComp>
     <LectureComp></LectureComp>
     <LectureComp></LectureComp>
     <LectureComp></LectureComp>
     <LectureComp></LectureComp>

     </div>
     
   </div>
            
  );
}

export default  LectureList ;
