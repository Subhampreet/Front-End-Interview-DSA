import { useEffect, useState } from "react";
import "./styles.css";

const colors = ["red", "yellow", "green"];

export default function App() {
  let [currentColor, setCurrentColor] = useState("red");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentColor((prev) => {
        let currentIndex = colors.indexOf(prev);
        let nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Traffic Light</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: currentColor === "red" ? "red" : "#ddd",
            border: "2px solid black",
          }}
        />
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: currentColor === "yellow" ? "yellow" : "#ddd",
            border: "2px solid black",
          }}
        />
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: currentColor === "green" ? "green" : "#ddd",
            border: "2px solid black",
          }}
        />
      </div>
    </div>
  );
}
