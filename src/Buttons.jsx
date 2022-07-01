import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white  flex items-center px-2 py-2 text-sm font-medium rounded-md focus:bg-slate-700 focus:shadow-md bg-gray-900  "
        to={props.to}
      >
        <div className=" flex items-center   ">{props.children}</div>
      </Link>
    </>
  );
}
export default Button;
