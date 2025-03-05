import React, { useState } from "react";

const Counter = ({ count }) => {
  console.log("Counter Re-rendered");
  return <h1>Count : {count}</h1>;
};

const MemoizedCounter = React.memo(Counter);

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      {/* <Counter count={count} /> */}
      <MemoizedCounter count={count} />
      <button onClick={() => setCount(count + 1)}>
        Click to Increase Count
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ReactMemo;
