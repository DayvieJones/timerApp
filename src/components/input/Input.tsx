import React from "react";
import "./Input.css";

interface InputProps {
  inputValue: number;
  handleInputChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLightMode: boolean;
}

function Input({
  inputValue,
  handleInputChangeEvent,
  isLightMode,
}: InputProps) {
  return (
    <input
      type="number"
      value={inputValue}
      onChange={handleInputChangeEvent}
      className={isLightMode ? "light-mode" : "dark-mode"}
    />
  );
}

export default Input;
