import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
import ListComponent from "./ListComponent";

const Question1: React.FC = () => {
  const [components, setComponents] = useState(["1"]);
const [componentNames, setComponentNames] = useState<string[]>(['3','4','5']);
 

function addComponent() {
  if (componentNames.length > 0) {
    setComponents([...components, componentNames[0]]);
    componentNames.splice(0, 1);
  } else {
    window.alert("No more components to add");
  }
}

  const getaddAnswerData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const u = { [name]: value };
    const mutation = api.POSTAPI.createTestString.useMutation();
    mutation.mutate({ testInput: value });
  };

  return (
    <div>
      <div style={{ backgroundColor: "#B9CCC8" }}>
        <InputQuestion
          placeholder="question"
          type="text"
          // onChange={getaddAnswerData}
          name="answer1"
        />
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <InputAnswer
              placeholder="answer 1"
              type="text"
              // onChange={getaddAnswerData}
              name="answer1"
            />
          </div>
          <div>
            <InputAnswer
              placeholder="answer 2"
              type="text"
              // onChange={getaddAnswerData}
              name="answer2"
            />
          </div>
          <div className="newAnswersPlaceholder">
            {components.map((item: string, i: number) => (
              <ListComponent
                key={i}
                text={item}
              />
            ))}

            <ButtonAdd onClick={addComponent} text="Call Component" />
          </div>
          <label className="label">
            <span className="label-text pl-2 font-semibold">Delete</span>
          </label>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt font-semibold">Re-generate</span>
          </label>
        </div>
      </div>
    </div>
  );
};



export default Question1;
// function setAddAnswer(_arg0: (prev: { [key: string]: any }) => any) {
//   throw new Error("Function not implemented.");
// }

