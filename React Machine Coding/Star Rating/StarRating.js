import { useState } from "react";

const StarRating = ({ size = 5, rating, onChange = () => {} }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };
  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, i) => {
          let starClass = "star";
          const starValue = i + 1;

          if (hoverRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }

          return (
            <span
              key={i}
              className={starClass}
              onClick={() => onChange(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
