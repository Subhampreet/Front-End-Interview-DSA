import { useState } from "react";
import useToggle from "./customHook";

export default function Toggle() {
  // [state, setState] = useState(false);

  // const handleClick = () => {
  //   setState(!state);
  // };

  // const handleTrue = () => {
  //   setState(true);
  // };

  // const handleFalse = () => {
  //   setState(false);
  // };

  [state, { setToggle, setTrue }] = useToggle(false);

  return (
    <div>
      <div>
        {/* <button onClick={handleClick}>Toggle</button>
        <button onClick={handleFalse}>Set False</button>
        <button onClick={handleTrue}>Set True</button> */}

        <button onClick={setToggle}>Toggle</button>
        <button onClick={setTrue}>Set True</button>
        <p>{state.toString()}</p>
      </div>
    </div>
  );
}
