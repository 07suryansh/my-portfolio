import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
export default function Navbar() {
  return (
    <div className="">
      <nav className="font-sans text-lg flex ">
        <ul className="cursor-pointer flex ">

        <Link to="/">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black ">
          Home
          </li>
          </Link> 

          <Link to="About">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
           About
          </li>
          </Link> 
          
          <Link to="Skills">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
          Skills
          </li>
          </Link>

          <Link to="Experience">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
          Experience
          </li>
          </Link>

          <Link to="Education">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
          Education
          </li>
          </Link>

          <Link to="Projects">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
          Projects
          </li>
          </Link>

          <Link to="Contact">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:border-b-2 border-black">
          Contact
          </li>
          </Link>
        </ul>
      </nav>
      
    </div>
  );
}
