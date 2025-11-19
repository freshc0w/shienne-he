import "./App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero/hero-section";
import { AboutSection } from "./components/about/about-section";

const App = () => {
  return (
    <div className="min-h-[300vh]">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;
