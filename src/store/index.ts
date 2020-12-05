// @ts-ignore
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({});

const middlewares = [sagaMiddleware];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)) //...middlewares
);

window.store = store;
sagaMiddleware.run(rootSaga);

declare global {
  interface Window {
    store: typeof store;
    mobileSupport?: {
      onApplicationReady: () => void;
    };
  }
}
