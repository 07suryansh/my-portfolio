import React from "react";
import cpp from "../Images/cpp.png";

export default function Skills() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center mx-[42rem] mt-4 border-blue-500 border-b-4">
          Skills
        </h1>
      </div>
      <div className="container m-10 flex flex-auto">
        <div className="flex">
          <img
            src={cpp}
            alt=""
            className="w-14
            "
          />
          <h1 className="p-4">C++</h1>
        </div>
        <div className="flex">
          <img
            src={cpp}
            alt=""
            className="w-14
            "
          />
          <h1 className="p-4">C++</h1>
        </div>
        <div className="flex">
          <img
            src={cpp}
            alt=""
            className="w-14
            "
          />
          <h1 className="p-4">C++</h1>
        </div>
        <div className="flex">
          <img
            src={cpp}
            alt=""
            className="w-14
            "
          />
          <h1 className="p-4">C++</h1>
        </div>
      </div>
    </div>
  );
}
