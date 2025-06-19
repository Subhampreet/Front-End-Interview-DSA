import { useEffect, useMemo, useRef, useState } from "react";
import useCustomMemo from "../components/use-custom-memo";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const square = () => {
    console.log("Expensive Calculation");
    return counter * counter;
  };

  const memoizedSquare = useCustomMemo(square, [counter]);

  return (
    <div className="App">
      <h1>Square Value : {memoizedSquare}</h1>
      <h1>Counter 1 : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 1)}>Decerement</button>
    </div>
  );
}
