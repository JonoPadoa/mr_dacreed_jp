// https://flowbite.com/docs/components/accordion/
import React from 'react'
import { Accordion } from 'flowbite';
import 'flowbite';
// const accordionItems: {
//   id: string;
//   triggerEl: Element | null;
//   targetEl: Element | null;
//   active: boolean;
// }[] = [];
// const accordion = new Accordion(accordionItems, options);

// // create an array of objects with the id, trigger element (eg. button), and the content element
// const accordionItems = [
//   {
//       id: 'accordion-example-heading-1',
//       triggerEl: document.querySelector('#accordion-example-heading-1'),
//       targetEl: document.querySelector('#accordion-example-body-1'),
//       active: true
//   },
//   {
//       id: 'accordion-example-heading-2',
//       triggerEl: document.querySelector('#accordion-example-heading-2'),
//       targetEl: document.querySelector('#accordion-example-body-2'),
//       active: false
//   },
//   {
//       id: 'accordion-example-heading-3',
//       triggerEl: document.querySelector('#accordion-example-heading-3'),
//       targetEl: document.querySelector('#accordion-example-body-3'),
//       active: false
//   }
// ];

// // options with default values
// const options = {
//   alwaysOpen: true,
//   activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
//   inactiveClasses: 'text-gray-500 dark:text-gray-400',
//   onOpen: (item) => {
//       console.log('accordion item has been shown');
//       console.log(item);
//   },
//   onClose: (item) => {
//       console.log('accordion item has been hidden');
//       console.log(item);
//   },
//   onToggle: (item) => {
//       console.log('accordion item has been toggled');
//       console.log(item);
//   },
// };

const AccordionMiddle = () => {
  return (
    <div>AccordionMiddle
        
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      <p className="mb-4 text-gray-500 dark:text-gray-400">What are the differences between Flowbite and Tailwind UI?</p>
      {/* <!-- Nested accordion --> */}
      <div id="accordion-nested-collapse" data-accordion="collapse">
        <h2 id="accordion-nested-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-nested-collapse-body-1" aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
            <span>Open source</span>
           <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-nested-collapse-body-1" className="hidden" aria-labelledby="accordion-nested-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
          </div>
        </div>
        <h2 id="accordion-nested-collapse-heading-2">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-nested-collapse-body-2" aria-expanded="false" aria-controls="accordion-nested-collapse-body-2">
            <span>Architecture</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-nested-collapse-body-2" className="hidden" aria-labelledby="accordion-nested-collapse-heading-2">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
          </div>
        </div>
        <h2 id="accordion-nested-collapse-heading-3">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-nested-collapse-body-3" aria-expanded="false" aria-controls="accordion-nested-collapse-body-3">
            <span>Can I use both?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-nested-collapse-body-3" className="hidden" aria-labelledby="accordion-nested-collapse-heading-3">
          <div className="p-5 border border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">We actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
              <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End: Nested accordion --> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default AccordionMiddle