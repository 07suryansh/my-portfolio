import React from "react";

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
      
    </div>
  );
}
