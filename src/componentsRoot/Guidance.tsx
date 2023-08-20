

import React from "react";
import { ZodErrorMap, string } from "zod";

interface InputGuidance {
  placeholder: string;
  name?: string;
    id?: string;
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    charsLeft?: number;
}

const Guidance: React.FC<InputGuidance> = ({type, onChange, name, charsLeft }) => {
  return (
    <div>
      <div className="mt-4 flex flex-col">
        <label className="ml-3 mt-0">
          <span className="  font-bold text-accentd">Guidance</span>
        </label>
        <input
          type={type}
          placeholder="add a guidance"
          className="m-2  mt-1  rounded-sm p-2 shadow-inner-top border-none"
           name={name}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-between">
        <span className="ml-3 mt-0">
          Characters left:
           {charsLeft} 
        </span>
{/*     delete icon    */}
        <span className="ml-3 mt-0 pr-2 flex items-center ">Delete
        <img src="/icons/delete.png" alt="delete" className="w-5 h-5 inline-block" />
         </span>
       
      </div>
    </div>
  );
};

export default Guidance;
