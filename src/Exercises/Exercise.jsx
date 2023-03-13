import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import classes from "./Exercise.module.css";
import { green } from "@mui/material/colors";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import { getData } from "../database/getData.mjs";

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

  const breadcrumbs = [
    <Link
      to="/dashBoard"
      underline="underline"
      key="2"
      style={{ textDecoration: "none", color: "#0D2F4E" }}
    >
      DashBoard
    </Link>,
    <Link
      to="/dashBoard/myCoursesPage"
      underline="underline"
      key="2"
      style={{ textDecoration: "none", color: "#0D2F4E" }}
    >
      My Courses
    </Link>,
    <Link
      to={`/courses/${params.courseId}`}
      underline="underline"
      key="2"
      style={{ textDecoration: "none", color: "#0D2F4E" }}
    >
      course {params.courseId}
      {/* {isData ? (error1 ? course.course_title : "course") : "course"} */}
    </Link>,
    <Link
      to={`/courses/${params.courseId}`}
      underline="underline"
      key="2"
      style={{ textDecoration: "none", color: "#0D2F4E" }}
    >
      Lesson {params.lessonId}
      {/* {isData ? (error1 ? course.course_title : "course") : "course"} */}
    </Link>,
    <Typography key="3" color="text.primary">
      Exercise {state.id}
    </Typography>,
  ];

  return (
    <div className={classes.exercise}>
      {console.log(state)}
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          marginTop: "15px",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          fontSize="large"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div
        className={classes.exercise_container}
        style={{ backgroundColor: color }}
      >
        <h1>{question}</h1>
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-evenly",
            marginTop: "50px",
          }}
        >
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
    </div>
  );
}
