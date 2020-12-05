import React from "react";
import QuizApp from "./QuizApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={QuizApp} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
