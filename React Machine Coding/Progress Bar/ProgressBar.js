import { useEffect, useState } from "react";

export default function ProgressBar({ value = 0 }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()} %
      </span>
      <div
        className="color"
        style={{ width: `${percent}%` }}
        // style={{
        //   transform: `scaleX(${percent}/100)`,
        //   transformOrigin: "left",
        // }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
}
