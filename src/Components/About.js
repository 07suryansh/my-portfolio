import React from 'react'
import Me from "../Images/MySelfie1.png";

export default function About() {
  return (
    <div className="container m-24 text-center flex">
        <div className="container drop-shadow-2xl">
        <img
            src={Me}
            alt=""
            className="w-[30rem] rounded-2xl border-solid border-8 border-blue-500 bg-red-200 drop-shadow-2xl
            transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 
            "
          />
        </div>
        <div className="container">
        <h1>About</h1>
        </div>
    </div>
  )
}
