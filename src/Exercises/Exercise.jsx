import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import classes from "./Exercise.module.css";
import { green } from "@mui/material/colors";

export default function Exercise() {
  const params = useParams();
  console.log("params", params);

  const { state } = useLocation();
  const { question, correct_answer, answer_choices } = state;
  const [color, setColor] = useState();
  const [isComplete, setIsComplete] = useState();
  console.log(state);

  const answering = (answer) => {
    if (answer === correct_answer) {
      setColor("green");
    } else {
      setColor("red");
    }
  };

  return (
    <div className={classes.exercise}>
      <div
        className={classes.exercise_container}
        style={{ backgroundColor: color }}
      >
        <h1>{question}</h1>
        {answer_choices.map((answer) => {
          return (
            <Button
              variant="contained"
              onClick={() => {
                answering(answer);
              }}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
