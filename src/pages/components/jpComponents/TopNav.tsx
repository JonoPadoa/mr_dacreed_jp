import React from "react";
import Link from "next/link";

const TopNav = () => {
  return (
    <div>
      <div className="flex h-20 items-center justify-center bg-transparent">
        <div className="flex space-x-8">
          <Link
            href="/"
            className="hover:shadow-outline rounded bg-gray-700 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-400"
            style={{ width: "100px" }}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:shadow-outline rounded bg-gray-700 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-400"
            style={{ width: "100px" }}
          >
            Team
          </Link>
          <Link
            href="#"
            className="hover:shadow-outline rounded bg-gray-700 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-400"
            style={{ width: "100px" }}
          >
            Projects
          </Link>
          {/* <Link
            href="/namedLibrary/namePage/jonosPage2"
            className="rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:bg-opacity-70"
          >
            Jonos Page 2
          </Link> */}
          <button className="hover:shadow-outline rounded bg-gray-700 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-400">
            Click Me
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* <div className="relative ml-3"></div> */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
