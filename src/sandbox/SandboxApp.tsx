import CarouselSection from "./CarouselSection";
import { carouselData } from "./data";

const SandboxApp = () => {
  return <CarouselSection items={carouselData} interval={3000} />;
};

export default SandboxApp;
