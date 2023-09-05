import React, { useRef, useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import UploadImgs from "~/componentsRoot/UploadImgs";
import Modal4 from "~/componentsRoot/Modal4";
import Commentary from "~/componentsRoot/Commentary";
import Guidance from "~/componentsRoot/Guidance";
import { type CourseQuestion } from "@prisma/client";
import Image from "next/image";

const Question1: React.FC<CourseQuestion> = (qa) => {
  return (
    <>
      <div className="bg-lightsecondaryd">
        <QAForm {...qa} />
      </div>
    </>
  );
};

export default Question1;

const QAForm: React.FC<CourseQuestion> = (courseQA) => {
  const [question, setQuestion] = useState(courseQA.question);
  const [answerValues, setAnswerValues] = useState<string[]>(
    [
      courseQA.answer1,
      courseQA.answer2,
      courseQA.answer3,
      courseQA.answer4,
      courseQA.answer5,
      courseQA.answer6,

    ]
    .filter((answer): answer is string => answer !== null)
     // .slice(0, 2)                                              // shows only 2 answers
  );

  const [isModal4Open, setIsModal4Open] = useState(false);
  const [commentary, setCommentary] = useState(courseQA.commentary);
  const [guidance, setGuidance] = useState(courseQA.guidance);
  const [uploadedImgs, setUploadedImgs] = useState<string | null>(null);

  const [showCommentary, setShowCommentary] = useState(false);
  const [showGuidance, setShowGuidance] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  // TODO: to be called onSubmit of 'update' button
  const { mutate: updateQuestionMutation } =
    api.courseQuestion.update.useMutation();

  function updateQuestion() {
    updateQuestionMutation({
      id: courseQA.id,
      question: question ?? "",
      answer1: answerValues[0] ?? "",
      answer2: answerValues[1] ?? "",
      answer3: answerValues[2] ?? "",
      answer4: answerValues[3] ?? "",
      answer5: answerValues[4] ?? "",
      answer6: answerValues[5] ?? "",
      commentary: commentary ?? "",
      guidance: guidance ?? "",
    });
  }

  const [components, setComponents] = useState<string[]>([]);
  const [componentNames, setComponentNames] = useState<string[]>([
    "answer 3",
    "answer 4",
    "answer 5",
    "answer 6",
  ]);

  function addNewAnswer() {
    if (componentNames.length > 0 && componentNames[0]) {
      setComponents([...components, componentNames[0]]);
      setAnswerValues([...answerValues, ""]);
      setComponentNames(componentNames.slice(1));
    } else {
      window.alert("No more answers to add");
    }
  }

  function removeAnswer(idx: number) {
    const newComponents = [...components];
    newComponents.splice(idx, 1);

    const newAnswerValues = [...answerValues];
    newAnswerValues.splice(idx, 1);

    setComponents(newComponents);
    setAnswerValues(newAnswerValues);

    const newComponentNames = [...componentNames];
    newComponentNames.push(`answer ${componentNames.length + 1}`);
    setComponentNames(newComponentNames);
  }
  const handleMediaUpload = (media: string) => {
    setUploadedImgs(media);
    api;
    setIsModal4Open(false);
  };
  // close the Dropdown menu from ADD button
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleCommentaryClick = () => {
    setShowCommentary(true);
    closeDropdown();
  };

  const handleGuidanceClick = () => {
    setShowGuidance(true);
    closeDropdown();
  };

  return (
    <div>
      {/* <span className="ml-3  font-bold text-accentd">Question 1</span> */}

      <div className="flex flex-col ">
        <span className="ml-3  font-bold text-accentd"> ⁝⁝ Question 1</span>
        <div>
          {/* question */}
          <div>
            <InputQuestion
              placeholder="question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              charsLeft={question ? 150 - question.length : 150}
            />
          </div>

          {/* answers */}
          <div>
            <div className="newAnswersPlaceholder grid grid-cols-2 gap-4">
            {answerValues.map((value, i) => (               
               <div key={i} className="flex w-full flex-col">
                  <div className="relative">
                    <div>
                      <InputAnswer
                        placeholder={`answer ${i + 1}`}
                        type="text"
                        onChange={(e) => {
                          const newAnswerValues = [...answerValues];
                          newAnswerValues[i] = e.target.value;
                          setAnswerValues(newAnswerValues);
                        }}
                        value={value}
                        text={`answer ${i + 1}`}
                        charsLeft={value ? 150 - value.length : 150}
                      />
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <button
                        type="button"
                        onClick={() => removeAnswer(i)}
                        className="text-black-500 mt-2 flex items-center pr-20"
                      >
                        Delete
                        <Image
                          src="/icons/delete.png"
                          alt="delete"
                          className="inline-block "
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>


{/* Commentary */}
            <div>  {showCommentary && (
        <Commentary
          placeholder=""
          type="text"
          value={commentary ?? ""}
          onChange={(e) => setCommentary(e.target.value)}
          charsLeft={commentary ? 150 - commentary.length : 150}
        />
      )}</div>


{/* Guidance */}
              {showGuidance && (
        <Guidance
          placeholder=""
          type=""
          onChange={(e) => setGuidance(e.target.value)}
          value={guidance ?? ""}
          charsLeft={guidance ? 150 - guidance.length : 150}
        />
      )}

          </div>
          <button
            className="mt-4 w-1/3 rounded-md bg-blue-500/75 px-4 py-2 text-white hover:bg-green-800"
            type="submit"
            value="update"
            onClick={updateQuestion}
          >
            Update
          </button>
        </div>

        {/* add uploaded image here */}
        <div className="flex  items-center justify-center ">
          {uploadedImgs && (
            <div className="max-w-screen-2xl px-[20%]">
              {/* <img src={uploadedImgs} alt="Uploaded" /> */}

              <Image src={uploadedImgs} alt="Uploaded" width={200} height={400} />

            </div>
          )}
        </div>
        {/* Add button */}

        <div className="w-82 dropdown-top dropdown flex content-center justify-center rounded-sm ">
          <label tabIndex={0} className=" m-1 flex flex-row items-center " onClick={() => setIsDropdownOpen(prevState => !prevState)} >

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
          <ul
            tabIndex={0}

            className={`menu dropdown-content z-[1] bg-base-100 p-2 shadow ${
              isDropdownOpen ? "dropdown-open" : ""
            }`}          >

            <li>
              <section className="flex flex-row" onClick={addNewAnswer}>
                <Image
                  width={20}
                  height={20}
                  src="/icons/answers.png"
                  alt="answer"
                  className="mr-2 inline-block h-8 w-8"
                />
                <div>
                  <a className="font-bold"> Answers </a>
                  <p>Add more answer boxes</p>
                </div>
              </section>
            </li>

            <li>
              <section
                className="flex flex-row"
                onClick={() => setIsModal4Open(true)}
              >
                <Image
                  width={20}
                  height={20}
                  src="/icons/media.png"
                  alt="answer"
                  className="mr-2 inline-block h-8 w-8"
                />
                <div>
                  <a className="font-bold">Media</a>
                  <p>Upload or embed with a link</p>
                </div>
              </section>
            </li>

            <li>
              {/* onClick => to add Commentary component */}
              <section
                className="flex flex-row"
                // onClick={() => setIsModal4Open(true)}
                onClick={() => {
                  setShowCommentary(true);
                  closeDropdown(); // Close the dropdown after clicking
                }}

              >
                <Image
                  width={20}
                  height={20}
                  src="/icons/commentary.png"
                  alt="answer"
                  className="mr-2 inline-block h-8 w-8"
                />
                <div>
                  <a className="font-bold">Commentary</a>
                  <p>Add commentary for course</p>
                </div>
              </section>
            </li>

            <li>
              {/* onClick => to add Guidance component */}
              <section
                className="flex flex-row"
                // onClick={() => setIsModal4Open(true)}

                onClick={() => {
                  setShowGuidance(true);
                  closeDropdown(); // Close the dropdown after clicking
                }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/icons/guidance.png"
                  alt="answer"
                  className="mr-2 inline-block h-8 w-8"
                />
                <div>
                  <a className="font-bold">Guidance</a>
                  <p>Add guidance for course</p>
                </div>
              </section>
            </li>
          </ul>
        </div>

        {isModal4Open && (
          <Modal4 onClose={() => setIsModal4Open(false)} isVisible={true}>
            <UploadImgs onMediaUpload={handleMediaUpload} />
          </Modal4>
        )}
      </div>
    </div>
  );
};
