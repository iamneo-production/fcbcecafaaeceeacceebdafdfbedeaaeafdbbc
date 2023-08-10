import React, { useState } from "react";
import Button from "../Button/Button";

const Card = (props) => {
  const ans = props.answer;
  const [disabled, setDisabled] = useState(false);

  const check = (a) => {
    setDisabled(true);
    if (a === ans) {
      props.attempt(true);
    }
  };

  return (
    <div className="card">
      <h4>{props.question}</h4>
      <div className="Button">
        <Button
          disabled={disabled}
          onClick={() => check(props.options.option1)}
        >
          {props.options.option1}
        </Button>
        <Button
          disabled={disabled}
          onClick={() => check(props.options.option2)}
        >
          {props.options.option2}
        </Button>
        <Button
          disabled={disabled}
          onClick={() => check(props.options.option3)}
        >
          {props.options.option3}
        </Button>
        <Button
          disabled={disabled}
          onClick={() => check(props.options.option4)}
        >
          {props.options.option4}
        </Button>
      </div>
    </div>
  );
};

export default Card;
