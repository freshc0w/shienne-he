import "./App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero/hero-section";
import { AboutSection } from "./components/about/about-section";
import { InterestsSection } from "./components/interests/interests-section";

const App = () => {
  return (
    <div className="min-h-[300vh]">
      <Header />
      <HeroSection />
      <AboutSection />
      <InterestsSection />
    </div>
  );
};

export default App;
