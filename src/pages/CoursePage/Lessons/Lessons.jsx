import { useState, useEffect } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
// import classes from "../CoursePage.module.css";
import { getData } from "../../../database/getData.mjs";
import classes from "./Lessons.module.css";

export default function Lessons() {
  const navigate = useNavigate();

  const params = useParams();

  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [course, setCourse] = useState({});
  const [users, setUsers] = useState(null);

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

    const users = getData(
      setError2,
      error2,
      `https://6405b55440597b65de3e8d49.mockapi.io/language/users/${userId}`
    );
    users.then((result) => {
      if (!error2) {
        setUsers(result);
        setIsData2(true);
      }
    });
  }, []);
  const drawStatus = (lesson) => {
    let status;
    if (isData && isData2 && !error1 && !error2) {
      const thisCourse = users.courses.filter((course) => {
        return course.id === params.courseId;
      });

      const progress = thisCourse[0].progress;
      progress.map((le) => {
        if (le.lesson_id === lesson.id) {
          status = le.completed;
          return le.completed;
        }
      });
    }
    return status;
  };

  return (
    <>
      {isData && isData2 ? (
        error1 || error2 ? (
          <div className={classes.lesson_home}>error</div>
        ) : (
          <div className={classes.lessons_container}>
            {course.lessons.map((lesson) => {
              const stat = drawStatus(lesson);
              return (
                <div
                  className={classes.coursePage_lesson}
                  key={lesson.lesson_id}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "90vw",
                      border: "1px solid white",
                      marginLeft: "10px",
                      borderRadius: "5px",
                      padding: "25px",
                      gap: "1rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>{lesson.lesson_title}</h1>
                    {/* <div> */}
                    <p>
                      status {stat.toString() ? "completed" : "not completed"}
                    </p>
                    {/* </div> */}

                    <BsFillArrowRightSquareFill
                      size="1.5rem"
                      onClick={() => {
                        navigate(
                          lesson.id + `?x=${encodeURI(lesson.lesson_title)}`,
                          {
                            state: lesson,
                          }
                        );
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
