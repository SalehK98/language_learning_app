import React from "react";
import classes from "./LessonPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default function LessonPage() {
  const { state } = useLocation();
  const { dialogue, vocabulary, practice_questions } = state.lesson_content;
  const navigate = useNavigate();

  return (
    <div className={classes.lessonPage}>
      <div className={classes.lessonPage_container}>
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
                    navigate("/exercise", { state: exercise });
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
