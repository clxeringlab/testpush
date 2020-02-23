import React, { useContext } from "react";
import ExamContext from "../../ExamContext";
import ChoiceUnit from "./ChoiceUnit";

const Questions = () => {
  const context = useContext(ExamContext);

  return (
    <div style={{ marginTop: "20px", height: context.overviewHeight, overflow: "scroll" }}>
      {context.globalData.map((element) => (
        <ChoiceUnit params={element} />
      ))}
    </div>
  );
};

export default Questions;
