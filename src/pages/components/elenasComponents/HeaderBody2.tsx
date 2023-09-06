import React, { useState } from "react";
// import { set } from "zod";
import { api } from "~/utils/api";
interface CourseHeaderInput2Props {
  courseId: string;
  charsLeft?: number;
}
const HeaderBody2: React.FC<CourseHeaderInput2Props> = ({
  courseId,
  charsLeft,
}) => {
  return (
    <>
      <div
        className="border-box flex flex-col bg-primaryd p-4 "
        style={{ width: "100%", height: "auto" }}
      >
        <CourseHeaderInput2 courseId={courseId} charsLeft={charsLeft} />
      </div>
    </>
  );
};
export default HeaderBody2;


const CourseHeaderInput2: React.FC<CourseHeaderInput2Props> = ({
  courseId,
  charsLeft,
}) => {
  const [title, setTitle] = useState("");
  const [subHeading, setSubheading] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: createCourse } = api.course.create.useMutation({});
  api.course.getCourseById.useQuery(
    {
      courseId, // this is the courseId we looked up in the URL
    },
    {
      onSuccess: (data) => {
        if (data.length === 1) {
          setTitle(data[0]?.title ?? "");
          setSubheading(data[0]?.subHeading ?? "");
          setDescription(data[0]?.description ?? "");
        }
      },
    }
  );
  const resetForm = () => {
    setTitle("");
    setSubheading("");
    setDescription("");
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      subHeading.trim() === "" ||
      description.trim() === ""
    ) {
      alert(
        `Sorry, all fields need to be filled so that we can save this to the database for you.`
      );
    } else {
      createCourse({
        title: title,
        subHeading: subHeading,
        description: description,
      });
      resetForm();
    }
  };
  return (
    <div className="flex h-auto w-full flex-col ">
      <div className="m-4 flex h-auto flex-col p-4 ">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="ml-3 font-bold"> ⁝⁝ Title:</span>
            <input
              placeholder="Title goes here"
              className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
              type="text"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <span className="ml-3 mt-0">
            Characters left: {charsLeft ? charsLeft - title.length : 150}
          </span>

          <label className="flex flex-col">
            <span className="ml-3 font-bold">⁝⁝ Sub-heading:</span>
            <input
              placeholder="Sub-heading goes here"
              className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
              type="text"
              value={subHeading}
              onChange={(e) => setSubheading(e.target.value)}
            />
            <span className="ml-3 mt-0">
              Characters left: {charsLeft ? charsLeft - subHeading.length : 150}
            </span>

            {/* <span className="ml-3 mt-0">Characters left: {charsLeft}</span> */}
          </label>
          <label className="flex flex-col">
            <span className="ml-3 font-bold">⁝⁝ Description:</span>
            <input
              placeholder="Description goes here"
              className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="ml-3 mt-0">
              Characters left:{" "}
              {charsLeft ? charsLeft - description.length : 150}
            </span>
          </label>
          <button
            className="ml-2 mt-4 h-12 w-28 rounded-md bg-[#B9CDD7] px-4 py-2 text-lg font-bold text-white hover:bg-[#105475]"
            type="submit"
            value="Create header"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
