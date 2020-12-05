/* eslint-disable camelcase */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DOMPurify from "dompurify";

type Question = {
  category: string;
  question: string;
  type: string;
  difficulty: string;
  incorrect_answers: string[];
  correct_answer: string;
};

const initialState = {
  userResponses: [] as string[],
  fetchingQuizSagaRequest: false,
  quizQuestions: [] as Question[],
  currentStep: 0,
};

const QuizAppSlice = createSlice({
  name: "QuizApp",
  initialState,
  reducers: {
    fetchQuizSagaRequest(state) {
      state.fetchingQuizSagaRequest = true;
    },
    setQuizQuestions(state, action: PayloadAction<Question[]>) {
      state.fetchingQuizSagaRequest = false;
      state.quizQuestions = action.payload.map((el) => {
        el.question = DOMPurify.sanitize(el.question);
        return el;
      });
    },
    setUserResponses(state, action: PayloadAction<string[]>) {
      state.userResponses = action.payload;
    },
    increaseCurrentStep(state) {
      state.currentStep = state.currentStep + 1;
    },
    resetToInitialState(state) {
      return initialState;
    },
  },
});

export const QuizAppActions = QuizAppSlice.actions;
export const QuizAppReducer = QuizAppSlice.reducer;
