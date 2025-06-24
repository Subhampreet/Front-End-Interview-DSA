import { useEffect, useMemo, useRef, useState } from "react";
import useIntersectionObsever from "./hooks/useIntersectionObserver";
import "./styles.css";

export default function App() {
  const ref = useRef(null);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );

  const intersectionEntry = useIntersectionObsever(ref, options);

  console.log(intersectionEntry?.isIntersecting);
  console.log(intersectionEntry?.intersectionRatio);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{ height: "200vh", backgroundColor: "black" }}></div>
      <div
        ref={ref}
        style={{
          height: "50vh",
          backgroundColor: intersectionEntry?.isIntersecting ? "red" : "yellow",
        }}
      >
        <h2>Subham</h2>
      </div>
    </div>
  );
}
