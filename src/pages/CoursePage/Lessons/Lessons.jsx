import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import classes from "../CoursePage.module.css";

export default function Lessons({ lessons }) {
  const navigate = useNavigate();

  // const { isLogged, user, userId } = JSON.parse(
  //   localStorage.getItem("loginInfo")
  // );

  // useEffect(() => {
  //   const data = getData(
  //     setError1,
  //     error1,
  //     `https://6405b55440597b65de3e8d49.mockapi.io/language/courses/${params.courseId}`
  //   );
  //   data.then((result) => {
  //     if (!error1) {
  //       setCourse(result);
  //       setIsData(true);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const users = getData(
  //     setError2,
  //     error2,
  //     `https://6405b55440597b65de3e8d49.mockapi.io/language/users/${userId}`
  //   );
  //   users.then((result) => {
  //     if (!error2) {
  //       setUsers(result);
  //       setIsData2(true);

  //       const drawCourses = () => {
  //         const myCourse = users.course.filter((course) => {
  //           return course.id === params.courseId;
  //         });
  //         console.log(myCourse);
  //         //   const myCourses = users.courses.map((course) => {
  //         //     return course.id;
  //         //   });
  //         //   return courses
  //         //     .filter((course) => {
  //         //       return myCourses.includes(course.id);
  //         //     })
  //         //     .map((course) => {
  //         //       console.log("1");
  //         //       return <CourseCard course={course} user={users} key={course.id} />;
  //         //     });
  //       };
  //       drawCourses();
  //     }
  //   });
  // }, []);

  return (
    <div>
      {lessons.map((lesson) => {
        console.log(lesson);
        return (
          <div className={classes.coursePage_lesson} key={lesson.lesson_id}>
            <h1>{lesson.lesson_title}</h1>
            <BsFillArrowRightSquareFill
              size="1.5rem"
              onClick={() => {
                navigate(
                  lesson.lesson_id + `?x=${encodeURI(lesson.lesson_title)}`,
                  { state: lesson }
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
