import { useEffect, useMemo, useRef, useState } from "react";
import StarRating from "./components/StarRating";
import "./styles.css";

export default function App() {
  const [currentRating, setCurrentRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <StarRating
        size={5}
        rating={currentRating}
        onChange={handleRatingChange}
      />
    </div>
  );
}
