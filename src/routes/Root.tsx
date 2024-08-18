import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FirstRoute from "./firstroute/FirstRoute";
import SecondRoute from "./secondroute/SecondRoute";
import ErrorPage from "./errorpage/ErrorPage";

function Root() {
  const router = createBrowserRouter([
    {
      path: "timerApp",
      errorElement: <ErrorPage />,
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
