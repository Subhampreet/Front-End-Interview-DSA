import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deboucedValue = useDebounce(input, 2000, () => {
    // API call logic
    console.log("Event Debounced");
  });

  return (
    <div className="App">
      <h1>debouncing</h1>
      <p>{deboucedValue}</p>

      <input
        type="text"
        value={input}
        placeholder="Enter some text"
        onChange={handleChange}
      />
    </div>
  );
}
