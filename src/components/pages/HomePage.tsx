import React, { useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { QuizAppActions } from "../../QuizApp/reducer";
import { IState } from "../../store/reducers";

const useStyles = makeStyles({
  spacer: {
    margin: "2vw auto",
    textAlign: "center",
  },
  btnTopSpace: { marginTop: "1vw" },
});

const HomePage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fetchingQuizSagaRequest, quizQuestions } = useSelector(
    (state: IState) => state.QuizApp
  );

  useEffect(() => {
    if (fetchingQuizSagaRequest || quizQuestions.length) return;
    dispatch(QuizAppActions.fetchQuizSagaRequest());
  }, [dispatch, fetchingQuizSagaRequest, quizQuestions.length]);

  return (
    <div className={classes.spacer}>
      <Typography variant="h2">Welcome to the Trivia Challenge!</Typography>
      <Typography>
        You will be presented with 10 True or False questions.
      </Typography>
      <Typography>Can you score 100%?</Typography>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          history.push("/start-quiz");
        }}
        size="large"
        className={classes.btnTopSpace}
      >
        Begin
      </Button>
    </div>
  );
};

export default React.memo(HomePage);
