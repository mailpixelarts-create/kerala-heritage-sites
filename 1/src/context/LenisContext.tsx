import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  disableLenis: () => void;
  enableLenis: () => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({ autoRaf: true });
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const disableLenis = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const enableLenis = () => {
    if (lenis) {
      lenis.start();
    }
  };

  return (
    <LenisContext.Provider value={{ lenis, disableLenis, enableLenis }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return context;
}
