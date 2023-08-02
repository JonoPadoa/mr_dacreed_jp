import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import JPTextEditor from "./JPTextEditor";

const SideMenu = () => {
  const { user } = useUser();
  // Step 2: Create a state variable to track the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Step 3: Define the function to handle the onClick event
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
              <button className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50">
                SAVE TO DRAFT
              </button>
              <button className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50">
                SAVE
              </button>
            </div>
            <button
              className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
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
        />
      </div>

      <a
        href="#"
        className="m-4 rounded-md bg-sky-500/75 p-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
        onClick={handleFocusMode} // <-- Add the onClick handler here
      >
        Modal - Focus
      </a>
      {isModalOpen && <Modal />}
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question2
      </Link>
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question3
      </Link>
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question4
      </Link>
    </div>
  );
};

export default SideMenu;

// import { useState } from 'react';
// import RenderedComponent from '../components/RenderedComponent';

// const IndexPage = () => {
//   const [showComponent, setShowComponent] = useState(false);

//   const handleClick = () => {
//     setShowComponent(true);
//   };

//   return (
//     <div>
//       <h1>Next.js Button Example</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {showComponent && <RenderedComponent />}
//     </div>
//   );
// };

// export default IndexPage;
