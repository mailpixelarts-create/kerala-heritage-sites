import { useState, useCallback } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Cottage from "./components/Cottage";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Investment from "./components/Investment";
import Plantation from "./components/Plantation";
import Location from "./components/Location";
import Disclosures from "./components/Disclosures";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NoiseOverlay from "./components/NoiseOverlay";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <CustomCursor />
      {!loaded && <Preloader onComplete={onComplete} />}
      <div className={`site-content ${loaded ? "site-content--visible" : ""}`}>
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
          <Gallery />
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
      </div>
      <BackToTop />
    </>
  );
}
