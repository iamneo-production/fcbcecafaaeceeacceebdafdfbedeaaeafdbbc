import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="Button"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
