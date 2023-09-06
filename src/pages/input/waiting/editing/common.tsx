"use client";

import React from "react";
import { Header } from "~/componentsRoot/Header";
import Rpannel from "~/componentsRoot/Rpannel";
import AccordionMiddle2 from "~/pages/components/elenasComponents/AccordionMiddle2";
import LpannelPlaceholder from "~/pages/components/elenasComponents/LpannelPlaceholder";
import { useSearchParams } from "next/navigation";

const Common = () => {
  const params = useSearchParams();
  const courseId = params.get("editCourseId") ?? "";
  console.log("common.tsx courseId: ", courseId);
  return (
    <div className="relative">
      <Header />
      <div className="flex pl-10 pr-10 ">
        <div className="w-20 flex-none ">L Pannel</div>
        <div className="w-45  grow">
          <AccordionMiddle2 courseId={courseId} />
        </div>
        <div className="w-25 flex-none ">
          <LpannelPlaceholder />
        </div>
        <div className="w-25 top-15 fixed right-8 flex-none">
          <Rpannel />
        </div>
      </div>
    </div>
  );
};

export default Common;

// input/waiting/editing/common
