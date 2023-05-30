import React from "react";
import { projectList } from "./projects";

const Project = ({ p }) => {
  return (
    <a
      href={p.link}
      target="_blank"
      className="col-span-1 relative p-[0.6rem] overflow-hidden hover:dark:bg-white/5 hover:bg-black/5 transition-all duration-200 cursor-pointer rounded-2xl flex md:flex-col flex-row mb-2 sm:mb-10"
    >
      <div className="aspect-square sm:w-1/5 w-1/3  lg:w-full rounded-xl relative overflow-hidden">
        <img className=" w-full aspect-square object-cover" src={p.img} />
      </div>
      <div className=" pl-4 md:pl-0 sm:w-4/5 w-2/3 md:w-full ">
        <div className="text-[16px] font-bold pt-4">{p.name}</div>
        <div className="text-[15px] dark:text-white/60 text-black/60">
          {p.desc}
        </div>
      </div>
    </a>
  );
};

export default function FigCommunity() {
  return (
    <div className="container mx-auto max-w-2xl p-4 text-black dark:text-white">
      <div className="text-[14px] font-bold opacity-60 uppercase tracking-[0.2em]">
        Figma community{" "}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-2">
        {projectList
          .filter((p) => p.isfig)
          .map((p, ind) => (
            <Project key={ind} p={p} />
          ))}
      </div>
    </div>
  );
}