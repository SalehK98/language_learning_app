import "./App.css";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import Register from "./pages/Register/Register";

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
