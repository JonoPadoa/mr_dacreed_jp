import React , {useState} from "react";

const PreviewScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    function modalClose(key: string) {
        setIsOpen(true);
        const modalElement = document.getElementById(key) as HTMLDialogElement | null;
        if (modalElement) {
          const dialogContent = modalElement.children[0] as HTMLElement;
          dialogContent.classList.remove("opacity-100");
          dialogContent.classList.add("opacity-0");
          setTimeout(function () {
            modalElement.close();
            document.body.removeAttribute("style");
          }, 100);
        }
      }
  return (
    <div>
      PreviewScreen
      <dialog
        id="mymodalcentered"
        className="relative z-0 h-screen w-screen bg-transparent"
      >
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50 p-7 opacity-0 transition-opacity duration-300">
          <div className="relative flex w-1/2 rounded-lg bg-white">
            <div className="flex flex-col items-start">
              <div className="flex w-full items-center p-7">
                <div className="text-lg font-bold text-gray-900">
                  Modal Centered
                </div>
                <svg
                  onClick={() => modalClose("mymodalcentered")}
                  className="ml-auto h-5 w-5 cursor-pointer fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>

              <div className="max-h-2 overflow-y-auto overflow-x-hidden px-7">
                <p>First Line</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>Last Line</p>
              </div>

              <div className="flex w-full items-center justify-end p-7">
                <button
                  type="button"
                  className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Ok
                </button>
                <button
                  type="button"
                  onClick={() => modalClose("mymodaltop")}
                  className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <dialog
        id="mymodaltop"
        className="relative z-0 h-screen w-screen bg-transparent"
      >
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-start justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 p-7 opacity-0 transition-opacity duration-300">
          <div className="relative flex w-1/2 rounded-lg bg-white">
            <div className="flex flex-col items-start">
              <div className="flex w-full items-center p-7">
                <div className="text-lg font-bold text-gray-900">Modal Top</div>
                <svg
                  onClick={() => modalClose("mymodaltop")}
                  className="ml-auto h-5 w-5 cursor-pointer fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>

              <div className="px-7">
                <p>First Line</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>Last Line</p>
              </div>

              <div className="flex w-full items-center justify-end p-7">
                <button
                  type="button"
                  className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Ok
                </button>
                <button
                  type="button"
                  onClick={() => modalClose("mymodaltop")}
                  className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PreviewScreen;
