import React, { useEffect, useRef, useMemo } from "react";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const Modal2 = () => {
  const $buttonElement = useRef<HTMLElement | null>(null);
  const $modalElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Assign the elements inside the useEffect hook to ensure they are available after the component mounts
    $buttonElement.current = document.querySelector("#button");
    $modalElement.current = document.querySelector("#modal");

    if ($buttonElement.current) {
      $buttonElement.current.addEventListener("click", () => {
        if ($modalElement.current) {
          modal.toggle();
        }
      });
    }

    // Clean up the event listener when the component unmounts
    return () => {
      // const modal: ModalInterface = useMemo(() => new Modal($modalElement.current, modalOptions), [modalOptions]);
      if ($buttonElement.current) {
        $buttonElement.current.removeEventListener("click", () => {
          if ($modalElement.current) {
            modal.toggle();
          }
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalOptions: ModalOptions = useMemo(() => ({
    placement: "top-right",
  }), []);

  const modal: ModalInterface = useMemo(() => new Modal($modalElement.current, modalOptions), [modalOptions]);

  // Show the modal inside the useEffect hook as well
  useEffect(() => {
    if ($modalElement.current) {
      modal.show();
    }
  }, [modal]);

  return <div>Modal2</div>;
};

export default Modal2;



















// import React, { useEffect } from "react";
// import { Modal } from "flowbite";
// import type { ModalOptions, ModalInterface } from "flowbite";

// const Modal2 = () => {
//   // Declare the variables first
//   let $buttonElement: HTMLElement | null;
//   let $modalElement: HTMLElement | null;

//   useEffect(() => {
//     // Assign the elements inside the useEffect hook to ensure they are available after the component mounts
//     $buttonElement = document.querySelector("#button");
//     $modalElement = document.querySelector("#modal");

//     if ($buttonElement) {
//       $buttonElement.addEventListener("click", () => {
//         if ($modalElement) {
//           modal.toggle();
//         }
//       });
//     }

//     // Clean up the event listener when the component unmounts
//     return () => {
//       if ($buttonElement) {
//         $buttonElement.removeEventListener("click", () => {
//           if ($modalElement) {
//             modal.toggle();
//           }
//         });
//       }
//     };
//   }, []);

//   const modalOptions: ModalOptions = {
//     placement: "top-right",
//   };
//   const modal: ModalInterface = new Modal($modalElement, modalOptions);

//   // Show the modal inside the useEffect hook as well
//   useEffect(() => {
//     if ($modalElement) {
//       modal.show();
//     }
//   }, [$modalElement, modal]);

//   return <div>Modal2</div>;
// };

// export default Modal2;






























// import React from "react";
// import { Modal } from "flowbite";
// import type { ModalOptions, ModalInterface } from "flowbite";

// const Modal2 = () => {
//   const modalOptions: ModalOptions = {
//     placement: "top-right",
//   };
//   const modal: ModalInterface = new Modal($modalElement, modalOptions);

//   const $buttonElement: HTMLElement = document.querySelector("#button");
//   const $modalElement: HTMLElement = document.querySelector("#modal");
//   $buttonElement.addEventListener("click", () => modal.toggle());
//   modal.show();
//   return <div>Modal2</div>;
// };

// export default Modal2;
