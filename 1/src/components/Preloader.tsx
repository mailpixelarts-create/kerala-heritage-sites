import { useEffect, useState, memo } from "react";

const Preloader = memo(function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => {
      onDone();
      setPhase("revealing");
    }, 2000);

    const t2 = setTimeout(() => {
      setPhase("done");
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "revealing" ? "preloader--revealing" : ""}`}>
      <div className="preloader__inner">
        <div className="preloader__stroke-counter">
          <span className="preloader__stroke-text preloader__count-up" />
          <span className="preloader__stroke-outline preloader__count-outline" />
        </div>
        <span className="preloader__percent">%</span>
        <div className="preloader__track">
          <div className="preloader__fill preloader__fill-animate" />
        </div>
      </div>
    </div>
  );
});

export default Preloader;
