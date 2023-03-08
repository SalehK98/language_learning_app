import React from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classes from "./MyCourses.module.css";
import { useNavigate } from "react-router-dom";

export default function MyCourses({ courses }) {
  const navigate = useNavigate();
  const drawCourses = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<CourseCard course={courses[i]} key={courses[i].course_id} />);
    }
    return arr;
  };
  return (
    <div className={classes.myCourses}>
      <div className={classes.myCourses_courseNav}>
        <h1>Active Courses</h1>
        <span>
          <h1>My Courses</h1>
          <BsFillArrowRightCircleFill
            size="1.5rem"
            onClick={() => {
              navigate("/dashBoard/myCoursesPage");
            }}
          />
        </span>
      </div>
      <div className={classes.myCourses_activeCourses}>
        {drawCourses()}
        {/* {courses.map((course) => {
      return <CourseCard course={course} key={course.course_id} />;
    })} */}
      </div>
    </div>
  );
}
