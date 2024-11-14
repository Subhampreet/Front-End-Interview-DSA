import { useDebugValue, useEffect, useState } from "react";
import Button from "./Button";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [run, setRunner] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [run, time]);

  const runnerControl = () => {
    setRunner((prev) => !prev);
  };

  const sec = Math.floor(time % 60);
  const min = Math.floor((time / 60) % 60);
  const hour = Math.floor(time / (60 * 60));

  let formatTime = (val) => {
    return val <= 9 ? `0${val}` : val;
  };

  let resetTime = () => {
    setRunner(false);
    setTime(0);
  };

  let updateLaps = () => {
    if (!run) return;

    const currentTime = `${formatTime(hour)} : ${formatTime(
      min
    )} : ${formatTime(sec)}`;
    setLaps((prevLap) => [...prevLap, currentTime]);
  };

  return (
    <div className="timer">
      <div className="time">
        {formatTime(hour)} : {formatTime(min)} : {formatTime(sec)}
      </div>
      <div className="control">
        <Button label={run ? "Stop" : "Start"} buttonHandler={runnerControl} />
        <Button label="Reset" buttonHandler={resetTime} />
        <Button label="Lap" buttonHandler={updateLaps} />
      </div>

      {laps.map((lap) => (
        <div>{lap}</div>
      ))}
    </div>
  );
}
