import React from 'react'
import Me from "../Images/MySelfie1.png";

export default function About() {
  return (
    <div className="container m-24 text-center flex">
        <div className="container drop-shadow-2xl">
        <img
            src={Me}
            alt=""
            className="w-[30rem] rounded-2xl border-solid border-[12px] border-blue-500 bg-red-200 drop-shadow-2xl
            transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 
            "
          />
        </div>
        <div className="container">
        <h1 className='text-4xl border-blue-500 border-b-4 pb-2'>About</h1>
        
        </div>
    </div>
  )
}
