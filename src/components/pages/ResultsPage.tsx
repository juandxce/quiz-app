import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducers";

export default function ResultsPage() {
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
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h2">
        You Scored
        <br />
        {`${correctAnswersCount}/${quizQuestions.length}`}
      </Typography>
    </React.Fragment>
  );
}
