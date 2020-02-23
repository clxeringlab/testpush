import React, { useState, Fragment } from "react";
import CheckBoxUnit from "./CheckBoxUnit";

const ChoiceUnit = (props) => {
  const { number, content, options, answerStandard } = props.params;

  const [display, setDisplay] = useState("none");

  const handleAnswerShow = () => {
    setDisplay(display === "none" ? "inline" : "none");
  };

  return (
    <Fragment>
      <div>
        {number}
        {content}
      </div>
      {options.map((item, index) => (
        <div>
          <CheckBoxUnit params={{ number: number, index: index }} />
          {item}
        </div>
      ))}
      <button onClick={handleAnswerShow}>查看本题答案</button>
      {answerStandard.map((item) => (
        <span style={{ display: display }}>{item}</span>
      ))}
    </Fragment>
  );
};

export default ChoiceUnit;
