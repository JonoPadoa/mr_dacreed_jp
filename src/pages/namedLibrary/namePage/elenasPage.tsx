import React from "react";
import TextEditor from "./../../components/elenasComponents/TextEditor";
import TextWave from "./../../components/elenasComponents/TextWave";
import Bird from "./../../components/elenasComponents/Bird";
import Link from "next/link";
import Buttons1 from "./../../components/elenasComponents/Buttons1";
import Textarea from "~/pages/components/elenasComponents/Textarea";
import SmallStaff from "~/pages/components/elenasComponents/smallStaff";


const elenasPage = () => {

  return (
    <div className="bg-sky-100">
      <h1>Elenas Components</h1>
      <br />
      <Link href="/">Link to Home Page</Link>

      <br />
      <TextEditor content={""} />
      <TextWave />
      <br></br>
      <Bird />
      <br></br>
      <Buttons1 />
      <Textarea />
      <SmallStaff />

    </div>
  );
};

export default elenasPage;
