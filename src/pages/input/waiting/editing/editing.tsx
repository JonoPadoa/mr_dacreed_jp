import React from "react";
import Link from "next/link";

const editing = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]">
          {" "}
          <span
            className="larger-font text-[#194759]"
            style={{ fontSize: "100px" }}
          >
            EDITING
          </span>{" "}
        </h1>
        <Link
          className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
          href="/input/waiting/editing/Jono1"
        >
          <h3 className="text-2xl font-bold">Jono 1</h3>
        </Link>
        <Link
          className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
          href="/input/waiting/editing/Jono2"
        >
          <h3 className="text-2xl font-bold">Jono 2</h3>
        </Link>
        <Link
          className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
          href="/input/waiting/editing/elena1"
        >
          <h3 className="text-2xl font-bold">Elena 1</h3>
        </Link>
        <Link
          className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
          href="/input/waiting/editing/elena2"
        >
          <h3 className="text-2xl font-bold">Elena 2</h3>
        </Link>
      </div>
    </main>
  );
};

export default editing;
