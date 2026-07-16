import { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Details from "./components/Details";
import About from "./components/About";
import Process from "./components/Process";
import Amenities from "./components/Amenities";
import Investment from "./components/Investment";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NoiseOverlay from "./components/NoiseOverlay";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <Preloader onDone={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <NoiseOverlay />
          <Navigation />
          <ScrollProgress />
          <main className="site-main">
            <Hero />
            <Details />
            <About />
            <Process />
            <Amenities />
            <Investment />
            <Gallery />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
