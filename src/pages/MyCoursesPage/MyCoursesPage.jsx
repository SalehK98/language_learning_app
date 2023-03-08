import React, { useEffect, useState } from "react";
import classes from "../DashBoard/DashBoard.module.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getData } from "../../database/getData.mjs";
import { useNavigate } from "react-router-dom";

export default function MyCoursesPage() {
  const [courses, setCourses] = useState(null);
  const [isData, setIsData] = useState(false);
  const [error1, setError1] = useState();

  const drawCourses = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<CourseCard course={courses[i]} key={courses[i].course_id} />);
    }
    return arr;
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
      {isData ? (
        error1 ? (
          <div className={classes.home}>error</div>
        ) : (
          <div
            style={{ display: "flex ", flexWrap: "wrap", paddingTop: "60px" }}
          >
            {drawCourses()}
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
