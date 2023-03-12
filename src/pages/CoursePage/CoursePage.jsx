import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./CoursePage.module.css";
import { getData } from "../../database/getData.mjs";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";
import Lessons from "./Lessons/Lessons";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";

export default function CoursePage() {
  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [course, setCourse] = useState({});
  const [users, setUsers] = useState(null);

  const params = useParams();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

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
      `https://6405b55440597b65de3e8d49.mockapi.io/language/users/${userId}`
    );
    users.then((result) => {
      if (!error2) {
        setUsers(result);
        setIsData2(true);

        //     const drawCourses = () => {
        //       const myCourse = users.course.filter((course) => {
        //         return course.id === params.courseId;
        //       });
        //       console.log(myCourse);
        //       //   const myCourses = users.courses.map((course) => {
        //       //     return course.id;
        //       //   });
        //       //   return courses
        //       //     .filter((course) => {
        //       //       return myCourses.includes(course.id);
        //       //     })
        //       //     .map((course) => {
        //       //       console.log("1");
        //       //       return <CourseCard course={course} user={users} key={course.id} />;
        //       //     });
        //     };
        //     drawCourses();
      }
    });
  }, []);

  const breadcrumbs = [
    <Link
      to="/dashBoard/myCoursesPage"
      underline="underline"
      key="2"
      style={{ textDecoration: "none", color: "#0D2F4E" }}
    >
      My Courses
    </Link>,
    <Typography key="3" color="text.primary">
      {course.course_title}
    </Typography>,
  ];

  return (
    <>
      {isData && isData2 ? (
        error1 || error2 ? (
          <div className={classes.home}>error</div>
        ) : (
          <div className={classes.coursePage}>
            <div className={classes.coursePage_container}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  marginTop: "15px",
                }}
              >
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                  fontSize="large"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </div>
              <div className={classes.coursePage_info}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      padding: "15px",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    {course.course_level}
                  </p>
                  <p
                    style={{
                      padding: "15px",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    duration of {course.course_duration}
                  </p>
                </div>
                <div style={{ display: "flex", alignSelf: "flex-end" }}>
                  <div style={{ width: "60%" }}>
                    <p
                      style={{
                        padding: "15px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                      }}
                    >
                      {course.course_description}
                    </p>
                  </div>
                </div>
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
