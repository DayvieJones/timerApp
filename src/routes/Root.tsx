import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import SecondRoute from "./secondroute/SecondRoute";
import ErrorPage from "./errorpage/ErrorPage";
import { LightModeContext } from "../components/context/LightModeContext";
import { useState } from "react";
import Index from "./index/Index";
import NoMatch from "./errorpage/NoMatch";

function Root() {
  const [isLightMode, setLightMode] = useState(false);
  const router = createBrowserRouter([
    {
      path: "timerApp",
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Index /> },
        { path: "main", element: <App /> },
        { path: "second", element: <SecondRoute /> },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ]);
  return (
    <LightModeContext.Provider value={{ isLightMode, setLightMode }}>
      <RouterProvider router={router} />
    </LightModeContext.Provider>
  );
}

export default Root;
