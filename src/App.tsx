import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Button from "./components/Button/Button";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  function toggleMode() {
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={`app ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="navbar">
        <Button
          isLightMode={isLightMode}
          handleOnClickEvent={toggleMode}
          buttonContent={isLightMode ? "Dark Mode" : "Light Mode"}
        />
      </div>
      <div className="display-timer">
        <Timer isLightMode={isLightMode} />
        <Timer isLightMode={isLightMode} />
        <Timer isLightMode={isLightMode} />
        <Timer isLightMode={isLightMode} />
        <Timer isLightMode={isLightMode} />
        <Timer isLightMode={isLightMode} />
      </div>
    </div>
  );
}

export default App;
