import React, { useState, useEffect } from "react";
import { QuizAppActions } from "../../QuizApp/reducer";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducers";
import QuestionCard from "../../QuizApp/Subcomponents/QuestionCard";
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

  useEffect(() => {
    if (fetchingQuizSagaRequest || quizQuestions.length) return;
    dispatch(QuizAppActions.fetchQuizSagaRequest());
  }, [dispatch, fetchingQuizSagaRequest, quizQuestions.length]);

  const { category, question } = quizQuestions?.[currentStep] || {};

  if (currentStep && currentStep === quizQuestions.length) {
    dispatch(QuizAppActions.setUserResponses(userResponses));
    return <Redirect to="/results" />;
  }

  return (
    <Fade>
      <div>
        <Typography gutterBottom variant="h3" align="center">
          {category}
        </Typography>
        <QuestionCard
          question={question}
          category={category}
          options={[{ value: "False" }, { value: "True" }]}
          onAnswer={(val) => {
            setUserResponses((prevResponses) => [...prevResponses, val]);
            dispatch(QuizAppActions.increaseCurrentStep());
          }}
        />
      </div>
    </Fade>
  );
};

export default React.memo(QuizPage);
