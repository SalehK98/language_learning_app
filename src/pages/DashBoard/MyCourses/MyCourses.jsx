import React from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classes from "./MyCourses.module.css";
import { useNavigate } from "react-router-dom";

export default function MyCourses({ courses, user }) {
  const navigate = useNavigate();
  const myCourses = user.courses.map((course) => {
    return course.id;
  });

  const drawCourses = () => {
    return courses
      .filter((course) => {
        return myCourses.includes(course.id);
      })
      .map((course) => {
        return <CourseCard course={course} user={user} key={course.id} />;
      });
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
      <div className={classes.myCourses_activeCourses}>{drawCourses()}</div>
    </div>
  );
}
