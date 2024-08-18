import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./errorpage/ErrorPage";
import NoMatch from "./errorpage/NoMatch";
import Index from "./index/Index";
import { LightModeContext } from "../components/context/LightModeContext";
import { useState } from "react";

function Root() {
  const [isLightMode, setLightMode] = useState(false);

  const router = createBrowserRouter([
    {
      path: "timerApp",
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        { path: ":itemID", element: <Index /> },
        { path: "main", element: <App /> },
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
