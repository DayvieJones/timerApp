import "./Button.css";

interface ButtonProps {
  buttonContent: string;
  handleOnClickEvent: () => void;
  isLightMode: boolean;
}

function Button({
  buttonContent,
  handleOnClickEvent,
  isLightMode,
}: ButtonProps) {
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
