import React from "react";
import classes from "../MyCourses/MyCourses.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ProgressPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.myCourses}>
      <div className={classes.myCourses_courseNav}>
        <h3>Progress</h3>
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
            navigate("/dashBoard/myProgress");
          }}
        >
          <p>My Progress</p>
          <AiOutlineArrowRight
            size="1.5rem"
            onClick={() => {
              navigate("/dashBoard/myCoursesPage");
            }}
          />
        </span>
      </div>
      {/* <div className={classes.myCourses_activeCourses}>{drawCourses()}</div> */}
    </div>
  );
}
