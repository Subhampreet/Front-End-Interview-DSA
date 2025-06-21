// useMemo Polyfill

import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;

  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};

const useCustomMemo = (cb, deps) => {
  // variavle or state -> to store cache value
  const memoizedRef = useRef(null);
  //changes in deps
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }
  //cleanup logic
  useEffect(() => {
    memoizedRef.current = null;
  }, []);
  // return memoized value(if any)
  return memoizedRef.current.value;
};

export default useCustomMemo;
