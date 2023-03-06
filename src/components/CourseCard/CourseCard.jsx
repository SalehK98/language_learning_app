import React from "react";
import classes from "./CourseCard.module.css";

export default function CourseCard({ course }) {
  return (
    <div className={classes.courseCard}>
      <p>course_id is : {course.course_id}</p>
      <p>course_title is : {course.course_title}</p>
      <p>target_language is: {course.target_language}</p>
      <p>course_level is: {course.course_level}</p>
      <p>number of lessons is: {course.lessons.length}</p>
    </div>
  );
}
