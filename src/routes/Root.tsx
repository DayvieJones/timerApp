import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FirstRoute from "./firstroute/FirstRoute";
import SecondRoute from "./secondroute/SecondRoute";

function Root() {
  const router = createBrowserRouter([
    {
      path: "timerApp",
      children: [
        { path: "", element: <FirstRoute /> },
        { path: "main", element: <App /> },
        { path: "second", element: <SecondRoute /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Root;
