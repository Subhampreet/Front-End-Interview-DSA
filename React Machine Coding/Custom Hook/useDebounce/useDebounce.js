const { useState, useEffect } = require("react");

const useDebounce = (value, delay, cb = () => {}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
      cb();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;