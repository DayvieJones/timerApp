import { useEffect, useRef, useState } from "react";

import TimeLeft from "./views/components/TimeLeft/TimeLeft";
import "./Timer.css";
import Input from "./Input/Input";
import Button from "./Button/Button";

interface TimerProps {
  isLightMode: boolean;
}

function Timer({ isLightMode }: TimerProps) {
  const [inputValue, setInputValue] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [stop, setStop] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef<number | undefined>(undefined);
  const intervalRefreshTime = 10; // in Millisekunden
  let secondsLeft = inputValue - (now - startTime) / 1000;

  const handleInputChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(Number(event.target.value));
  };

  function startIntervalProcess() {
    intervalId.current = window.setInterval(() => {
      setNow(Date.now());
    }, intervalRefreshTime);
  }

  useEffect(() => {
    if ((now - startTime) / 1000 >= inputValue) {
      clearInterval(intervalId.current);
      setStop(false);
      setNow(startTime + inputValue * 1000);
    }
  }, [startTime, now, inputValue]);

  function handleStart() {
    if (!isRunning) {
      clearInterval(intervalId.current);
      if (!stop) {
        const dateNow = Date.now();
        setStartTime(dateNow);
        setNow(dateNow);
        startIntervalProcess();
      } else {
        const timeElapsed = now - startTime; // speichert die abgelaufene Zeit von inputValue
        const dateNow = Date.now(); // speichern der aktuellen Zeit
        setNow(dateNow); // setzen der aktuellen Zeit
        setStartTime(dateNow - timeElapsed); // setzen der Zeit, die bereits abgelaufen wäre
        startIntervalProcess(); // starten der "neuen Zeit"
        setStop(false);
      }
      setIsRunning(true);
    }
  }

  function handleReset() {
    clearInterval(intervalId.current); // stopt den aktuellen Intervall
    setNow(0); // Resettet den now
    setStartTime(0); // Resettet die startTime auf 0
    setStop(false); // Setzt den Stop
    setIsRunning(false); // Setzt isRunning auf false
  }

  function handleStop() {
    clearInterval(intervalId.current); // stoppt das weitere Herunterzählen
    setStop(true); // gibt an, dass die Pause gedrückt wurde
    setIsRunning(false); // Setze isRunning auf false
  }

  return (
    <div className={`timer-view ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="timer-body">
        <p className="time_2">Set time</p>
        <Input
          isLightMode={isLightMode}
          inputValue={inputValue}
          handleInputChangeEvent={handleInputChangeEvent}
        />
        <br />
        <TimeLeft secondsLeft={secondsLeft} />
        <div className="button-row">
          <Button
            isLightMode={isLightMode}
            handleOnClickEvent={handleStart}
            buttonContent={"Start"}
          />
          <Button
            isLightMode={isLightMode}
            handleOnClickEvent={handleStop}
            buttonContent={"Stop"}
          />
          <Button
            isLightMode={isLightMode}
            handleOnClickEvent={handleReset}
            buttonContent={"Reset"}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
