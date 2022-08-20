import React from "react";
import cpp from "../Images/cpp.png";
import java from "../Images/java.png";
import python from "../Images/python.png";
import js from "../Images/js.png";
import react from "../Images/react.png"
import html from "../Images/html.png"
import css from "../Images/css.png"
import bootstrap from "../Images/bootstrap.png"
import tailwind from "../Images/Tailwind.png"
import photoshop from "../Images/photoshop.png"
import illustrator from "../Images/illustrator.png"
import figma from "../Images/figma.png"

export default function Skills() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center mx-[30rem] mt-4 border-blue-500 border-b-4">
          Skills
        </h1>
      </div>
          <div className="flex flex-col">
                <div className="container m-10 flex flex-row">
                        <div className="px-12">
                          <img src={cpp} alt="" className="w-14"/>
                          <h1 className="">C++</h1>
                        </div>
                        <div className="px-12">
                          <img src={java} alt="" className="w-14"/>
                          <h1 className="">Java</h1>
                        </div>
                        <div className="px-12">
                          <img src={js} alt="" className="w-14"/>
                          <h1 className="">Javascript</h1>
                        </div>
                        <div className="px-12">
                          <img src={react} alt="" className="w-14"/>
                          <h1 className="">ReactJs</h1>
                        </div>
                </div>
                <div className="container m-10 flex flex-row">
                        <div className="px-12">
                          <img src={python} alt="" className="w-14"/>
                          <h1 className="">Python</h1>
                        </div>
                        <div className="px-12">
                          <img src={html} alt="" className="w-14"/>
                          <h1 className="">HTML</h1>
                        </div>
                        <div className="px-12">
                          <img src={css} alt="" className="w-14"/>
                          <h1 className="">CSS</h1>
                        </div>
                        <div className="px-12">
                          <img src={tailwind} alt="" className="w-14"/>
                          <h1 className="">Tailwind CSS</h1>
                        </div>
                </div>
                <div className="container m-10 flex flex-row">
                        <div className="px-12">
                          <img src={bootstrap} alt="" className="w-14"/>
                          <h1 className="">Bootstrap</h1>
                        </div>
                        <div className="px-12">
                          <img src={photoshop} alt="" className="w-14"/>
                          <h1 className="">Photoshop</h1>
                        </div>
                        <div className="px-12">
                          <img src={illustrator} alt="" className="w-14"/>
                          <h1 className="">Illustrator</h1>
                        </div>
                        <div className="px-12">
                          <img src={figma} alt="" className="w-14"/>
                          <h1 className="">Figma</h1>
                        </div>
                </div>
          </div>
    </div>
  );
}
