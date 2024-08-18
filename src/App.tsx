import { useContext } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Button from "./components/button/Button";
import { LightModeContext } from "./components/context/LightModeContext";

function App() {
  const { isLightMode, setLightMode } = useContext(LightModeContext);

  return (
    <div className={`app ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="navbar">
        <Button
          handleOnClickEvent={() => {
            setLightMode(!isLightMode);
          }}
          buttonContent={isLightMode ? "Dark Mode" : "Light Mode"}
        />
      </div>
      <div className="display-timer">
        <Timer />
        <Timer />
        <Timer />
        <Timer />
        <Timer />
        <Timer />
      </div>
    </div>
  );
}

export default App;
