import React from "react";
import { useUser } from "@clerk/nextjs";
import MainView from "~/pages/components/jpComponents/MainView";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import TopNav from "~/pages/components/jpComponents/TopNav";
import SideMenu from "./components/jpComponents/SideMenu";
import TextEditor from "./components/elenasComponents/TextEditor";
import ButtonGroup from "./components/elenasComponents/ButtonGroup";
import { useState } from "react";

const adminPage = () => {
  const [selectedButtonContent, setSelectedButtonContent] = useState("");

  const handleButtonSelection = (content: string) => {
    setSelectedButtonContent(content);
  };

  const { user } = useUser();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
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
            <div className="p-2 text-3xl font-bold text-white">
              {" "}
              {user?.firstName ? `User logged in: ${user.firstName}` : ""}
            </div>
          </div>
          <div className="flex flex-row justify-evenly bg-white p-2">
            <SideMenu />
            <TextEditor content={selectedButtonContent} />
            <ButtonGroup onSelect={handleButtonSelection} />
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default adminPage;
