import React, { useState, useEffect } from "react";
import { QuizAppActions } from "../../reducer";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../store/reducers";
import QuestionCard from "../Subcomponents/QuestionCard";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import Fade from "react-reveal/Fade";

const QuizPage: React.FunctionComponent<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const { fetchingQuizSagaRequest, currentStep, quizQuestions } = useSelector(
    (state: IState) => state.QuizApp
  );
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [cardFader, setCardFader] = useState(true);
  const { category, question } = quizQuestions?.[currentStep] || {};

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
    console.log("cardFader", cardFader);
    if (cardFader) return;
    showCardFader();
  }, [cardFader]);

  if (currentStep && currentStep === quizQuestions.length) {
    dispatch(QuizAppActions.setUserResponses(userResponses));
    return <Redirect to="/results" />;
  }

  return (
    <div>
      {cardFader && (
        <Fade>
          <Typography gutterBottom variant="h4" align="center">
            {category}
          </Typography>
          <QuestionCard
            question={question}
            category={category}
            options={[{ value: "False" }, { value: "True" }]}
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
