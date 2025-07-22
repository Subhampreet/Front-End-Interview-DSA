import { useEffect, useState } from "react";
import useWindowSize from "./components/useWindowSize";
import "./styles.css";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      {width !== undefined ? <p>{width} px</p> : <p>loading...</p>}
      {height !== undefined ? <p>{height} px</p> : <p>loading...</p>}

      {width !== undefined && width < 768 && (
        <p style={{ color: "blue", fontWeight: "bold" }}>
          Looks like you're on a small screen (e.g., mobile)!
        </p>
      )}

      {width !== undefined && width >= 768 && width < 1200 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          You're on a medium-sized screen (e.g., tablet/laptop).
        </p>
      )}

      {width !== undefined && width >= 1200 && (
        <p style={{ color: "purple", fontWeight: "bold" }}>
          You're on a large screen (e.g., desktop)!
        </p>
      )}

      <p>Try resizing your browser window to see the values change.</p>
    </div>
  );
}
