import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./CoursePage.module.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default function CoursePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    course_id,
    course_title,
    target_language,
    course_level,
    lessons,
    course_duration,
    course_description,
  } = state;
  return (
    <div className={classes.coursePage}>
      <div className={classes.coursePage_container}>
        <div className={classes.coursePage_info}>
          <h1>{course_title}</h1>
          <p>{course_level}</p>
          <p>duration of {course_duration}</p>
          <p>{course_description}</p>
        </div>
        <div className={classes.coursePage_lessons}>
          <p>{lessons.length} lessons:</p>
          {lessons.map((lesson) => {
            console.log(lesson);
            return (
              <div className={classes.coursePage_lesson} key={lesson.lesson_id}>
                <h1>{lesson.lesson_title}</h1>
                <BsFillArrowRightSquareFill
                  size="1.5rem"
                  onClick={() => {
                    navigate("/lesson", { state: lesson });
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
