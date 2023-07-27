import Head from "next/head";
import Link from "next/link";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { type NextPage } from "next";

import { useSession } from "next-auth/react";
// import { useUser } from "@clerk/nextjs";
// import { createReactQueryHooks } from '@trpc/react';
// import superjson from 'superjson';

// const trpc = createReactQueryHooks({
//   transformer: superjson,
//   // ...
// });

// const { useQuery } = trpc;

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Dacreed Prototyping</title>
        <link rel="icon" href="/birdFP.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
        {/* <Header /> */}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]">
            {" "}
            <span
              className="larger-font text-[#194759]"
              style={{ fontSize: "100px" }}
            >
              WELCOME
            </span>{" "}
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs justify-center gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-black"
              href="input/input"
            >
              <h3 className="text-2xl font-bold">INPUT</h3>
            </Link>

            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-black"
              href="/namedLibrary/namedLibrary"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="hover:white/50 flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
              {!user.isSignedIn && <SignInButton mode="modal" />}
              {user.isSignedIn && <SignOutButton />}
            </div>
            <div className="m-8">
              <AuthShowcase />
            </div>
            <div>
              {" "}
              {user.isSignedIn && (
                <Link
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-black"
                  href="/adminPage"
                >
                  <h3 className="text-2xl font-bold">ADMIN ONLY</h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div className="text-2xl font-bold text-white">
        <h1>Hi {user.fullName}, welcome back.</h1>
      </div>
    );
  }
};
export { AuthShowcase };
