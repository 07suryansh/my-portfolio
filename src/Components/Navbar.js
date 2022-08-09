import React from "react";
import Me from "../Images/MySelfie.png";

export default function Navbar() {
  return (
    <div className="">
      <nav className="font-sans text-lg flex ">
        <ul className="cursor-pointer flex ">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black ">
            Home
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            About
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            Skills
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            Experience
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            Education
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            Projects
          </li>
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
            Contact
          </li>
        </ul>
      </nav>
      <div className="conataine py-40 flex">
        <div className="container pl-10">
          <h2 className="text-4xl py-2 font-extralight">Hello, This is</h2>
          <h1 className="text-7xl py-2 font-extralight">
            Suryansh Singh Bisen
          </h1>
          <h2 className="text-4xl py-4 font-extralight">
            Web Developer & Graphic Designer
          </h2>
          <button
            className="border-solid border-2 border-red-500 rounded-md py-2 px-4 mt-4 hover:bg-red-500 hover:text-white active:bg-red-600"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/file/d/1TQ1ObIeRttk_kCQzgkxZ2T5RjLSLMqlL/view?usp=sharing";
            }}
          >
            Resume
          </button>
        </div>
        <div className="container pl-[8rem]">
          <img
            src={Me}
            alt=""
            className="w-[30rem] rounded-full border-solid border-4 border-red-500 bg-red-200"
          />
        </div>
      </div>
    </div>
  );
}
