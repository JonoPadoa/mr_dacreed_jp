import React, { useEffect, useRef, useMemo } from "react";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const Modal2 = () => {
  const $buttonElement = useRef<HTMLElement | null>(null);
  const $modalElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    $buttonElement.current = document.querySelector("#button");
    $modalElement.current = document.querySelector("#modal");

    if ($buttonElement.current) {
      $buttonElement.current.addEventListener("click", () => {
        if ($modalElement.current) {
          modal.toggle();
        }
      });
    }

    return () => {
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

  const modalOptions: ModalOptions = useMemo(
    () => ({
      placement: "top-right",
    }),
    []
  );

  const modal: ModalInterface = useMemo(
    () => new Modal($modalElement.current, modalOptions),
    [modalOptions]
  );

  useEffect(() => {
    if ($modalElement.current) {
      modal.show();
    }
  }, [modal]);

  return <div>Modal2</div>;
};

export default Modal2;
