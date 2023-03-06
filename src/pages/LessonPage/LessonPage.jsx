import React from "react";
import classes from "./LessonPage.module.css";
import { useLocation } from "react-router-dom";

export default function LessonPage() {
  const { state } = useLocation();
  const { dialogue, vocabulary, practice_questions } = state.lesson_content;
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
        <div className={classes.lessonPage_practice}></div>
      </div>
    </div>
  );
}
