
import { QuizAppReducer } from '../QuizApp/reducer';
import { combineReducers } from 'redux';

const createRootReducer = combineReducers({
  QuizApp: QuizAppReducer,
});
export default createRootReducer;
export type IState = ReturnType<typeof createRootReducer>;
