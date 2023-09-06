import React from "react";
import TopNav from "~/pages/components/jpComponents/TopNav";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
// import { api, type RouterOutputs } from "~/utils/api";
import JPButtonRender from "~/pages/components/jpComponents/JPButtonRender";

const Jono2 = () => {
  const { user } = useUser();

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              <span>Current user:</span>
              {user?.firstName ? (
                <span>
                  {" "}
                  {user?.firstName} {user?.id}
                </span>
              ) : (
                ""
              )}
            </div>

            <div>{/* <TestStringInput /> */}</div>
            <div>
              <JPButtonRender />
            </div>
            <div>
              <CourseForm />
            </div>
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jono2;

const CourseForm: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <form className="m-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <label>
        Title:
        <br />
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <br />
        <input
          type="text"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </label>
      <input
        className="bg-cyan-600 w-1/4 rounded border"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
