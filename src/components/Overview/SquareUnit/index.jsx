import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center"
  }
}));

const SquareUnit = (props) => {
  const { answerStandard, answerUser, number } = props.params;
  const [color, setColor] = useState("#FFFFFF");
  const classes = useStyles();

  useEffect(() => {
    // 标准答案计数，即 answerStandard 数组长度
    let rightNum = answerStandard.length;
    // 用户答案包含正确选项计数
    let rightCount = 0;
    // 用户答案包含错误选项计数
    let wrongCount = 0;

    // 当勾选了选项时才进行正误判断
    if (answerUser.length > 0) {
      answerUser.map((element) => {
        // 遍历用户答案数组，若能够在标准答案中找到，正确选项计数+1，否则错误选项计数+1
        if (answerStandard.indexOf(element.value) > -1) {
          rightCount++;
        } else {
          wrongCount++;
        }
      });
      // 只有正确选项计数与标准答案计数相等且错误选项计数为 0 时，才显示正确颜色，少选、多选或错选均视为错误
      if (rightCount === rightNum && wrongCount === 0) {
        setColor("#C2C2C2");
      } else {
        setColor("#FF4040");
      }
      // 计数清零
      rightCount = 0;
      wrongCount = 0;
    } else {
      // 没有勾选任何选项，不判断正误，显示默认颜色
      setColor("#FFFFFF");
    }
  }, [answerUser]);

  // 默认初始颜色或没有勾选 #FFFFFF
  // 少选、多选或错选 #FF4040
  // 正确 #C2C2C2
  return (
    <Grid item>
      <Paper style={{ backgroundColor: color }} className={classes.paper}>
        <div style={{ width: "20px" }}>{number}</div>
      </Paper>
    </Grid>
  );
};

export default SquareUnit;
