import React from "react";
import Image from "next/image";
// import { ZodErrorMap, string } from "zod";

interface InputGuidance {
  placeholder: string;
  name?: string;
  id?: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  charsLeft?: number;
}

const Guidance: React.FC<InputGuidance> = ({
  type,
  onChange,
  name,
  charsLeft,
  value,
}) => {
  return (
    <div>
      <div className="mt-4 flex flex-col">
        <label className="ml-3 mt-0">
          <span className="  font-bold text-accentd">Guidance</span>
        </label>
        <input
          type={type}
          placeholder="add a guidance"
          className="m-2  mt-1  rounded-sm border-none p-2 shadow-inner-top"
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="flex justify-between">
        <span className="ml-3 mt-0">
          Characters left:
          {charsLeft}
        </span>
        {/*     delete icon    */}
        <span className="ml-3 mt-0 flex items-center pr-2 ">
          Delete
          <Image
            src="/icons/delete.png"
            alt="delete"
            className="inline-block h-5 w-5"
            width={5}
            height={5}
          />
        </span>
      </div>
    </div>
  );
};

export default Guidance;
