// import { Content } from 'next/font/google'
import React from "react";
import { Header } from "~/componentsRoot/Header";
import TextAreaForAdmin from "../components/elenasComponents/TextAreaForAdmin";

const admin = () => {
  return (
    <>
      <Header />
      <div
        className="
flex flex-row items-center justify-center "
      >
        <h1>CREATE REVIEW APPROVE</h1>
      </div>

      <div className="bg-slate-800 p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <section className="bg-cyan-400 col-span-1 flex items-center justify-center rounded-md p-4 px-1">
            Left
          </section>
          <section className="bg-cyan-400 col-span-2 flex items-center justify-center rounded-md p-4">
            Middle
            <TextAreaForAdmin />
          </section>
          <section className="bg-cyan-400 col-span-1 flex items-center justify-center rounded-md p-4 px-1">
            Right
          </section>
        </div>
      </div>
    </>
  );
};

export default admin;
