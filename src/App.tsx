import React from "react";
import HomePage from "./components/pages/HomePage";
import QuizPage from "./components/pages/QuizPage";
import ResultsPage from "./components/pages/ResultsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
