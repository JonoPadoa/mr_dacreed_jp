import Head from "next/head";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignIn, SignUp, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] drop-shadow-md">            <span
              className="larger-font text-[#194759]"
              style={{ fontSize: "100px" }}
            >
              DACREED
            </span>{" "}
            Test App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg- bg-[#7ebfb3] p-4 text-white hover:bg-white/50 drop-shadow-md"
              href="/admin/admin"
            >
              <h3 className="text-2xl font-bold">ADMIN</h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg- bg-[#7ebfb3] p-4 text-white hover:bg-white/50 drop-shadow-md"
              // href="https://create.t3.gg/en/introduction"
              href="/namedLibrary/namedLibrary"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            {/* <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              {!user.isSignedIn && <SignInButton />}
              {user.isSignedIn && <SignOutButton />}
            </div> */}
             <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
             <div>
             <SignInButton/>
             </div>
             
            {/* <UserButton afterSignOutUrl="/"/> */}
          </div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.library.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {/* {secretMessage && <span> - {secretMessage}</span>} */}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
