import Head from "next/head";
import Link from "next/link";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import { Header } from "../componentsRoot/Header";

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <link rel="icon" href="/birdFP.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
        {/* <Header /> */}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]">
            <span
              className="larger-font text-[#194759]"
              style={{ fontSize: "100px" }}
            >
              WELCOME
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
              href="input/input"
            >
              <h3 className="text-2xl font-bold">INPUT</h3>
            </Link>

            <Link
              className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
              href="/namedLibrary/namedLibrary"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              {!user.isSignedIn && <SignInButton mode="modal" />}
              {user.isSignedIn && <SignOutButton />}
            </div>
            <div className="m-8">
              <AuthShowcase />
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
  return (
    <div>
      <p className="text-2xl font-bold text-white">
        There are no current users signed in.
      </p>
    </div>
  );
};
export { AuthShowcase };
