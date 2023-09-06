import React from "react";
import Image from "next/image";

interface InputQuestion {
  placeholder: string;
  name?: string;
  id?: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  charsLeft?: number;
}
const InputQuestion: React.FC<InputQuestion> = ({
  type,
  placeholder,
  onChange,
  name,
  charsLeft,
  value,
}) => {
  return (
    <div>
      <div className="flex flex-row">
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered m-2  w-full rounded-sm shadow-inner-top "
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="flex justify-between">
        <span className="ml-3 mt-0">Characters left: {charsLeft}</span>
        {/*     delete icon    */}
        <span className="ml-3 mt-0 flex items-center pr-2 ">
          Delete
          <Image
            src="/icons/delete.png"
            alt="delete"
            className=" inline-block"
            width={6}
            height={6}
          />
        </span>
      </div>
    </div>
  );
};

export default InputQuestion;
