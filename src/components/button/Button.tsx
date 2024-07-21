import React, { useState } from "react";

interface ButtonProps {
  buttonName: string;
}

const Button = ({ buttonName }: ButtonProps) => {
  const [state, setState] = useState(0);

  function handleButtonChangeEvent() {
    setState(state + 1);
  }

  return <button onClick={handleButtonChangeEvent}>{buttonName}</button>;
};

export default Button;
