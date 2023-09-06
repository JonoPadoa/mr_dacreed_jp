import React from "react";
import Image from "next/image";

const Rpannel = () => {
  return (
    <div className="container mx-4  flex flex-col bg-midsecondaryd items-center">
      Sections

      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px]">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/cs.svg" className="mr-2 " width={20} height={20} alt={"csIcon"}/>
          <div className="flex flex-col text-left">
            <p>Content</p>
            <p>Section</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
        <Image src="/rPannelIcons/cp.svg" className="mr-2"  width={20} height={20} alt={"cpIcon"}/>
          <div className="flex flex-col text-left">
            <p>Content</p>
            <p>Page</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/ts.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left">
            <p>Test</p>
            <p>Section</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/mc.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left">
            <p>Multi</p>
            <p>choice</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/fiq.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left">
            <p>Fill in </p>
            <p>Question</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/lf.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left ">
            <p>Long</p>
            <p>form</p>
          </div>
        </section>
      </button>



      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/au.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left">
            <p>Assessment</p>
            <p>Upload</p>
          </div>
        </section>
      </button>


      <button className="rounded-lg bg-tertiaryd opacity-25 p-2 text-white hover:opacity-100  my-2  w-[135px] ">
        <section className="flex flex-row items-center">
          <Image src="/rPannelIcons/tsp.svg" className="mr-2 "width={20} height={20} alt="icon" />
          <div className="flex flex-col text-left">
            <p>Test Submit</p>
            <p>page</p>
          </div>
        </section>
      </button>

<Image src="/rPannelIcons/3dots.svg" className="mr-2 "width={20} height={20} alt="icon" />


    </div>
  );
};

export default Rpannel;
