import React from "react";
import { IMAGES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";
import { Letter } from "./letter";

export const HeroSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(IMAGES.image_1);

  return (
    <section className="w-[100vw] md:h-[100svh] h-[350px] relative">
      <HeroOverlay
        className="absolute top-0 left-0 w-full h-full"
        selectedImage={selectedImage}
      />
      <a
        href="#intro-text"
        className="absolute bottom-0 h-[70%] w-full left-0 z-10 border-none"
      >
        <div className="absolute top-0 left-0 w-full h-full text-white">
          <div className="absolute bottom-0 left-0 transform-none w-full">
            <h1 className="intro-title font-brandon font-bold w-full flex justify-center">
              <Letter
                letter="s"
                onMouseEnter={() => setSelectedImage(IMAGES.image_1)}
              />
              <Letter
                letter="h"
                onMouseEnter={() => setSelectedImage(IMAGES.image_2)}
              />
              <Letter
                letter="i"
                onMouseEnter={() => setSelectedImage(IMAGES.image_3)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_4)}
              />
              <Letter
                letter="n"
                onMouseEnter={() => setSelectedImage(IMAGES.image_5)}
              />
              <Letter
                letter="n"
                onMouseEnter={() => setSelectedImage(IMAGES.image_5)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_6)}
              />
              <Letter
                letter="n"
                hidden={true}
                onMouseEnter={() => setSelectedImage(IMAGES.image_2)}
              />
              <Letter
                letter="h"
                onMouseEnter={() => setSelectedImage(IMAGES.image_7)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_7)}
              />
            </h1>
          </div>
        </div>
      </a>
    </section>
  );
};
