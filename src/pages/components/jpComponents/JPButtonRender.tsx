import React from "react";
import { useState } from "react";
import FirstButtons from "./QButtons.tsx/FirstButtons";
import SecondButtons from "./QButtons.tsx/SecondButtons";
import Image from "next/image";

const JPButtonRender = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (!showMore) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    // <div className="mb-4 flex h-96 flex-row items-center justify-center rounded-lg bg-gradient-to-b from-[#075985] to-[#7dd3fc]">
    <div className="from-cyan-500 mb-4 flex h-96 flex-row items-center justify-center rounded-lg bg-gradient-to-r to-blue-500">
      <div className="h-62 mb-4 flex  shrink-0 flex-row items-center justify-center rounded-lg bg-white">
        {!showMore && <FirstButtons />}
        {showMore && <SecondButtons />}
        <button
          onClick={handleClick}
          className="h-16 rounded-lg border-4 border-white bg-[#38bdf8] p-1"
        >
          <Image
            src="/fwdArrow.png"
            alt="arrow = next"
            height="20"
            width="20"
          />
        </button>
      </div>
    </div>
  );
};

export default JPButtonRender;
