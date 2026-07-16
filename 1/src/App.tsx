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
            <section className="story-intro" style={{ position: "relative", zIndex: 2, padding: "clamp(60px, 8vh, 90px) clamp(20px, 4vw, 48px)", background: "var(--green-dark)", textAlign: "center", maxWidth: 960, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 400, lineHeight: 1.1, color: "var(--white)", margin: "0 0 clamp(20px, 2.5vh, 28px)" }}>
                All Great Investment Tells a Story
              </h2>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.1vw, 18px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.55, color: "var(--gold)", margin: "0 0 clamp(28px, 3.5vh, 40px)" }}>
                Ours Begins With a Single Seed — and Grows Into a Forest of Opportunity.
              </p>
              <p style={{ fontSize: "clamp(14px, 1vw, 16px)", lineHeight: 1.8, color: "var(--gray-600)", maxWidth: 780, margin: "0 auto" }}>
                At Agarland Developers, we've designed a premium resort living experience that offers you a private 25-cent plot, a beautifully crafted 550–600 sq. ft. Kerala-style cottage, and access to world-class amenities – from a fishing spot to a farming area, from a children's park to an Ayurvedic centre. But beneath this lifestyle lies a powerful financial engine: 225 Agarwood trees and 50 Sandalwood trees, planted and maintained by us, that mature to a combined value of ₹1.95 crore. Your journey starts with a simple ₹1,10,000 per share, moves through a graceful first year, then delivers ₹45,000 every quarter, and finally settles into a steady ₹15,000 monthly income. It's the perfect harmony of living well and investing wisely – because at Agarland, we believe your returns should feel as good as your weekends.
              </p>
            </section>
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
