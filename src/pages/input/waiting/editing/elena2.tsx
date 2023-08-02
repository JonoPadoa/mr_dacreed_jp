import React, { useState } from "react";
import "daisyui/dist/full.css";
import { Header } from "~/componentsRoot/Header";
import ButtonGroup from "../../../components/elenasComponents/ButtonGroup";
import ButtonsQ from "../../../components/elenasComponents/ButtonsQ";
import Qtemplate from "../../../components/elenasComponents/Qtemplate";

const Elena2 = () => {
  const [qStrings, setQStrings] = useState({ 
    title: "",
    subheading: "",
    description: "",
  });
  const fillQtemplateInputs = (
    title: string,
    subheading: string,
    description: string
  ) => {
    setQStrings({ title, subheading, description });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedButtonContent, setSelectedButtonContent] = useState("");
  const [isQtemplateVisible, setIsQtemplateVisible] = useState(false); 
  const handleButtonSelection = (content: string) => {
    setSelectedButtonContent(content);
    setIsQtemplateVisible(true);
  }; 
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setQStrings((prevQStrings) => ({
      ...prevQStrings,
      [field]: value,
    }));
  };
  return (
    <>
      <Header />

      <div
        style={{
          position: "relative",
          backgroundColor: "transparent",
          transition: "backdrop-filter 0.3s, background-color 0.3s",
        }}
        className={`page-container ${isOpen ? "modal-open" : ""}`}
      >
        {/* button final screen preview */}
        <label htmlFor="my_modal_7" className="btn ">
          Open Modal
        </label>

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

        {/* modal */}
        <input
          type="checkbox"
          id="my_modal_7"
          className="modal-toggle  m-0 p-0"
          defaultChecked={isOpen}
        />
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <div
            className="border-white-500 modal-box rounded-md border"
            style={{ padding: "0.25rem" }}
          >
            <div className="flex items-center justify-center bg-green-500 px-4 py-2 text-xl text-white selection:rounded-t-md ">
              <h3>Screen Preview</h3>
              <button className="modal-close" onClick={closeModal}>
                x
              </button>
            </div>
            <section className="m-0 flex  items-center rounded-b-md  bg-gray-400">
              <p className="py-4">This modal works with a hidden checkbox!</p>
            </section>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="my_modal_7"
            onClick={closeModal}
          ></label>
        </div>
      </div>

      {/* Left Q buttons panel */}
      <div className="p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <section className="col-span-1 flex flex-col items-center justify-center rounded-md bg-gray-100 p-4 px-1">
            {/* B Step 3  */}
            <ButtonsQ
              onSelect={(content) => {
                handleButtonSelection(content);
                fillQtemplateInputs(
                  `Title ${content}`,
                  `Sub-heading ${content}`,
                  `Description ${content}`
                );
              }}
            />
            <button
              className="btn-outline btn-circle btn my-10"
              onClick={() => setIsQtemplateVisible(false)} // A Add this to close Qtemplate on click
            >
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
          {/* Middle part */}
          <section className="col-span-2 flex grid-cols-1 flex-col items-center justify-center rounded-md bg-gray-100 p-4">
            {isQtemplateVisible && <Qtemplate qStrings={qStrings} onInputChange={handleInputChange}
           />}
        
          </section>

          <section className="col-span-1 flex flex-col items-center   justify-center rounded-md bg-gray-100 p-4 px-1 ">
            <ButtonGroup
              onSelect={(content) => {
                handleButtonSelection(content);
                fillQtemplateInputs(`Title ${content}`, `Sub-heading ${content}`, `Description ${content}`);
              }}
            />
            <button
              className="btn-outline btn-circle btn my-10"
              onClick={() => setIsQtemplateVisible(false)} 
            >
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
    </>
  );
};

export default Elena2;
