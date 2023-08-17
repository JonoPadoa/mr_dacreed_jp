import React from "react";
import Link from "next/link";
import { Header } from "~/componentsRoot/Header";
import TopNav from "../components/jpComponents/TopNav";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect, Fragment } from "react";
import { api } from "~/utils/api";
import Modal4 from "../../componentsRoot/Modal4";
import { Transition } from "@headlessui/react";
import FooterBird from "~/componentsRoot/FooterBird";

const Input = () => {
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const [showModal, setShowModal] = useState(false);

  const CourseCreationModal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="p-41 flex flex-row items-center justify-items-center">
              <div className="w-3/5">
                <CourseForm />
                <div className="flex w-3/4 flex-row items-center justify-between">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 w-1/3 rounded-md px-4 py-2 text-white"
                  >
                    BACK
                  </button>
                  <button className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white">
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

  const CourseInputModal = () => {
    return (
      <div>
        <Transition
          show={showModal}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Fragment>
            <Modal4
              isVisible={showModal}
              onClose={() => setShowModal(false)}
              // children={undefined}
            >
              <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 ">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  {/* <!--Modal title--> */}
                  <h5
                    className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                    id="exampleModalLabel"
                  >
                    Upload Doc
                  </h5>
                  {/* <!--Close button--> */}
                  <button
                    type="button"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* <!--Modal body--> */}
                <div
                  className="relative flex items-center justify-center p-4 first-line:flex-row "
                  data-te-modal-body-ref
                >
                  <div className="container mx-auto flex  flex-col items-center justify-center">
                    {/* upload files */}
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="multiple_files"
                    >
                      Upload multiple files
                    </label>
                    <input
                      className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                      id="multiple_files"
                      type="file"
                      multiple
                    />

                    {/* upload images */}
                    <div className="flex w-full items-center justify-center">
                      <label
                        htmlFor="dropzone-file"
                        className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                          <svg
                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="container mx-auto flex items-center justify-center">
                    <img src="/courseTone_1.jpg" alt="choose tone" />
                  </div>
                </div>

                {/* <!--Modal footer--> */}
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <button
                    type="button"
                    className="bg-primary-100 text-primary-700 hover:bg-primary-accent-100 focus:bg-primary-accent-100 active:bg-primary-accent-200 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </Modal4>
          </Fragment>
        </Transition>
      </div>
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="bg-opacity-20  bg-[url('/bg_loading.png')]  bg-auto bg-[50%_40%] bg-no-repeat ">
        <Header />

        <main className="z-2 flex flex-col items-center justify-center">

          <div>
            <div className="my-6 flex flex-row ">
              <a href="../" className=" absolute left-20 ">
                <svg
                  className="inline-block w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  // class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Back
              </a>
            </div>
          </div>

          <section className="   w-3/4 ">
            <h1 className="left-0 mb-10  text-5xl">Create Courses</h1>
            <div className=" flex flex-row  items-center  justify-center ">
              {/*  new buttons setup */}
              <div className="m-5 rounded-3xl bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] p-1 shadow-xl ">
                <div className="   rounded-3xl ">
                  <a
                    aria-current="page"
                    className="m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accenttext bg-primarytext p-4  text-accenttext ring-2  ring-tertiary  "
                    href="#"
                    onClick={handleModal}
                  >
                    <h3 className="text-2xl font-bold">New Course</h3>
                  </a>
                  {modalOpen && <CourseCreationModal />}
                </div>
              </div>

              <div className="m-5 rounded-3xl bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] p-1 shadow-xl ">
                <div className="   rounded-3xl border-solid border-accenttext ">
                  <a
                    aria-current="page"
                    className="m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accenttext bg-primarytext p-4  text-accenttext ring-2  ring-tertiary  "
                    href="#"
                    onClick={() => setShowModal(true)}
                  >
                    <h3 className="text-2xl font-bold">Upload docs</h3>
                  </a>
                  {showModal && <CourseInputModal />}
                </div>
              </div>

              <div className="m-5 rounded-3xl bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] p-1 shadow-xl">
                <div className="   rounded-3xl border-solid border-accenttext ">
                  <a
                    aria-current="page"
                    className="m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accenttext bg-primarytext p-4  text-accenttext ring-2  ring-tertiary  "
                    href="#"
                    onClick={() => setShowModal(true)}
                  >
                    <h3 className="text-2xl font-bold">AI generated</h3>
                  </a>
                  {showModal && <CourseInputModal />}
                </div>
              </div>

              <div className="m-5 rounded-3xl bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] p-1 shadow-xl">
                <div className="   rounded-3xl border-solid border-accenttext ">
                  <Link
                    className="m-0 flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accenttext bg-primarytext p-4 text-accenttext ring-2 ring-tertiary  drop-shadow-lg  "
                    href="/input/waiting/waiting"
                  >
                    <h3 className="text-2xl font-bold">Cont...</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center">

              <input
                type="text"
                className=" file-input-bordered mt-4 w-2/4 rounded-full shadow-inner-top "
              //  search input //
                placeholder=" ⨀  Search existing course by name or keywords"
              />
            </div>
            <section className="flex items-center justify-center ">
              <div
                className=" my-10 w-3/4 items-center rounded-3xl border-2 border-solid border-[#B9CCC8] bg-[#FAFAFA] p-4 shadow-sm"
              >
                <span
                  className="larger-font  pl-4 text-[#21292D] underline "
                  style={{ fontSize: "30px" }}
                >
                  Drafts (recents)
                </span>

                <div className="from-cyan-900 to-cyan-500 h-auto w-3/4 rounded-lg bg-gradient-to-r p-4 text-white">
                  <DraftCourses />
                </div>
                <section className="mx-2 ">
                  <ul>
                    <li className="flex flex-row justify-between items-center py-2">
                      <button className=" w-6 h-6 rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        M
                      </button>
                      <p className="mx-2 ">Manual Funds</p>
                      <button className=" mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                    <li className="flex flex-row justify-between py-2">
                      <button className="w-6 h-6  rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        D
                      </button>
                      <p className="mx-2">Dacreed Course (test)</p>
                      <button className=" mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                    <li className="flex flex-row justify-between py-2">
                      <button className="w-6 h-6  rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        C
                      </button>
                      <p className="mx-2">Manual Funds</p>
                      <button className=" mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                    <li className="flex flex-row justify-between py-2">
                      <button className="w-6 h-6  rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        O
                      </button>
                      <p className="mx-2">Dacreed Course (test)</p>
                      <button className=" mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                    <li className="flex flex-row justify-between py-2">
                      <button className="w-6 h-6  rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        M
                      </button>
                      <p className="mx-2">Manual Funds</p>
                      <button className="hover:bg-cyan-600/50 mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                    <li className="flex flex-row justify-between py-2">
                      <button className="w-6 h-6 rounded-md bg-gradient-to-t from-[#0F5475] to-[#B9CCC8] text-white drop-shadow-xl">
                        D
                      </button>
                      <p className="mx-2">Dacreed Course (test)</p>
                      <button className="hover:bg-cyan-600/50 mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
                        Edit
                      </button>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </section>
        </main>
      </div>
      <div className="mt-4 flex justify-center">
        <FooterBird />
      </div>
    </div>
  );
};

export default Input;

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

type Course = {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

const CourseForm: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const { mutate: createCourse } = api.newCourse.create.useMutation({
    onSuccess: () => {
      // console.log(
      //   `This should be posting to the db with course title: ${courseTitle}`
      // );
      // void refetchTopics();
    },
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createCourse({ title: courseTitle, description: courseDescription });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="font-color-[#b91c1c] font-extrabold">
        <span className="ml-1">Title:</span>
        <br />
        <input
          className="input input-bordered input-sm w-2/3 shadow-xl"
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </label>
      <label className="font-color-[#b91c1c] font-extrabold">
        <span className="ml-1">Description:</span>
        <br />
        <input
          className="input input-bordered input-sm w-2/3 shadow-xl"
          type="text"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </label>
      <input
        className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 w-1/3 rounded-md px-4 py-2 text-white"
        type="submit"
        value="SAVE DRAFT"
      />
    </form>
  );
};

const DraftCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { data: newCourses, refetch: refetchTopics } =
    api.newCourse.getCourses.useQuery(undefined, {
      onSuccess: (data) => {
        if (data && data.length > 0) {
          setCourses(data);
        } else {
          setCourses([]);
        }
      },
    });

  return (
    <div className="flex flex-row">
      {courses?.map((course: Course) => (
        <div
          key={course.id}
          className="w-7/8 m-2 flex flex-row items-center rounded border-solid p-4 text-tertiary"
        >
          <p>{course.title}</p>
          <p>{course.description}</p>
          <button className="hover:bg-cyan-600/50 mt-4 flex w-20 justify-center rounded-full bg-[#0f5475] p-1 text-white drop-shadow-xl">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};
