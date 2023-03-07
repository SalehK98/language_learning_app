import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Exercise.module.css";

export default function Exercise() {
  const { state } = useLocation();
  const { question, correct_answer, answer_choices } = state;
  const [color, setColor] = useState();
  console.log(state);

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
                answer === correct_answer ? setColor("green") : setColor("red");
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
