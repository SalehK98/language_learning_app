import React from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { AiOutlineArrowRight } from "react-icons/ai";
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
      .map((course, idx) => {
        if (idx < 3) {
          return <CourseCard course={course} user={user} key={course.id} />;
        }
      });
  };

  return (
    <div className={classes.myCourses}>
      <div className={classes.myCourses_courseNav}>
        <h3>Continue Learning</h3>
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            // width: "11%",
            // backgroundColor: "white",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashBoard/myCoursesPage");
          }}
        >
          <p>My Courses</p>
          <AiOutlineArrowRight
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
