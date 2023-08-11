import React from "react";
import Link from "next/link";
import { Header } from "~/componentsRoot/Header";
import TopNav from "../components/jpComponents/TopNav";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const input = () => {
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };

  const CourseCreationModal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="p-41 flex flex-row items-center justify-items-center">
              <div className="w-3/5">
                <div className="flex w-4/5 flex-col items-start justify-center">
                  <span className="font-color-[#b91c1c] m-2 font-extrabold">
                    Course Title:
                  </span>
                  <input
                    type="text"
                    placeholder="Course title:"
                    className="input-bordered input input-sm m-1 w-2/3 shadow-xl"
                  />
                </div>
                <div className="my-2 flex w-3/4 flex-col items-start justify-center">
                  <span className="font-color-[#b91c1c] m-2 font-extrabold">
                    Course description:
                  </span>
                  <input
                    type="text"
                    placeholder="Course description:"
                    className="input-bordered input input-sm m-1 w-full shadow-xl"
                  />
                </div>
                <div className="flex w-3/4 flex-row items-center justify-between">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
                  >
                    SAVE TO DRAFT
                  </button>
                  <button className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50">
                    CONT TO COURSE
                  </button>
                </div>
              </div>
              <div className="flex h-auto w-2/5 items-center justify-center">
                <img
                  src="/birdFP.png"
                  alt="Bird-logo"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#b7ccd6] p-6">
      <main className="flex flex-col items-center justify-center">
        {/* <h1 className="font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]"> */}

        <div>
          <div className="my-6 flex flex-col items-center">
            <span
              className="bg-gradient-to-r from-cyan-900 to-cyan-500 bg-clip-text font-extrabold text-transparent"
              style={{ fontSize: "70px" }}
            >
              Welcome to your course creation {user?.firstName}.
            </span>
            <br></br>
            <br></br>
            <span
              className="bg-gradient-to-r from-cyan-900 to-cyan-600 bg-clip-text font-extrabold text-transparent"
              style={{ fontSize: "30px" }}
            >
              How would you like to proceed today?
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <a
            aria-current="page"
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
            onClick={handleModal}
          >
            <h3 className="text-2xl font-bold">Create:</h3>
          </a>
          {modalOpen && <CourseCreationModal />}
          <Link
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
          >
            <h3 className="text-2xl font-bold">AI:</h3>
          </Link>
          <Link
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
          >
            <h3 className="text-2xl font-bold">Upload:</h3>
          </Link>
        </div>
        <div>
          <input type="file" className="file-input-bordered file-input mt-4" />
        </div>
        <div className="my-4">
          <span
            className="larger-font font-extrabold text-[#21292D]"
            style={{ fontSize: "30px" }}
          >
            Draft courses:
          </span>
        </div>
        <div className="h-96 w-1/2 rounded-lg bg-[#6f98ac] p-4">
          <h1>This is where i shall have the list of draft courses:</h1>
        </div>
      </main>
    </div>
  );
};

export default input;

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
