import React from "react";

const ButtonAdd = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <div>
      <button
        className="AddButton btn ml-2 w-40 rounded-sm shadow-inner shadow-md"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonAdd;
