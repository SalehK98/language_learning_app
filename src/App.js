import "./App.css";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Exercise from "./Exercises/Exercise";
import LoginContext from "./components/LoginContext/LoginContext";
import CoursePage from "./pages/CoursePage/CoursePage";
import LessonPage from "./pages/LessonPage/LessonPage";
import TranslatePage from "./pages/TranslatePage/TranslatePage";
import MyCoursesPage from "./pages/MyCoursesPage/MyCoursesPage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";
import Courses from "./pages/Courses/Courses.jsx";
import Entry from "./pages/Entry/Entry";

function App() {
  const status = JSON.parse(localStorage.getItem("loginInfo"));

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <LoginContext>
          <LayoutWrapper />
        </LoginContext>
      ),
      children: [
        // {
        //   path: "",
        //   element: <WelcomePage />,
        // },
        {
          path: "",
          element: <Entry />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashBoard",
          element: <DashBoard />,
        },
        {
          path: "dashBoard/myCoursesPage",
          element: <MyCoursesPage />,
        },
        {
          path: "dashboard/myProgress",
          element: <ProgressPage />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "courses/:courseId",
          element: <CoursePage />,
        },
        {
          path: "courses/:courseId/:lessonId",
          element: <LessonPage />,
        },
        {
          path: "courses/:courseId/:lessonId/:exerciseId",
          element: <Exercise />,
        },
        {
          path: "translate",
          element: <TranslatePage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
