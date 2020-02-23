import React, { useContext } from "react";
import ExamContext from "../../../../ExamContext";

const CheckBoxUnit = (props) => {
  const { number, index } = props.params;

  const context = useContext(ExamContext);

  const handleInputChange = (e) => {
    let statue = e.target.checked;
    if (statue === true) {
      context.dispatchGlobalData({ type: "write", number: number, index: index });
    } else {
      context.dispatchGlobalData({ type: "delete", number: number, index: index });
    }
  };

  return <input onChange={handleInputChange} type="checkbox" />;
};

export default CheckBoxUnit;
