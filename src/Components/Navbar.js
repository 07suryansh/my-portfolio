import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="font-sans text-lg flex justify-between">
        <ul className="cursor-pointer flex justify-end">
          <li className="hover:bg-slate-200 px-6 py-4">Home</li>
          <li className="hover:bg-slate-200 px-6 py-4">About</li>
          <li className="hover:bg-slate-200 px-6 py-4">Skills</li>
          <li className="hover:bg-slate-200 px-6 py-4">Experience</li>
          <li className="hover:bg-slate-200 px-6 py-4">Education</li>
          <li className="hover:bg-slate-200 px-6 py-4">Projects</li>
          <li className="hover:bg-slate-200 px-6 py-4">Contact</li>
        </ul>
      </nav>
      <div className="conataine px-14 py-16">
        <p><h2 className="text-4xl py-1.5 font-extralight">Hello, This is</h2></p>
        <p><h1 className="text-7xl py-1.5 font-extralight">Suryansh Singh Bisen</h1></p>
        <p><h2 className="text-4xl py-1.5 font-extralight">Web Developer & Graphic Designer</h2></p>
      </div>
    </div>
  );
}
