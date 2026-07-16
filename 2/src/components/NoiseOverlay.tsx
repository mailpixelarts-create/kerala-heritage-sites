import { memo } from "react";

const NoiseOverlay = memo(function NoiseOverlay() {
  return (
    <div className="noise-overlay" aria-hidden="true" />
  );
});

export default NoiseOverlay;
