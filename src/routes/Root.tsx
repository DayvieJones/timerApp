import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FirstRoute from "./firstroute/FirstRoute";
import SecondRoute from "./secondroute/SecondRoute";
import ErrorPage from "./error/ErrorPage";
import NoMatch from "./error/NoMatch";
import { ClickerContext } from "../context/ClickerContex";
import { useState } from "react";

function Root() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "timerApp",
      errorElement: <ErrorPage />,
      children: [
        { path: "x", element: <FirstRoute /> },
        { path: "", element: <App /> },
        { path: "second", element: <SecondRoute /> },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ]);
  return (
    <ClickerContext.Provider value={{ count, setCount }}>
      <RouterProvider router={router} />
    </ClickerContext.Provider>
  );
}

export default Root;
