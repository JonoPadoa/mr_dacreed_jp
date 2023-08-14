import React, { useEffect } from 'react';
// import { Accordion, type AccordionInterface, type AccordionItem, type AccordionOptions } from 'flowbite';
import { type AccordionOptions, type AccordionItem, type AccordionInterface, Accordion } from "flowbite";
import 'flowbite';
import HeaderBody from './HeaderBody';
import Question1 from './Question1';

const AccordionMiddle = () => {
  useEffect(() => {
    //  multiple items based on data from DB 
    
    // const data = [/* data from your database */];
    // const accordionItems: AccordionItem[] = data.map((item, index) => ({
    //   id: `accordion-item-${index}`,
    //   triggerEl: document.querySelector(`#accordion-item-${index}-trigger`) as HTMLElement,
    //   targetEl: document.querySelector(`#accordion-item-${index}-target`) as HTMLElement,
    //   active: index === 0, // set the first item to be active by default
    // }));


    // 3 cards create
    const accordionItems: AccordionItem[] = [
      {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1') as HTMLElement,
        targetEl: document.querySelector('#accordion-example-body-1') as HTMLElement,
        active: true,
      },
      {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2') as HTMLElement,
        targetEl: document.querySelector('#accordion-example-body-2') as HTMLElement,
        active: false,
      },
      {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3') as HTMLElement,
        targetEl: document.querySelector('#accordion-example-body-3') as HTMLElement,
      },
    ];

    const options: AccordionOptions = {
      alwaysOpen: true,
      activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
      inactiveClasses: 'text-gray-500 dark:text-gray-400',
      onOpen: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been shown');
        console.log(item);
      },
      onClose: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been hidden');
        console.log(item);
      },
      onToggle: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been toggled');
        console.log(item);
      },
    };


    // // Cleanup the accordion instance when the component unmounts
    return () => {
      console.log ('the last return');
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>AccordionMiddle + 5 icons
        
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1 " >
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Header</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1 " style={{ backgroundColor: "#B9CCC8" }}>
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <HeaderBody />
      {/* <!-- Nested accordion --> */}
      <div id="accordion-nested-collapse" data-accordion="collapse" >
       
       
       

        <div id="accordion-nested-collapse-body-1" className="hidden" aria-labelledby="accordion-nested-collapse-heading-1" style={{ backgroundColor: "#B9CCC8" }}>
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          </div>
        </div>
      </div>


      {/* <!-- End: Nested accordion --> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Questions</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2" style={{ backgroundColor: "#B9CCC8" }}>
    <div className="p-5 border border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
      <Question1 />
    </div>
  </div>
</div>

    </div>
  )
}

export default AccordionMiddle




// create an accordion with multiple items based on data from your database, you can do so by dynamically generating the accordionItems array


// const data = [/* data from your database */];
// const accordionItems: AccordionItem[] = data.map((item, index) => ({
//   id: `accordion-item-${index}`,
//   triggerEl: document.querySelector(`#accordion-item-${index}-trigger`) as HTMLElement,
//   targetEl: document.querySelector(`#accordion-item-${index}-target`) as HTMLElement,
//   active: index === 0, // set the first item to be active by default
// }));
// const options: AccordionOptions = {
//   // ...
// };
// const accordion: AccordionInterface = new Accordion(accordionItems, options);