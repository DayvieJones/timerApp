import { useState } from "react";
import "./App.css";

function useFormInput() {
  const [value, setValue] = useState<number>(0);

  function handleInputChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value));
  }

  return { value, handleInputChangeEvent };
}

function App() {
  const { value, handleInputChangeEvent } = useFormInput();

  return (
    <div className="App">
      <p className="time_2">Set time</p>
      <input type="number" value={value} onChange={handleInputChangeEvent} />
      <br />
      <span className="time_1 bold">Time left: </span>
      <span className="time_1 bold">{value.toFixed(3)}s</span>
      <div className="button-row">
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
