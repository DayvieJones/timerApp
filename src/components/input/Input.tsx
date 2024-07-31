import React from "react";
import "./Input.css";

interface InputProps {
  inputValue: number;
  handleInputChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLightMode: boolean;
  disable: boolean;
}

function Input({
  inputValue,
  handleInputChangeEvent,
  isLightMode,
  disable,
}: InputProps) {
  return (
    <input
      disabled={disable}
      type="number"
      value={inputValue}
      onChange={handleInputChangeEvent}
      className={isLightMode ? "light-mode" : "dark-mode"}
    />
  );
}

export default Input;
