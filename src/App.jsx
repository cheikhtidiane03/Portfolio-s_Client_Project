import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ProcessSection from "./components/sections/ProcessSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import CustomCursor from "./components/ui/CustomCursor";
import PageLoader from "./components/ui/PageLoader";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* UI Overlays */}
      <CustomCursor />
      <ScrollProgress />
      {!loaded && <PageLoader onDone={() => setLoaded(true)} />}

      {/* Main Site */}
      <div
        style={{
          background: "#08080C",
          minHeight: "100vh",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ProcessSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
