import { Outlet } from "react-router-dom";

function FirstRoute() {
  return (
    <div>
      First Route <Outlet />
    </div>
  );
}

export default FirstRoute;
