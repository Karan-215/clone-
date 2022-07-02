import React from "react";
import Button from "./Buttons";
import { MdOutlineQuiz, MdAssignment } from "react-icons/Md";
import { GiTeacher } from "react-icons/Gi";

function SideBar() {
  return (
    <div className="bg-gray-900  w-56 flex-col flex h-full fixed text-white">
      <Button to="/lecture">
        <GiTeacher />
        <span className="ml-2"></span>
        Lectures
      </Button>
      <Button to="/assignment">
        {<MdAssignment />}
        <span className="ml-2"></span>
        Assignment
      </Button>
      <Button to="/quiz">
        <MdOutlineQuiz />
        <span className="ml-2"></span>
        Quiz
      </Button>
    </div>
  );
}

export default SideBar;