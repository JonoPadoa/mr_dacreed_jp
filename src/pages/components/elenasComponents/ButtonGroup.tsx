import React from "react";

interface ButtonGroupProps {
  onSelect: (content: string) => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ onSelect }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <p>Question Type</p>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content =
              "Displaying the content of the material here with an onClick"; // Change this to the desired content for this button
            onSelect(content);
          }}
        >
          Multiple Choice
        </button>

        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Open-Ended";
            onSelect(content);
          }}
        >
          Open-Ended
        </button>

        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = " Drag/Drop";
            onSelect(content);
          }}
        >
          Drag/Drop
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "True/False";
            onSelect(content);
          }}
        >
          True/False
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Sequence";
            onSelect(content);
          }}
        >
          Sequence
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Multimedia";
            onSelect(content);
          }}
        >
          Multimedia
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;

// ==============================================================
{
  /* <button className="btn" onClick={() => setMultipleChoiceClicked(!isMultipleChoiceClicked)}>
          Multiple Choice
        </button>
        {isMultipleChoiceClicked && <div>Multiple Choice</div>}

        <button className="btn" onClick={() => setOpenEndedClicked(!isOpenEndedClicked)}>
          Open-ended
        </button>
        {isOpenEndedClicked && <div>Open-ended</div>}

        <button className="btn" onClick={() => setDragDropClicked(!isDragDropClicked)}>
          Drag/Drop
        </button>
        {isDragDropClicked && <div>Drag/Drop</div>}

        <button className="btn" onClick={() => setTrueFalseClicked(!isTrueFalseClicked)}>
          True/False
        </button>
        {isTrueFalseClicked && <div>True/False</div>}

        <button className="btn" onClick={() => setSequenceClicked(!isSequenceClicked)}>
          Sequence
        </button>
        {isSequenceClicked && <div>Sequence</div>}

        <button className="btn" onClick={() => setMultimediaClicked(!isMultimediaClicked)}>
          Multimedia
        </button>
        {isMultimediaClicked && <div>Multimedia</div>} */
}
