import "./App.css";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Exercise from "./Exercises/Exercise";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayoutWrapper />,
      children: [
        {
          path: "",
          element: <WelcomePage />,
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
          path: "home",
          element: <Home />,
        },
        {
          path: "exercise",
          element: <Exercise />,
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
