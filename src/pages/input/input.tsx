import React, { useEffect } from "react";
import Link from "next/link";
import { Header } from "~/componentsRoot/Header";
import { useUser } from "@clerk/nextjs";
import { useState, Fragment } from "react";
import { api } from "~/utils/api";
import Modal4 from "../../componentsRoot/Modal4";
import { Transition } from "@headlessui/react";
import FooterBird from "~/componentsRoot/FooterBird";
import { type Course } from "@prisma/client";
import Image from "next/image";
import CreateCourseForm from "../components/elenasComponents/CreateCourseForm";
import ButtonBack from "~/componentsRoot/ButtonBack";
import ButtonNext from "~/componentsRoot/ButtonNext";

interface CourseCreationModalProps {
  charsLeft: number;
}

interface CourseCreationModalProps {
  charsLeft: number;
}
const Input = () => {
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // ======================>  Create New Course Modal <============================== //
  const CourseCreationModal: React.FC<CourseCreationModalProps> = ({
    charsLeft,
  }) => {
    const handleBackButtonClick = () => {
      setShowModal2(false); // Close the modal when the "Back" button is clicked
    };
    return (
      <div>
        <Transition
          show={showModal2}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Fragment>
            <Modal4
              isVisible={showModal2}
              onClose={() => setShowModal2(false)}
              // children={undefined}
            >
              <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-accentd bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 ">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50  ">
                  {/* <!--Modal title--> */}
                  <h5
                    className="flex-1 items-center text-center text-xl font-medium leading-normal text-primaryd dark:text-neutral-200"
                    id="exampleModalLabel"
                  >
                    Create New Course
                  </h5>
                  {/* <!--Close button--> */}
                  <button
                    type="button"
                    className="box-content rounded-none border-none text-primaryd hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close"
                    onClick={() => setShowModal2(false)}
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
                  className="relative flex items-center justify-center bg-lightsecondaryd p-0 first-line:flex-row"
                  data-te-modal-body-ref
                >
                  {/* Create new course */}
                  <CreateCourseForm charsLeft={charsLeft} />
                </div>
                {/* <!--Modal footer--> */}
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <ButtonBack onClick={handleBackButtonClick} />
                  <ButtonNext href="/input/waiting/editing/common" />
                </div>
              </div>
            </Modal4>
          </Fragment>
        </Transition>
      </div>
    );
  };

  // ======================> Course Input Modal <============================== //

  const CourseInputModal = () => {
    const handleBackButtonClick2 = () => {
      setShowModal(false); // Close the modal when the "Back" button is clicked
    };

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
              <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-accentd bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 ">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  {/* <!--Modal title--> */}
                  <h5
                    className="flex-1 items-center text-center text-xl font-medium leading-normal text-primaryd dark:text-neutral-200"
                    id="exampleModalLabel"
                  >
                    Upload Doc
                  </h5>
                  {/* <!--Close button--> */}
                  <button
                    type="button"
                    className="box-content rounded-none border-none text-primaryd hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none  focus:outline-none"
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
                  className="relative flex items-center justify-center p-4 first-line:flex-row  "
                  data-te-modal-body-ref
                  style={{ backgroundColor: "white" }}
                >
                  <div className="container mx-auto flex  flex-col items-center justify-center ">
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
                    <Image
                      src="/courseTone_1.jpg"
                      alt="choose tone"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>

                {/* <!--Modal footer--> */}

                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <ButtonBack onClick={handleBackButtonClick2} />
                  <ButtonNext href="/input/waiting/editing/common" />
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
      <div>
        <Header />

        <main className="flex flex-col items-center justify-center  bg-[#EEEEEE] bg-opacity-60">
     
          <div>
         
            <div className="my-6 flex flex-row bg-[#D9E5E2] ">
           
              <a href="../" className=" absolute left-20  ">
                <svg
                  className="inline-block w-5 bg-"
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

          <section className=" mt-3  w-3/4 ">
            <h1 className="left-0 mb-10  text-3xl font-bold">Create Courses</h1>
            <div className=" flex flex-row  items-center  justify-center ">
              {/*  new buttons setup */}
              <div className="m-5 rounded-3xl bg-gradient-to-t from-tertiaryd to-secondaryd p-1 shadow-xl ">
                <div className="   rounded-3xl ">
                  <a
                    aria-current="page"
                    className="text m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accentd bg-primaryd p-4  text-accentd ring-2  ring-tertiaryd  hover:bg-[#D9E5E2] "
                    href="#"
                    onClick={() => setShowModal2(true)}
                  >
                    <h3 className="text-2xl font-bold">Create New Course</h3>
                  </a>
                  {showModal2 && <CourseCreationModal charsLeft={0} />}
                </div>
              </div>

              <div className="m-5 rounded-3xl bg-gradient-to-t from-tertiaryd to-secondaryd p-1 shadow-xl ">
                <div className="   rounded-3xl border-solid border-accentd ">
                  <a
                    aria-current="page"
                    className="text m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accentd bg-primaryd p-4  text-accentd ring-2  ring-tertiaryd  hover:bg-[#D9E5E2] "
                    href="#"
                    onClick={() => setShowModal(true)}
                  >
                    <h3 className="text-2xl font-bold">Create  from Existing Content</h3>
                  </a>
                  {showModal && <CourseInputModal />}
                </div>
              </div>

              <div className="m-5 rounded-3xl bg-gradient-to-t  from-tertiaryd to-secondaryd p-1 shadow-xl">
                <div className="   rounded-3xl border-solid border-accentd ">
                  <a
                    aria-current="page"
                    className="text m-0  flex h-[100px] w-48 items-center justify-center  rounded-3xl border-solid  border-accentd bg-primaryd p-4  text-accentd ring-2  ring-tertiaryd  hover:bg-[#D9E5E2] "
                    href="#"
                    onClick={() => setShowModal(true)}
                  >
                    <h3 className="text-2xl font-bold">Generate using smart-AI</h3>
                  </a>
                  {showModal && <CourseInputModal />}
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
              <div className="my-10 w-3/4 items-center rounded-3xl border-2 border-solid border-secondaryd bg-primaryd p-4 shadow-sm">
                <span
                  className="larger-font pl-4 leading-loose text-accentd  "
                  style={{ fontSize: "30px" }}
                >
                  Drafts (recent):
                </span>

                <div className="h-auto w-full">
                  <DraftCourses />
                </div>
              </div>
            </section>
          </section>
          <FooterBird height={40} />
        </main>
      </div>
    </div>
  );
};

export default Input;

const AuthShowcase: React.FC = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div className="text-2xl  font-normal text-primaryd">
        <h1>Hi {user.fullName}, welcome back.</h1>
      </div>
    );
  }
  return (
    <div>
      <p className="text-2xl font-bold text-primaryd">
        There are no current users signed in.
      </p>
    </div>
  );
};
export { AuthShowcase };

type CourseHeader = {
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
        className="bg-blue hover:bg-red mt-4 w-1/3 rounded-md px-4 py-2 text-white"
        type="submit"
        value="SAVE DRAFT"
      />
    </form>
  );
};

const DraftCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const query = api.course.getAll.useQuery();

  useEffect(() => {
    if (query.data && query.data.length > 0) {
      setCourses(query.data);
    } else {
      setCourses([]);
    }
  }, [query.data]);
  return (
    <div className="flex w-full flex-col">
      {courses?.map((course) => (
        <div
          key={course.id}
          className="flex w-full flex-row items-center justify-between px-2 py-2 text-tertiaryd"
        >
          <button className="secondaryd h-6 w-6 rounded-md bg-gradient-to-t from-tertiaryd text-white drop-shadow-xl">
            D
          </button>
          <p>{course.title}</p>
          <p>{course.description}</p>
          {/* <p>{course.description}</p> If you want the description as well you can have both title and description in one <span> */}
          <Link
            href={{
              pathname: `/input/waiting/editing/common`,
              query: { editCourseId: course.id },
            }}
          >
            <button className="hover:bg-cyan-600/50 mt-4 flex w-20 justify-center rounded-full bg-tertiaryd p-1 text-primaryd drop-shadow-xl">
              Edit
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

function createCourse(arg0: { title: string; description: string }) {
  throw new Error("Function not implemented.");
}
