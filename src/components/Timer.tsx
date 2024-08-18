import { useContext, useEffect, useRef, useState } from "react";

import TimeLeft from "./views/components/TimeLeft/TimeLeft";
import "./Timer.css";
import Input from "./input/Input";
import Button from "./button/Button";
import { LightModeContext } from "./context/LightModeContext";

function Timer() {
  const [inputValue, setInputValue] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [stop, setStop] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef<number | undefined>(undefined);
  const intervalRefreshTime = 50; // millisec
  let secondsLeft = inputValue - (now - startTime) / 1000;
  const { isLightMode } = useContext(LightModeContext);

  const handleInputChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValue = Number(event.target.value);
    if (newInputValue >= 0) {
      handleReset();
      setInputValue(newInputValue);
    } else alert("Negative values are not allowed");
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
    if (inputValue === 0) {
      alert("The timer cannot be started with zero.");
      return;
    }
    if (!isRunning) {
      clearInterval(intervalId.current);
      if (!stop) {
        const dateNow = Date.now();
        setStartTime(dateNow);
        setNow(dateNow);
        startIntervalProcess();
      } else {
        const timeElapsed = now - startTime;
        const dateNow = Date.now();
        setNow(dateNow);
        setStartTime(dateNow - timeElapsed);
        startIntervalProcess();
        setStop(false);
      }
      setIsRunning(true);
    }
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setNow(0);
    setStartTime(0);
    setStop(false);
    setIsRunning(false);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setStop(true);
    setIsRunning(false);
  }

  return (
    <div className={`timer-view ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="timer-body">
        <p className="time_2">Set time</p>
        <Input
          disable={isRunning}
          isLightMode={isLightMode}
          inputValue={inputValue}
          handleInputChangeEvent={handleInputChangeEvent}
        />
        <br />
        <TimeLeft secondsLeft={secondsLeft} />
        <div className="button-row">
          <Button handleOnClickEvent={handleStart} buttonContent={"Start"} />
          <Button handleOnClickEvent={handleStop} buttonContent={"Stop"} />
          <Button handleOnClickEvent={handleReset} buttonContent={"Reset"} />
        </div>
      </div>
    </div>
  );
}

export default Timer;
