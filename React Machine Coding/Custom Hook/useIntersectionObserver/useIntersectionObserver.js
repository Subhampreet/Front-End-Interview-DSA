import { useEffect, useState } from "react";

const useIntersectionObsever = (ref, options) => {
  const [intersectionEntry, setIntersectionEntry] = useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries) => {
        setIntersectionEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);

      observer.observe(ref.current);

      return () => {
        setIntersectionEntry(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionEntry;
};

export default useIntersectionObsever;
