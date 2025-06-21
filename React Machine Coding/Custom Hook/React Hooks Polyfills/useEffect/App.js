import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    console.log("Effect Triggered", counter);

    return () => {
      console.log("clean up");
    };
  }, [counter]);

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>

      <p>{counter2}</p>
      <button onClick={handleClick2}>Increment Counter 2 </button>
    </div>
  );
}
