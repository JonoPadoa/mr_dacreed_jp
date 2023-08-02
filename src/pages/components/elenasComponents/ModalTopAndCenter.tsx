import React, { useState } from "react";
import { Header } from "~/componentsRoot/Header";
// import TextAreaForAdmin from '../../../components/elenasComponents/TextAreaForAdmin'
import ButtonGroup from "./ButtonGroup";
import TextEditor from "~/pages/components/elenasComponents/TextEditor";
import ButtonsQ from "./ButtonsQ";
import "daisyui/dist/full.css";
const AdminTwo = () => {
  const [selectedButtonContent, setSelectedButtonContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonSelection = (content: string) => {
    setSelectedButtonContent(content);
  };

  function openModal(key: string) {
    setIsOpen(true);
    const modalElement = document.getElementById(
      key
    ) as HTMLDialogElement | null;
    if (modalElement) {
      modalElement.showModal();
      document.body.setAttribute("style", "overflow: hidden;");
      const dialogContent = modalElement.children[0] as HTMLElement;
      dialogContent.scrollTop = 0;
      dialogContent.classList.remove("opacity-0");
      dialogContent.classList.add("opacity-100");
    }
  }
  return (
    <>
      <Header />
      {/* buttons final screen preview */}
      <div className="absolute top-0 mt-7 flex h-full w-full items-start justify-center">
        <button
          type="button"
          onClick={() => openModal("mymodalcentered")}
          className="mr-3 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Open Modal Centered
        </button>
        <button
          type="button"
          onClick={() => openModal("mymodaltop")}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Open Modal Top
        </button>
      </div>
      {/* 3 rounded buttons */}
      <div className="flex flex-row items-center justify-center ">
        <button className="btn m-6 flex h-2 w-2 items-center justify-center rounded-full p-7 drop-shadow-md"></button>
        <button className="btn m-6 flex h-2 w-2 items-center justify-center rounded-full p-7 drop-shadow-md"></button>
        <button className="btn m-6 flex h-2 w-2 items-center justify-center rounded-full p-7 drop-shadow-md"></button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <section className="col-span-1 flex flex-col items-center justify-center rounded-md bg-gray-100 p-4 px-1">
            <ButtonsQ onSelect={handleButtonSelection} />
          </section>
          <section className="col-span-2 flex  grid-cols-1 flex-col items-center justify-center rounded-md bg-gray-100 p-4">
            <TextEditor content={selectedButtonContent} />
            {/* <TextAreaForAdmin /> */}
          </section>
          <section className="col-span-1 flex flex-col items-center   justify-center rounded-md bg-gray-100 p-4 px-1 ">
            <ButtonGroup onSelect={handleButtonSelection} />
          </section>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center ">
        <button className="btn m-6 flex h-8 w-28 items-center justify-center rounded-full p-1 drop-shadow-md">
          <h3>Back</h3>
        </button>
        <button className="btn m-6 flex h-8 w-28 items-center justify-center rounded-full p-1 drop-shadow-md">
          <h3>next</h3>
        </button>
      </div>
    </>
  );
};

export default AdminTwo;