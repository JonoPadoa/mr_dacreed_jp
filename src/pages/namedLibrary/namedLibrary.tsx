// *************************************ADDED IN MY PAGE LIBRARY CODE FOR WORKING ON********************************************************

// import { z } from "zod";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
import Link from "next/link";
// import { api } from "~/utils/api";

export default function JPLibrary() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#042f2e] to-[#94a3b8]">
        <div
          className="container flex flex-col items-center justify-start gap-12 px-4 py-16"
          style={{ marginTop: 30 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span
              className="larger-font text-[hsl(400,150%,80%)]"
              style={{ fontSize: "150px" }}
            >
              DACREED
            </span>{" "}
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/namedLibrary/namePage/jonosPage"
              // target="_blank"
            >
              <h3 className="text-2xl font-bold">Jonos Library</h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/namedLibrary/namePage/elenasPage"
              // target="_blank"
            >
              <h3 className="text-2xl font-bold">Elenas Library</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
          
            <Link href="/">Link to Home Page</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
