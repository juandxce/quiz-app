import React, { useState, useEffect } from "react";
import { QuizAppActions } from "../../QuizApp/reducer";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducers";
import QuestionCard from "../../QuizApp/Subcomponents/QuestionCard";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";

function QuizPage() {
  const dispatch = useDispatch();
  const quizQuestions = useSelector(
    (state: IState) => state.QuizApp.quizQuestions
  );
  const currentStep = useSelector((state: IState) => state.QuizApp.currentStep);
  const fetchingQuizSagaRequest = useSelector(
    (state: IState) => state.QuizApp.fetchingQuizSagaRequest
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
  );
}

export default React.memo(QuizPage);
