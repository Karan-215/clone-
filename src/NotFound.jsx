import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-200 p-3">
      <h1 className=" text-9xl">Not Found bHai</h1>
      <Link to="/lecture" className="text-xl">
        lecture me jane ke liye yaha dabaye aap galat aagye hai 
      </Link>
    </div>
  );
}

export default NotFound;
