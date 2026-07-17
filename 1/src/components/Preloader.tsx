import { useEffect, useRef, useState, memo } from "react";

const Preloader = memo(function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    // Wait for CSS animation to finish (2s count + 1s fade), then tell parent
    timerRef.current = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 3200);

    return () => clearTimeout(timerRef.current);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="preloader" aria-label="Loading">
      <div className="preloader__inner">
        <div className="preloader__counter">
          <span className="preloader__counter-fill" />
        </div>
        <p className="preloader__tagline">Kerala Heritage</p>
      </div>
    </div>
  );
});

export default Preloader;
