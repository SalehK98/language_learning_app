import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import classes from "../CoursePage.module.css";

export default function Lessons({ lessons }) {
  const navigate = useNavigate();
  return (
    <div>
      {lessons.map((lesson) => {
        console.log(lesson);
        return (
          <div className={classes.coursePage_lesson} key={lesson.lesson_id}>
            <h1>{lesson.lesson_title}</h1>
            <BsFillArrowRightSquareFill
              size="1.5rem"
              onClick={() => {
                navigate(
                  lesson.lesson_id + `?x=${encodeURI(lesson.lesson_title)}`,
                  { state: lesson }
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
