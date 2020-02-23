import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { forwardRef, Fragment, useContext } from "react";
import ExamContext from "../../ExamContext";
import SquareUnit from "./SquareUnit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    marginBottom: theme.spacing(1)
  }
}));

const Overview = forwardRef((props, ref) => {
  const context = useContext(ExamContext);
  const classes = useStyles();

  return (
    <Fragment>
      <p>正误漏一览表</p>
      <div className={classes.root}>
        <Grid container xs={12} spacing={2} ref={ref}>
          {context.globalData.map((element, index) => (
            <SquareUnit
              params={{
                answerStandard: element.answerStandard,
                answerUser: element.answerUser,
                number: element.number
              }}
            />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
});

export default Overview;
