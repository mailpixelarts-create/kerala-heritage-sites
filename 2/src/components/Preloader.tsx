import { useEffect, useRef, useState, memo } from "react";

const Preloader = memo(function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
  const counterRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Ease-out quad for smooth deceleration
      const eased = 1 - (1 - rawProgress) * (1 - rawProgress);
      counterRef.current = Math.round(eased * 100);
      setProgress(counterRef.current);

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setPhase("revealing");
        setTimeout(() => {
          setPhase("done");
          setTimeout(onDone, 600);
        }, 800);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDone]);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "revealing" ? "preloader--revealing" : ""}`}>
      <div className="preloader__inner">
        <span className="preloader__counter" aria-live="polite" aria-label={`Loading ${progress} percent`}>
          {progress}
        </span>
        <div className="preloader__track">
          <div
            className="preloader__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
});

export default Preloader;
