import React, { useEffect, useState } from "react";
import classes from "./Progress.module.css";

export default function Progress({ user }) {
  console.log("users from progress", user);
  const { id, name, email, courses } = user;

  const drawCourse = (courses) => {
    return courses.map((course) => {
      return (
        <>
          <div key={course.id}>
            <p>{course.name}</p>
            <p>completed:{course.completed.toString()}</p>
            {drawLesson(course)}
          </div>
          <hr width="200px" />
        </>
      );
    });
  };

  const drawLesson = (course) => {
    return course.progress.map((lesson) => {
      {
        return (
          <>
            <div key={lesson.lesson_id}>
              <p>lesson {lesson.lesson_id}</p>
              <p>{lesson.completed ? "completed" : "in progress"}</p>
              {drawExercise(lesson)}
              <p>quiz {lesson.quiz.id}</p>
              <p>{lesson.quiz.status}</p>
            </div>
            <hr width="150px" />
          </>
        );
      }
    });
  };

  const drawExercise = (lesson) => {
    return lesson.exercises.map((exercise) => {
      return (
        <>
          <div key={exercise.id}>
            <p> exercise {exercise.id}</p>
            <p>{exercise.status}</p>
          </div>
          <hr width="80px" />
        </>
      );
    });
  };

  return (
    <div className={classes.progress}>
      <div className={classes.progress_container}>
        <p>{id}</p>
        <p>{email}</p>
        <p>{name}</p>
        <hr />
        <div>{drawCourse(courses)}</div>
      </div>
    </div>
  );
}
