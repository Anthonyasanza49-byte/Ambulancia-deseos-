import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '', isVisible }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      countRef.current = 0;
      return undefined;
    }

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}
