import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DOMPurify from "dompurify";

const useStyles = makeStyles({
  questionCard: {
    maxWidth: "80vw",
    textAlign: "center",
  },
  flexCenter: {
    justifyContent: "center",
  },
});

export type Option = {
  color?: string;
  value: string;
};

function QuestionCard({
  category = "",
  question = "",
  options = [],
  onAnswer = (response) => {
    console.log("response:", response);
  },
}: {
  category: string;
  question: string;
  options: Option[];
  onAnswer: (response: string) => void;
}) {
  const classes = useStyles();

  const colors = ["#f50057", "#3f51b5", "orange", "pink", "red"];

  return (
    <Card className={classes.questionCard}>
      <CardMedia
        component="img"
        alt="CoolCategoryImage"
        height="140"
        image="https://images.unsplash.com/photo-1583699998579-5872a2117151?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="CoolCategoryImage"
      />
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}
        />
      </CardContent>
      <CardActions className={classes.flexCenter}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => {
              onAnswer(option.value);
            }}
            size="small"
            style={{ color: option.color || colors[index] }}
          >
            {option.value}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default React.memo(QuestionCard);
