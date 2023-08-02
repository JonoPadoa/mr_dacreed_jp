import React from "react";
import Link from "next/link";

const TopNav = () => {
  return (
    <div>
      <div className="relative flex h-20 items-center justify-center bg-gray-600">
        <div className="flex space-x-8">
          <Link
            href="/"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/input/waiting/editing/Jono2"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Jonos Page 2
          </Link>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* <div className="relative ml-3"></div> */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
