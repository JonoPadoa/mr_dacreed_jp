import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import JPTextEditor from "./JPTextEditor";

const SideMenu = () => {
  const { user } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFocusMode = () => {
    setModalOpen(true);
  };
  const Modal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-100 mt-38 m-40 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <span
                className="larger-font text-[#0369a1]"
                style={{ fontSize: "80px" }}
              >
                HEADING EDITOR:
              </span>
              <JPTextEditor />
              <button className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white">
                SAVE TO DRAFT
              </button>
              <button className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white">
                SAVE
              </button>
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container m-4 flex w-40 flex-col items-center justify-start rounded-xl bg-black">
      <div className="my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-100">
        <img
          className="rounded-lg"
          src={user?.profileImageUrl ?? ""}
          alt={user?.firstName ?? ""}
          width={100}
          height={100}
        />
      </div>

      <a
        href="#"
        className="bg-sky-500/75 hover:bg-sky-400/50 m-4 rounded-md p-5 text-sm font-medium text-white"
        aria-current="page"
        onClick={handleFocusMode} 
      >
        Focus on Heading
      </a>
      {isModalOpen && <Modal />}
      <Link
        href="/"
        className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
        aria-current="page"
      >
        Question2
      </Link>
      <Link
        href="/"
        className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
        aria-current="page"
      >
        Question3
      </Link>
      <Link
        href="/"
        className="bg-sky-500/75 hover:bg-sky-400/50 m-2 rounded-md px-5 py-5 text-sm font-medium text-white"
        aria-current="page"
      >
        Question4
      </Link>
    </div>
  );
};

export default SideMenu;
