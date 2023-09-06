import React, { useState } from "react";
import { Header } from "~/componentsRoot/Header";
// import TextAreaForAdmin from '../../../components/elenasComponents/TextAreaForAdmin'
import ButtonGroup from "../../../components/elenasComponents/ButtonGroup";
import TextEditor from "~/pages/components/elenasComponents/TextEditor";
import ButtonsQ from "../../../components/elenasComponents/ButtonsQ";
const Admin = () => {
  const [selectedButtonContent, setSelectedButtonContent] = useState("");

  const handleButtonSelection = (content: string) => {
    setSelectedButtonContent(content);
  };
  return (
    <>
      <Header />
      {/* 3 rounded buttons */}
      <div className="flex flex-row items-center justify-center ">
        <button className="btn m-6 flex h-16 w-16 items-center justify-center rounded-full p-7 drop-shadow-md">
          <h3>Create</h3>
        </button>
        <button className="btn m-6 flex h-16 w-16 items-center justify-center rounded-full p-7 drop-shadow-md">
          <h3>REVIEW</h3>
        </button>
        <button className="btn m-6 flex h-16 w-16 items-center justify-center rounded-full p-7 drop-shadow-md">
          <h3>APPROVE</h3>
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <section
            className="col-span-1 flex
                      flex-col items-center
                      justify-center rounded-md bg-gray-100 p-4 px-1"
          >
            <ButtonsQ onSelect={handleButtonSelection} />

            <button className="btn btn-circle btn-outline my-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  transform="rotate(90 12 12)"
                />
              </svg>
            </button>
          </section>
          <section
            className="col-span-2
                     flex 
                     grid-cols-1 flex-col items-center justify-center rounded-md bg-gray-100 p-4"
          >
            <TextEditor content={selectedButtonContent} />
            {/* <TextAreaForAdmin /> */}
          </section>
          <section
            className="col-span-1 flex flex-col
                         items-center  
                        justify-center rounded-md bg-gray-100 p-4 px-1 "
          >
            <ButtonGroup onSelect={handleButtonSelection} />
            <button className="btn btn-circle btn-outline my-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  transform="rotate(90 12 12)"
                />
              </svg>
            </button>
          </section>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center ">
        <button className="btn m-6 flex h-8 w-28 items-center justify-center rounded-full p-1 drop-shadow-md">
          <h3>Back</h3>
        </button>
        <button className="btn m-6 flex h-8 w-28 items-center justify-center rounded-full p-1 drop-shadow-md">
          <h3>save</h3>
        </button>
        <button className="btn m-6 flex h-8 w-28 items-center justify-center rounded-full p-1 drop-shadow-md">
          <h3>next</h3>
        </button>
      </div>
    </>
  );
};

export default Admin;
