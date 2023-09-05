import React from "react";
interface InputAnswerProps {
  placeholder: string;
  name?: string;
  id?: string;
  type: string;
  value?: string | number | undefined;
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  charsLeft: number;
}
const InputAnswer: React.FC<InputAnswerProps> = ({
  type,
  placeholder,
  onChange,
  name,
  charsLeft,
  value,
}) => {
  // const sanitizedValue = value !== null ? value : '';

  return (
    <div>
      <div className="flex flex-col ">
        <span className="ml-3 mt-0 font-bold text-accentd">⁝⁝ Answer</span>
        <div className="stretch flex-start flex flex-row items-center ">
          <input
            type={type}
            placeholder={placeholder}
            className="newAnswer input input-bordered m-2 w-full max-w-xl rounded-sm shadow-inner  "
            name={name}
            onChange={onChange}
            value={value}
          />
          <input
            type="checkbox"
            className="checkbox form-control h-12 w-12 rounded-sm shadow-inner "
          />
        </div>
        <span className="ml-3 mt-0">Characters left: {charsLeft}</span>
      </div>
    </div>
  );
};
export default InputAnswer;
