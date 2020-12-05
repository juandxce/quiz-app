import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducers";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import parse from "html-react-parser";
import ReplayIcon from "@material-ui/icons/Replay";
import { QuizAppActions } from "../../QuizApp/reducer";
import { RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles({
  correct: {
    backgroundColor: "rgba(117, 201, 84, 0.15)",
  },
  incorrect: {
    backgroundColor: "rgba(193, 66, 66, 0.15)",
  },
  listItem: {
    border: "1px solid #888",
    margin: "1vw 0",
    borderRadius: "10px",
  },
  spacer: {
    margin: "2vw auto",
    textAlign: "center",
  },
});

const ResultsPage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { quizQuestions, userResponses } = useSelector(
    (state: IState) => state.QuizApp
  );

  const correctAnswersCount = userResponses.reduce(
    (prevVal, currVal, index) => {
      if (quizQuestions[index].correct_answer === currVal) {
        return prevVal + 1;
      }
      return prevVal;
    },
    0
  );

  return (
    <div className={classes.spacer}>
      <Typography gutterBottom variant="h5" component="h2">
        You Scored
        <br />
        {`${correctAnswersCount}/${quizQuestions.length}`}
      </Typography>
      <List dense>
        {quizQuestions.map((questionOBJ, index) => {
          const isCorrect = questionOBJ.correct_answer === userResponses[index];
          return (
            <ListItem
              className={`${classes.listItem} ${
                isCorrect ? classes.correct : classes.incorrect
              }`}
            >
              <ListItemText
                primary={parse(questionOBJ.question)}
                secondary={
                  isCorrect
                    ? ""
                    : `Correct answer: ${questionOBJ.correct_answer} - your answer: ${userResponses[index]}`
                }
              />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<ReplayIcon />}
        onClick={() => {
          dispatch(QuizAppActions.resetToInitialState());
          history.push("/");
        }}
      >
        Play Again?
      </Button>
    </div>
  );
};
export default React.memo(ResultsPage);
