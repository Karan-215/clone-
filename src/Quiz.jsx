import React from "react";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-200 p-3">
      <h1 className=" text-9xl">quiz wala page</h1>
      <Link to="/lecture" className="text-xl">
        yaha dabao lecture me jane ke liye {"hiii "}
      </Link>
    </div>
  );
}

export default Quiz;
