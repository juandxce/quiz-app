import React from "react";
import { Typography, Button } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const HomePage: React.FunctionComponent<ChildComponentProps> = ({ history }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h2">Welcome to the Trivia Challenge!</Typography>
      <Typography>
        You will be presented with 10 True or False questions.
      </Typography>
      <Typography>Can you score 100%?</Typography>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          history.push("/quiz");
        }}
      >
        Begin
      </Button>
    </div>
  );
};

export default React.memo(HomePage);
