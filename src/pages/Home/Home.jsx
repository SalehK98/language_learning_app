import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import classes from "./Home.module.css";
import { getCourser } from "../../database/getCourses.mjs";

export default function Home() {
  const [isData, setIsData] = useState(false);
  const [error, setError] = useState();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const data = getCourser(setError, error);
    data.then((result) => {
      console.log("here", result, error);
      if (!error) {
        setCourses(result);
        setIsData(true);
      }
    });
    // console.log("data from home component", data);

    // return () => {
    //   second
    // }
  }, []);

  return (
    <>
      {isData ? (
        error ? (
          <div className={classes.home}>error</div>
        ) : (
          <div className={classes.home}>
            <div className={classes.home_container}>
              <h1>my Courses</h1>
              <div className={classes.home_myCourses}>
                {courses.map((course) => {
                  return <CourseCard course={course} key={course.course_id} />;
                })}
              </div>
              <hr width="90%" />
              <div className={classes.home_myProgress}>
                <h1>my progress</h1>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className={classes.home}>
          <div className={classes.home_loader}></div>
        </div>
      )}
    </>
  );
}
