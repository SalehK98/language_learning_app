import React, { useEffect, useState, useContext } from "react";
import classes from "./DashBoard.module.css";
import { getData } from "../../database/getData.mjs";
import Progress from "../Progress/Progress";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";
import MyCourses from "./MyCourses/MyCourses";
import MyProgress from "./MyProgress/MyProgress";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [courses, setCourses] = useState(null);
  const [myUser, setMyUser] = useState(null);
  const navigate = useNavigate();

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);
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

  const getUserAvatar = () => {
    if (myUser) {
      // if (user.split("@").length > 0) {
      //   const newAv = user.split("@")[0];
      //   return newAv;
      // }
      return myUser.name;
    }
    return user;
  };

  const name = getUserAvatar();

  return (
    <>
      {isLogged ? (
        isData && isData2 ? (
          error1 || error2 ? (
            <div className={classes.home}>error</div>
          ) : (
            <div className={classes.home}>
              <div className={classes.home_container}>
                <div className={classes.home_hello}>
                  <h1>
                    Hello &nbsp;
                    <span>
                      <em> {name} </em>{" "}
                    </span>
                    &nbsp; Welcome Back
                  </h1>
                </div>
                <div className={classes.home_info}>
                  <div className={classes.home_myCourses}>
                    <MyCourses courses={courses} user={myUser} />
                  </div>
                  {/* <hr width="90%" /> */}
                  <br />
                  <div className={classes.home_myProgress}>
                    {/* <Progress user={myUser} /> */}
                    <MyProgress />
                  </div>
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
        )
      ) : (
        navigate("/")
      )}
    </>
  );
}
