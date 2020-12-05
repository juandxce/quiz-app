import { spawn } from 'redux-saga/effects';
import { watchQuizSaga } from "../QuizApp/saga"

export default function* root() {
  yield spawn(watchQuizSaga);
}
