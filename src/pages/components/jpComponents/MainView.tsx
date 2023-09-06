import Link from "next/link";
import React from "react";
import TextEditor from "../elenasComponents/TextEditor";
import JPTextEditor from "./JPTextEditor";
import SideMenu from "./SideMenu";
import Image from 'next/image'
const MainView = () => {
  return (
    <div className="flex flex-row justify-evenly bg-white p-2">
      <SideMenu />

      <div className="w-70vw bg-black-400 container m-4 rounded-xl">
        <JPTextEditor />
        <br />
        <div>
          <h1>Placeholder.</h1>
        </div>
      </div>
      <div className="container m-4 flex w-40 flex-col justify-start rounded-xl bg-black">
        <span className="text-1 text-center font-bold tracking-tight text-white">
          Editor:
        </span>

        <Link
          href="/"
          className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
          aria-current="page"
        >
          Heading
        </Link>
        <Link
          href="/"
          className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
          aria-current="page"
        >
          Description
        </Link>
        <Link
          href="/"
          className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
          aria-current="page"
        >
          Section +
        </Link>
        <Link
          href="/"
          className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
          aria-current="page"
        >
          Questions
        </Link>
        <Link
          href="/"
          className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
          aria-current="page"
        >
          <Image rel="icon" src="/birdFP.png" alt="logo" width='30' height='30'/>

        </Link>
      </div>
    </div>
  );
};
export default MainView;
