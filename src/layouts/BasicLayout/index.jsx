import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { createRef, useContext, useEffect } from "react";
import FileOperation from "../../components/FileOperation";
import Overview from "../../components/Overview";
import Questions from "../../components/Questions";
import ExamContext from "../../ExamContext";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    marginBottom: theme.spacing(1)
  }
}));

const BasicLayout = () => {
  const classes = useStyles();
  const context = useContext(ExamContext);
  // 获得 Overview 组件的 ref
  const getRef = createRef();

  useEffect(() => {
    const { current } = getRef;
    const interval = setInterval(() => {
      // 每间隔 500ms 将 Overview 组件当前的 height 值传给全局状态供 Questions 组件使用
      // 两者的 height 值大约相差 25px
      context.setOverviewHeight(current.clientHeight - 25);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={10}>
        {/* 页面顶部图片 */}
        <Header />
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          {/* 试题文件操作区域 */}
          <FileOperation />
          {/* 题目展示区 */}
          <Questions />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          {/* 放置概览区 */}
          <Overview ref={getRef} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BasicLayout;
