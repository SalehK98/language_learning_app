import React, { useEffect, useState } from "react";
// import classes from "./Progress.module.css";
import { getData } from "../../database/getData.mjs";
import classes from "./Progress.module.css";
export default function Progress() {
  // console.log("users from progress", user);
  // const { id, name, email, courses } = user;
  const [myUser, setMyUser] = useState();
  const [error2, setError2] = useState();
  const [isData2, setIsData2] = useState();

  // const { name, courses } = myUser;
  console.log("the user ", myUser);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  const email = user;
  const id = userId;

  useEffect(() => {
    const user = getData(
      setError2,
      error2,
      `https://6405b55440597b65de3e8d49.mockapi.io/language/users/${userId}`
    );
    user.then((result) => {
      if (!error2) {
        setMyUser(result);
        setIsData2(true);
      }
    });
  }, []);

  const drawCourse = (courses) => {
    return courses.map((course) => {
      return (
        <>
          <div
            key={course.id}
            // style={{ width: "100%", height: "100%" }}
          >
            <p>{course.name}</p>
            <p>completed:{course.completed.toString()}</p>
            {/* {drawLesson(course)} */}
            <hr width="200px" />
          </div>
        </>
      );
    });
  };

  const drawLesson = (course) => {
    return course.progress.map((lesson) => {
      {
        return (
          <>
            <div
              key={lesson.lesson_id}
              // style={{ width: "100%", height: "100%" }}
            >
              <p>lesson {lesson.lesson_id}</p>
              <p>{lesson.completed ? "completed" : "in progress"}</p>
              {/* {drawExercise(lesson)} */}
              <p>quiz {lesson.quiz.id}</p>
              <p>{lesson.quiz.status}</p>
              <hr width="150px" />
            </div>
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
            <hr width="80px" />
          </div>
        </>
      );
    });
  };

  return (
    <>
      {isData2 ? (
        error2 ? (
          <h1>error</h1>
        ) : (
          <div className={classes.progress}>
            {/* <div className={classes.progress_container}> */}
            <p>{id}</p>
            <p>{email}</p>
            <p>{myUser.name}</p>
            <hr />
            <div>{drawCourse(myUser.courses)}</div>
            {/* </div> */}
          </div>
        )
      ) : (
        <div className={classes.home}>
          <div className={classes.home_container}>
            <div className={classes.home_loader}></div>
          </div>
        </div>
      )}
    </>
  );
}
