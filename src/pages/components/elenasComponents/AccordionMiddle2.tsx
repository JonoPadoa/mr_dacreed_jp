import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import HeaderBody2 from "./HeaderBody2";
import QuestionsList from "~/componentsRoot/QuestionsList";
import CourseSectionPlaceholder from "~/componentsRoot/CourseSectionPlaceholder";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
interface AccordionMiddle2Props {
  courseId: string;
}

const AccordionMiddle2: React.FC<AccordionMiddle2Props> = ({ courseId }) => {
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState<boolean>(false);
  const [openTest, setOpenTest] = useState<boolean>(false);

  const toggleSection = (section: string) => {
    switch (section) {
      case "description":
        setOpenDescription(!openDescription);
        break;
      case "sections":
        setOpenSections(!openSections);
        break;
      case "test":
        setOpenTest(!openTest);
        break;
      default:
        break;
    }
  };

  console.log("AccodrionMiddle2 courseId: ", courseId);
  const charsLeft = 150;
  return (
    <div>
      <Accordion
        open={openDescription}
        icon={<Icon id={1} open={openDescription ? 1 : 0} />}
      >
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-accentd font-bold text-primaryd"
          onClick={() => toggleSection("description")}
        >
          Course Description
        </AccordionHeader>
        <AccordionBody className="rounded-5xl content-center justify-center border-4 bg-lightsecondaryd">
          {/* <HeaderBody /> */}
          <HeaderBody2 courseId={courseId} charsLeft={charsLeft} />
        </AccordionBody>
      </Accordion>

      {/* =======================================> Course Sections <================================================== */}

      <Accordion
        open={openSections}
        icon={<Icon id={2} open={openSections ? 2 : 0} />}
      >
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-accentd font-bold text-primaryd"
          onClick={() => toggleSection("sections")}
        >
          Course Sections
        </AccordionHeader>

        <br />
        <AccordionBody className="rounded-5xl  content-center justify-center border-4  bg-lightsecondaryd">
          <CourseSectionPlaceholder />
        </AccordionBody>
      </Accordion>

      {/* =======================================> Course Test <=============================================== */}

      <Accordion open={openTest} icon={<Icon id={3} open={openTest ? 3 : 0} />}>
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-accentd font-bold text-primaryd"
          onClick={() => toggleSection("test")}
        >
          Course Test
        </AccordionHeader>
        <br />
        <AccordionBody className="rounded-5xl  content-center justify-center border-4  bg-lightsecondaryd">
          <QuestionsList courseId={courseId} />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default AccordionMiddle2;
