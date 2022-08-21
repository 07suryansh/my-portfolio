import React from "react";
import srijan from '../Images/srijan.png'
import appteam from '../Images/appteam.png'
import finearts from '../Images/finearts.png'
import gdsc from '../Images/gdsc.png'

export default function Experience() {
  return (
    <div>
      <div className="my-4">
        <div>
          <h1 className="text-4xl text-center p-2 mx-[35rem] mt-8 border-blue-500 border-b-4">
            Experience
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-8 flex flex-row">
            <div className="w-44"><img src={srijan} alt="" /></div>
            <div className="w-44"><img src={appteam} alt="" /></div>
          </div>
          <div className="p-8 flex flex-row">
            <div className="w-44"><img src={finearts} alt="" /></div>
            <div className="w-44"><img src={gdsc} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
