// Reference - https://www.youtube.com/watch?v=Ckka1HhE2kM

import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }

  return (
    <div>
      Hello from Infinite Scroll
      {elements}
    </div>
  );
}
