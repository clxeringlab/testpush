import React, { Fragment, useContext } from "react";
import ExamContext from "../../../ExamContext";

const DataUnit = (props) => {
  const { dataSourceFile } = props.params;
  const context = useContext(ExamContext);

  const handleClick = () => {
    // 清空全局数据 globalData，防止更改题库或重复点击提交时造成数据叠加
    context.dispatchGlobalData({ type: "clear" });

    let formData = new FormData();
    formData.append("avatar", dataSourceFile);

    fetch("http://localhost:3006/receivefile", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        context.dispatchGlobalData({
          type: "init",
          data: response
        });
      });
  };

  return (
    <Fragment>
      <div>
        <button onClick={handleClick}>提交题库文件</button>
      </div>
    </Fragment>
  );
};

export default DataUnit;
