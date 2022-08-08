import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="font-sans text-lg flex justify-between">
        <ul className="cursor-pointer flex justify-end">
          <li className="hover:bg-slate-200 px-4 py-2">Home</li>
          <li className="hover:bg-slate-200 px-4 py-2">About</li>
          <li className="hover:bg-slate-200 px-4 py-2">Skills</li>
          <li className="hover:bg-slate-200 px-4 py-2">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
