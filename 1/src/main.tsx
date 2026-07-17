import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LenisProvider } from "./context/LenisContext";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>
);
