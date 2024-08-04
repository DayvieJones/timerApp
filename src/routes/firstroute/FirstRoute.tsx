import { Outlet } from "react-router-dom";
import { ClickerContext } from "../../context/ClickerContex";
import { useContext } from "react";

function FirstRoute() {
  const { count, setCount } = useContext(ClickerContext);

  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
  <Outlet />;
}

export default FirstRoute;
