import React from "react";
import HomePage from "../components/pages/HomePage";
import QuizPage from "../components/pages/QuizPage";
import ResultsPage from "../components/pages/ResultsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  quizPageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    overflow: "auto",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.quizPageWrapper}`}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/start-quiz" component={QuizPage} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </div>
  );
}

export default React.memo(App);
