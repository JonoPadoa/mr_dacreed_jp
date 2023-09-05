import React, { useState, type ChangeEvent } from "react";
import Image from "next/image";



// ===============>  NOT CONNECTED TO DB <==================== //

const CourseSectionPlaceholder = () => {
  const [courseSections, setCourseSections] = useState([
    <CourseSectionComponent key={0} onRemove={() => handleRemoveSection(0)} />,
  ]); // Initialize with one component
  const handleAddSection = () => {
    // Add a unique key for each CourseSectionComponent
    const newIndex = courseSections.length;
    setCourseSections([
      ...courseSections,
      <CourseSectionComponent
        key={newIndex}
        onRemove={() => handleRemoveSection(newIndex)}
      />,
    ]);
  };

  const handleRemoveSection = (indexToRemove: number) => {
    // Remove the CourseSectionComponent at the specified index
    const updatedSections = courseSections.filter(
      (_, index) => index !== indexToRemove
    );
    setCourseSections(updatedSections);
  };

  return (
    <>
      <div className="bg-lightsecondaryd">
        {courseSections.map((section) => (
          <div key={section.key}>{section}</div>
        ))}
        {/* Add button */}
        <div className="w-82 dropdown dropdown-top flex content-center justify-center rounded-sm ">
          <label
            tabIndex={0}
            className=" m-1 flex flex-row items-center "
            onClick={handleAddSection}
          >
            <p className="mr-2">Add </p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.4 5.4V3H6.6V5.4H9V6.6H6.6V9H5.4V6.6H3V5.4H5.4ZM6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8Z"
                fill="#1E425C"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default CourseSectionPlaceholder;

interface CourseSectionComponentProps {
  onRemove: () => void;
}

const CourseSectionComponent: React.FC<CourseSectionComponentProps> = ({
  onRemove,
}) => {
  const [description, setDescription] = useState<string>("");
  const maxCharacters = 600;

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setDescription(inputText);
  };

  const remainingCharacters = maxCharacters - description.length;

  return (
    <div className="flex flex-col ">
      <span className="ml-3 font-bold text-accentd"> ⁝⁝ Title 1</span>
      <div>
        {/* description */}
        <div>
          <textarea
            placeholder="Description 🖋️"
            className="textarea textarea-bordered textarea-lg w-full flex-grow"
            value={description}
            onChange={handleTextareaChange}
          ></textarea>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Characters left: {remainingCharacters}</span>
            <div style={{ flex: 1 }}></div>
            <button
              className="ml-3"
              // onClick={() => setDescription("")}
              onClick={onRemove}
            >
              Delete{" "}
              <Image
                src="/icons/delete.png"
                alt="delete"
                className="inline-block pb-2"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
