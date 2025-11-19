import React from "react";
import { IMAGES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";

export const HeroSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(IMAGES.image_1);

  return (
    <section className="w-[100vw] md:h-[100svh] h-[350px] relative">
      <HeroOverlay className="absolute top-0 left-0 w-full h-full" />
      <a
        href="#intro-text"
        className="absolute bottom-0 h-[70%] w-full left-0 z-10"
      >
        <div className="absolute top-0 left-0 w-full h-full text-white">
          <div className="absolute bottom-0 left-0 transform-none w-full">
            <h1 className="intro-title font-brandon font-bold w-full flex justify-center">
              <span>s</span>
              <span>h</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>n</span>
              <span>e</span>
              <span className="opacity-0 text-[10vw]">n</span>
              <span>h</span>
              <span>e</span>
            </h1>
          </div>
        </div>
      </a>
    </section>
  );
};
