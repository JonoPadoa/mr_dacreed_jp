// import Head from "next/head";
import {
  useUser,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { type NextPage } from "next";
import { Header } from "../componentsRoot/Header";
import Bird from "~/componentsRoot/Bird";
import Image from "next/image";
import FooterBird from "~/componentsRoot/FooterBird";
import { useState } from "react";
import { api } from "~/utils/api";
import ButtonNext from "~/componentsRoot/ButtonNext";

const Home: NextPage = () => {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const [showButton, setShowButton] = useState(false);
  const { mutate: creatNewUser } = api.newUser.create.useMutation();

  const AddNewUser = () => {
    creatNewUser({ user });
    console.log(user);
    setShowButton(true);
  };

  const ShowButton = () => {
    return (
      <div>
        {" "}
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="mt-4 rounded-md bg-green-500 px-4 py-1 text-white"
        >
          Done
        </button>
      </div>
    );
  };

  const NewUserModal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-3/5 rounded-xl bg-white p-8">
            <div className="p-41 flex flex-row items-center justify-items-center text-lg">
              <div className="w-3/5">
                <span> Hi {user?.firstName}, your GitHub user ID is:</span>
                <div className="mb-4 mt-4 w-2/3 rounded-lg border-solid border-black bg-[#0F5475] p-2 text-white">
                  {user?.id}
                </div>
                <span>
                  Please click the button below to add yourself to the database
                  as a new user.
                </span>
                <div className="flex w-3/4 flex-col items-start justify-between">
                  <button
                    onClick={AddNewUser}
                    className="focus:bg-red mt-4 rounded-lg bg-[#0F5475] p-2 text-base text-white hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-green-600"
                  >
                    Add me:
                  </button>
                  {showButton && <ShowButton />}
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 rounded-md bg-[#0F5475] px-4 py-1 text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="m-o flex min-h-screen flex-col items-center p-0">
        <Header />
        <Image
          src="/bg_1.jpg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="z-[-2] "
        />

        <div className="flex w-screen flex-col items-center justify-center  gap-12 pb-4 pt-40">
          {/* logo */}
          <div
            className="birdBG left-0   w-screen    bg-white/20 py-16 "
            style={{ width: "100%" }}
          >
            <Bird />
          </div>

          {/*     buttons   */}
          <div className="flex flex-1  flex-col items-center justify-center gap-4 sm:grid-cols-2 md:gap-8 ">
            <div className="flex flex-row items-center justify-center gap-2 ">
              <ButtonNext href={"input/input"} />
              {showModal && <NewUserModal />}

              {/* =============================================================== */}
              {/* <Link    // LIBRARY BUTTON devs sandbox

              className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
              href="/namedLibrary/namedLibrary"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>

            </Link>   */}
              {/* =============================================================== */}

              <div className="flex flex-col items-center gap-2 ">
                <div
                  className="bg flex w-48 max-w-xs flex-col items-center rounded-full
             bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-4
              hover:bg-white/20"
                >
                  <SignedIn>
                    <SignOutButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal" />
                  </SignedOut>
                </div>

                <SignedIn>
                  <button
                    onClick={handleClick}
                    className="flex w-48 max-w-xs flex-col items-center rounded-full bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-4 hover:bg-white/20"
                  >
                    Add new user
                  </button>
                </SignedIn>
              </div>
            </div>
          </div>

          <div>
            <FooterBird height={30} />
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
