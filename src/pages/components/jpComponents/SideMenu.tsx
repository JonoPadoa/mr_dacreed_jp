import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";

const SideMenu = () => {
  const { user } = useUser();

  return (
    <div className="container m-4 flex w-40 flex-col items-center justify-start rounded-xl bg-black">
      <div className="my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-100">
        <img
          className="rounded-lg"
          src={user?.profileImageUrl ?? ""}
          alt={user?.firstName ?? ""}
        />
      </div>

      <Link
        href="#"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question1
      </Link>
      <Link
        href="#"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question2
      </Link>
      <Link
        href="#"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question3
      </Link>
      <Link
        href="#"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question4
      </Link>
    </div>
  );
};

export default SideMenu;
