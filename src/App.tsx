import "./App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero/hero-section";
const App = () => {
  return (
    <div className="min-h-[300vh]">
      <Header />
      <HeroSection />
      <section id="intro-text">lol</section>
    </div>
  );
};

export default App;
