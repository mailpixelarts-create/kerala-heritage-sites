import { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Cottage from "./components/Cottage";
import Amenities from "./components/Amenities";
import Investment from "./components/Investment";
import Plantation from "./components/Plantation";
import Location from "./components/Location";
import Disclosures from "./components/Disclosures";
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
          <main className="relative overflow-x-hidden">
            <Hero />
            <div className="section-divider" aria-hidden="true" />
            <Vision />
            <div className="section-divider" aria-hidden="true" />
            <Cottage />
            <div className="section-divider" aria-hidden="true" />
            <Amenities />
            <div className="section-divider" aria-hidden="true" />
            <Investment />
            <div className="section-divider" aria-hidden="true" />
            <Plantation />
            <div className="section-divider" aria-hidden="true" />
            <Location />
            <div className="section-divider" aria-hidden="true" />
            <Disclosures />
            <div className="section-divider" aria-hidden="true" />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
