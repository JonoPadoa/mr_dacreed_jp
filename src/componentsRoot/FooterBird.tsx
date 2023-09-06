import React from "react";
import Image from "next/image";
interface FooterBirdProps {
  height: number;
}

const FooterBird = ({ height }: FooterBirdProps) => {
  return (
    <div
      className="mr-2 w-full  pt-5   text-gray-800 shadow-inner-top"
      style={{ height: `${height}px` }}
    >
      <div className="    flex w-screen flex-row justify-center text-center">
        <h1 className="font-bold text-accentd">Continuous learning</h1>
        <h1
          className="
         ml-2 font-bold
         text-gray-300 
         drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
      "
        >
          solutions for people
        </h1>
        <Image
          src="/birdM_1.png"
          className="ml-1 pb-2 "
          width={20}
          height={20}
          alt={"bird"}
        />
      </div>
    </div>
  );
};

export default FooterBird;
