import React from "react";
import classes from "./LessonPage.module.css";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";

export default function LessonPage() {
  const params = useParams();
  console.log("params", params);

  const { state } = useLocation();
  const { dialogue, vocabulary, practice_questions } = state.lesson_content;
  const navigate = useNavigate();

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
      course.course_title
    </Link>,
    <Typography key="3" color="text.primary">
      {state.lesson_title}
    </Typography>,
  ];

  return (
    <div className={classes.lessonPage}>
      <div className={classes.lessonPage_container}>
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
        <div className={classes.lessonPage_dialogue}>
          {dialogue.map((el) => {
            return (
              <div>
                <p>{el.speaker}</p>
                <p>{el.line}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className={classes.lessonPage_vocabulary}>
          {vocabulary.map((el) => {
            return (
              <div>
                <p>{el.english_word}</p>
                <p>{el.target_word}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className={classes.lessonPage_practice}>
          {practice_questions.map((exercise) => {
            return (
              <div>
                <h1>exercise number {exercise.id}</h1>
                <BsFillArrowRightSquareFill
                  size="1.5rem"
                  onClick={() => {
                    navigate(
                      exercise.id + `?x=${encodeURI("exercise" + exercise.id)}`,
                      { state: exercise }
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
