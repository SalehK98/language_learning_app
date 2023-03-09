import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./CoursePage.module.css";
import { getData } from "../../database/getData.mjs";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";
import Lessons from "./Lessons/Lessons";

export default function CoursePage() {
  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [course, setCourse] = useState({});
  const [users, setUsers] = useState(null);

  const params = useParams();
  const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  useEffect(() => {
    const data = getData(
      setError1,
      error1,
      `https://6405b55440597b65de3e8d49.mockapi.io/language/courses/${params.courseId}`
    );
    data.then((result) => {
      if (!error1) {
        setCourse(result);
        setIsData(true);
      }
    });
  }, []);

  useEffect(() => {
    const users = getData(
      setError2,
      error2,
      "https://6405b55440597b65de3e8d49.mockapi.io/language/users"
    );
    users.then((result) => {
      if (!error2) {
        setUsers(result);
        setIsData2(true);
      }
    });
  }, []);

  return (
    <>
      {isData && isData2 ? (
        error1 || error2 ? (
          <div className={classes.home}>error</div>
        ) : (
          <div className={classes.coursePage}>
            <div className={classes.coursePage_container}>
              <div className={classes.coursePage_info}>
                <h1>{course.course_title}</h1>
                <p>{course.course_level}</p>
                <p>duration of {course.course_duration}</p>
                <p>{course.course_description}</p>
              </div>
              <div className={classes.coursePage_lessons}>
                <p>{course.lessons.length} lessons:</p>
                <Lessons lessons={course.lessons} />
              </div>
            </div>
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
