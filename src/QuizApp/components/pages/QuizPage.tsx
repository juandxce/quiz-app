import React, { useState, useEffect } from "react";
import { QuizAppActions } from "../../reducer";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../store/reducers";
import QuestionCard from "../Subcomponents/QuestionCard";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { shuffleArray } from "../../../utils/utils";

const useStyles = makeStyles({
  spacer: {
    margin: "2vw auto",
    textAlign: "center",
  },
});

const QuizPage: React.FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fetchingQuizSagaRequest, currentStep, quizQuestions } = useSelector(
    (state: IState) => state.QuizApp
  );
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [cardFader, setCardFader] = useState(true);
  const { category, question, correct_answer, incorrect_answers = [] } =
    quizQuestions?.[currentStep] || {};

  useEffect(() => {
    if (fetchingQuizSagaRequest || quizQuestions.length) return;
    dispatch(QuizAppActions.fetchQuizSagaRequest());
  }, [dispatch, fetchingQuizSagaRequest, quizQuestions.length]);

  const showCardFader = () => {
    setTimeout(() => {
      setCardFader(true);
    }, 100);
  };
  useEffect(() => {
    if (cardFader) return;
    showCardFader();
  }, [cardFader]);

  if (currentStep && currentStep === quizQuestions.length) {
    dispatch(QuizAppActions.setUserResponses(userResponses));
    return <Redirect to="/results" />;
  }

  const options = [
    { value: correct_answer },
    ...incorrect_answers.map((value) => ({ value })),
  ];

  return (
    <div className={classes.spacer}>
      {cardFader && (
        <Fade>
          <Typography gutterBottom variant="h4" align="center">
            {`Category: ${category}`}
            <br />
            {`Question: ${currentStep}/${quizQuestions.length}`}
          </Typography>
          <QuestionCard
            question={question}
            category={category}
            options={shuffleArray(options)}
            onAnswer={(val) => {
              setCardFader(false);
              setUserResponses((prevResponses) => [...prevResponses, val]);
              dispatch(QuizAppActions.increaseCurrentStep());
            }}
          />
        </Fade>
      )}
    </div>
  );
};

export default React.memo(QuizPage);
