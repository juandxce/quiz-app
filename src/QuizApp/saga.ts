import { QuizAppActions } from "./reducer";
import { takeLatest, retry, put } from "redux-saga/effects";

import api from "../api";

function* QuizSaga() {
  const response = yield retry(5, 500, api.quizAPI.getQuizQuestions);
  yield put(QuizAppActions.setQuizQuestions(response.results));
}

export function* watchQuizSaga() {
  yield takeLatest(QuizAppActions.fetchQuizSagaRequest, QuizSaga);
}
