import { useRef } from "react";

const useCustomHook = (cb, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = cb();

    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  // deps changes or No deps array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = cb();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};

export default useCustomHook;
