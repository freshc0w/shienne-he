import CarouselSection from "./CarouselSection";
import { carouselData } from "./data";
import "./styles.css";

const SandboxApp = () => {
  return (
    <div>
      <CarouselSection
        items={carouselData}
        heading="Shienne. He."
        description="We are an industry-leading digital marketing agency partnering with bold brands to drive impact across every stage of the customer journey - maximizing it, measuring it, and repeating it."
        interval={3000}
      />
    </div>
  );
};

export default SandboxApp;
