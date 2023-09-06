import Image from "next/image";
import React from "react";
import { useState } from "react";

const SecondButtons = () => {
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isModalOpen7, setModalOpen7] = useState(false);
  const [isModalOpen8, setModalOpen8] = useState(false);
  const [isModalOpen9, setModalOpen9] = useState(false);

  const handleFocusMode4 = () => {
    setModalOpen4(true);
  };
  const handleFocusMode5 = () => {
    setModalOpen5(true);
  };
  const handleFocusMode6 = () => {
    setModalOpen6(true);
  };
  const handleFocusMode7 = () => {
    setModalOpen7(true);
  };
  const handleFocusMode8 = () => {
    setModalOpen8(true);
  };
  const handleFocusMode9 = () => {
    setModalOpen9(true);
  };

  const Modal4 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/TFImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen4(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Modal5 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MCImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen5(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Modal6 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MCImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen6(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Modal7 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MCImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen7(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Modal8 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MCImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen8(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Modal9 = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MCImg.png"
                alt="MultiChoice option"
                width="500"
                height="500"
              />
            </div>
            <button
              className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 rounded-md px-4 py-2 text-white"
              onClick={() => setModalOpen9(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ml-4 grid shrink-0 grid-flow-col grid-rows-3 gap-4 rounded-l-lg bg-white p-4">
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode4}
      >
        True / False
      </a>
      {isModalOpen4 && <Modal4 />}
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode5}
      >
        Matching
      </a>
      {isModalOpen5 && <Modal5 />}
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode6}
      >
        Multimedia
      </a>
      {isModalOpen6 && <Modal6 />}
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode7}
      >
        Slider
      </a>
      {isModalOpen7 && <Modal7 />}
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode8}
      >
        Puzzle
      </a>
      {isModalOpen8 && <Modal8 />}
      <a
        href="#"
        className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]"
        aria-current="page"
        onClick={handleFocusMode9}
      >
        Import
      </a>
      {isModalOpen9 && <Modal9 />}
    </div>
  );
};

export default SecondButtons;
