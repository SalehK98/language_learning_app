import React from "react";
import classes from "./CourseCard.module.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function CourseCard({ course, user }) {
  const navigate = useNavigate();
  const {
    id,
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
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/courses/` + id + `?x=${encodeURI(course_title)}`, {
              state: course,
            });
          }}
        />
      </div>
      <div className={classes.courseCard_info}>
        <p>{course_level}</p>
        <p id={classes.middle}>{lessons.length} lessons</p>
        <p>{course_duration}</p>
        {/* //get the complete status from user object  */}
      </div>
    </div>
  );
}
