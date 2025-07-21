import { useEffect, useState } from "react";
import useLocalStorage from "./components/useLocalStorage";
import "./styles.css";

export default function App() {
  const [user, setUser] = useLocalStorage("userName", "Guest");
  const [theme, setTheme] = useLocalStorage("dark", false);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="checkbox"
        checked={theme}
        onChange={(e) => setTheme(e.target.checked)}
      />
      <br />
      <br />

      <div
        style={{
          background: theme ? "#000" : "#fff",
          color: theme ? "#fff" : "#000",
          padding: "40px",
        }}
      >
        <p>This content changes theme</p>
      </div>
    </div>
  );
}
