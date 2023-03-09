import React, { useEffect, useState, useContext } from "react";
import classes from "../DashBoard/DashBoard.module.css";
import { getData } from "../../database/getData.mjs";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [isData, setIsData] = useState(false);
  const [error1, setError1] = useState();
  const [courses, setCourses] = useState(null);
  const navigate = useNavigate();

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  const drawCourses = (courses) => {
    return courses.map((course) => {
      return <CourseCard course={course} key={course.course_id} />;
    });
  };

  useEffect(() => {
    const data = getData(
      setError1,
      error1,
      "https://6405b55440597b65de3e8d49.mockapi.io/language/courses"
    );
    data.then((result) => {
      if (!error1) {
        setCourses(result);
        setIsData(true);
      }
    });
  }, []);

  return (
    <>
      {isLogged ? (
        isData ? (
          error1 ? (
            <div className={classes.home}>error</div>
          ) : (
            <div className={classes.home}>
              <div className={classes.home_container}>
                {drawCourses(courses)}
              </div>
            </div>
          )
        ) : (
          <div className={classes.home}>
            <div className={classes.home_container}>
              <div className={classes.home_loader}></div>
            </div>
          </div>
        )
      ) : (
        navigate("login")
      )}
    </>
  );
}
