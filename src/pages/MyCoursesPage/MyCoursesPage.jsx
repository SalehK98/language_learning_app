import React, { useEffect, useState } from "react";
import classes from "./MyCoursesPage.module.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getData } from "../../database/getData.mjs";
import { useNavigate, Link } from "react-router-dom";
// import { Breadcrumbs } from "@mui/material";
// import { NavigateNextIcon } from "@mui/material-icon";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";

export default function MyCoursesPage() {
  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [courses, setCourses] = useState(null);
  const [myUser, setMyUser] = useState(null);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  const drawCourses = () => {
    const myCourses = myUser.courses.map((course) => {
      return course.id;
    });
    return courses
      .filter((course) => {
        // console.log(course.id);
        // console.log(myUser.courses);
        // console.log(myUser.courses.includes(course.id));
        return myCourses.includes(course.id);
      })
      .map((course) => {
        console.log("1");
        return <CourseCard course={course} user={myUser} key={course.id} />;
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

  const breadcrumbs = [
    <Link
      to="/dashBoard"
      underline="underline"
      key="2"
      color="inherit"
      style={{ textDecoration: "none" }}
    >
      DashBoard
    </Link>,
    <Typography key="3" color="text.primary">
      My Courses
    </Typography>,
  ];

  return (
    <>
      {isData && isData2 ? (
        error1 || error2 ? (
          <div className={classes.coursesPage}>error</div>
        ) : (
          <div className={classes.coursesPage}>
            <div className={classes.coursesPage_container}>
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
              {drawCourses()}
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
