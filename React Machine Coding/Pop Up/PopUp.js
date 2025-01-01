import { useState, useEffect } from "react";
import Pop from "./Pop";

export default function PopUp() {
  const [btnPopUp, setBtnPopUp] = useState(false);
  const [timePopUp, setTimePopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePopUp(true);
    }, 3000);
  }, []);

  return (
    <div>
      <main>
        <h1>Welcome to React Pop Up</h1>
        <button onClick={() => setBtnPopUp(true)}>Pop Up</button>
        <Pop trigger={btnPopUp} setTrigger={setBtnPopUp}>
          Hello from My Pop Up
        </Pop>

        <Pop trigger={timePopUp} setTrigger={setTimePopUp}>
          Hello from Timed Pop Up
        </Pop>
      </main>
    </div>
  );
}
