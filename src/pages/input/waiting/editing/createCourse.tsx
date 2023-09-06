import React from "react";
import CreateCourseForm from "~/pages/components/elenasComponents/CreateCourseForm";

interface createCourseProps {
  charsLeft: number;
}
const createCourse: React.FC<createCourseProps> = ({ charsLeft }) => {
  return (
    <div>
      <CreateCourseForm charsLeft={charsLeft} />
    </div>
  );
};

export default createCourse;
