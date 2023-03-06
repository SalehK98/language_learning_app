import React from "react";
import classes from "./CourseCard.module.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default function CourseCard({ course }) {
  const {
    course_id,
    course_title,
    target_language,
    course_level,
    lessons,
    course_duration,
  } = course;
  return (
    <div className={classes.courseCard}>
      <div className={classes.courseCard_title}>
        <h1>{course_title}</h1>
        <BsFillArrowRightSquareFill
          size="1.5rem"
          color="teal"
          onClick={() => {
            console.log("saleh clicked");
          }}
        />
      </div>
      <div className={classes.courseCard_info}>
        <p>{course_level}</p>
        <p id={classes.middle}>{lessons.length} lessons</p>
        <p>{course_duration}</p>
      </div>
    </div>
  );
}
