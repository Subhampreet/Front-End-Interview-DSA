import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  let intervalRef = useRef(null);

  const handleStart = () => {
    setNow(Date.now());
    setStartTime(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let intervalTime = 0;
  if (now !== null && startTime !== null) {
    intervalTime = (now - startTime) / 1000;
  }

  return (
    <div className="App">
      {intervalTime.toFixed(3)}
      <br />
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
