import React, { useReducer, useState } from "react";
import ExamContext from "./ExamContext";
import BasicLayout from "./layouts/BasicLayout";

// answerUser 数组元素结构为 {index:xxx,value:xxx}
// index，选项序号，从 0 开始
// value，对应选项序号英文大写字符串，以大写 A 的 ascii 码为起点，结合选项序号计算得出
const globalDataReducer = (state, action) => {
  switch (action.type) {
    case "write":
      return state.map((element) => {
        if (element.number * 1 === action.number * 1) {
          return {
            ...element,
            answerUser: element.answerUser.concat({
              index: action.index,
              value: String.fromCodePoint(65 + action.index * 1)
            })
          };
        } else {
          return element;
        }
      });
    case "delete":
      return state.map((element) => {
        if (element.number * 1 === action.number * 1) {
          return {
            ...element,
            answerUser: element.answerUser.filter((array) => {
              return array.index * 1 !== action.index * 1;
            })
          };
        } else {
          return element;
        }
      });
    case "init":
      // 将远程数据赋给 state
      return action.data;
    case "clear":
      // 清除 state
      return [];
    default:
      throw new Error();
  }
};

const App = () => {
  // 全局状态，用于保证 Questions 组件的 height 和 Overview 组件的 height 相等
  const [overviewHeight, setOverviewHeight] = useState(0);
  // 全局数据，可在此引入模拟数据便于调试
  const [globalData, dispatchGlobalData] = useReducer(globalDataReducer, []);

  return (
    <ExamContext.Provider
      value={{
        globalData: globalData,
        dispatchGlobalData: dispatchGlobalData,
        overviewHeight: overviewHeight,
        setOverviewHeight: setOverviewHeight
      }}>
      <BasicLayout />
    </ExamContext.Provider>
  );
};

export default App;
