import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <ProgressBar value={value} />
    </div>
  );
}
