import { useContext } from "react";
import "./Button.css";
import { LightModeContext } from "../context/LightModeContext";

interface ButtonProps {
  buttonContent: string;
  handleOnClickEvent: () => void;
}

function Button({ buttonContent, handleOnClickEvent }: ButtonProps) {
  const { isLightMode } = useContext(LightModeContext);

  return (
    <button
      onClick={handleOnClickEvent}
      className={isLightMode ? "light-mode" : "dark-mode"}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
