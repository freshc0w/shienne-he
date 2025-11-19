import React from "react";
import { IMAGES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";
import { Letter } from "./letter";
import { CustomCursor } from "./custom-cursor";

const DEFAULT_IMAGE = IMAGES.image_9;

export const HeroSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(DEFAULT_IMAGE);
  const [showCustomCursor, setShowCustomCursor] = React.useState(false);

  return (
    <section className="w-[100vw] md:h-[100svh] h-[350px] relative overflow-hidden">
      <HeroOverlay
        className="absolute top-0 left-0 w-full h-full"
        selectedImage={selectedImage}
      />
      <CustomCursor isVisible={showCustomCursor} />
      <div className="absolute top-[40%] left-8 md:left-32 z-20 text-white pointer-events-none">
        <p className="text-lg md:text-xl font-brandon font-light max-w-[300px]">
          Just a 20-something girl
          <br />
          living in...
        </p>
      </div>
      <a
        href="#intro-text"
        className="absolute bottom-0 h-[70%] w-full left-0 z-10 border-none bg-transparent text-inherit no-underline outline-none cursor-none"
        style={{
          scrollBehavior: "smooth",
          color: "inherit",
          textDecoration: "none",
          background: "transparent",
          outline: "none",
        }}
        onMouseEnter={() => setShowCustomCursor(true)}
        onMouseLeave={() => setShowCustomCursor(false)}
      >
        <div className="absolute top-0 left-0 w-full h-full text-white">
          <div className="absolute bottom-0 left-0 transform-none w-full">
            <div className="intro-title font-brandon font-bold w-full flex justify-center">
              <Letter
                letter="s"
                onMouseEnter={() => setSelectedImage(IMAGES.image_1)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="h"
                onMouseEnter={() => setSelectedImage(IMAGES.image_2)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="i"
                onMouseEnter={() => setSelectedImage(IMAGES.image_3)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_4)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                onMouseEnter={() => setSelectedImage(IMAGES.image_6)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                onMouseEnter={() => setSelectedImage(IMAGES.image_7)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_8)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                hidden={true}
                onMouseEnter={() => setSelectedImage(IMAGES.image_9)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="h"
                onMouseEnter={() => setSelectedImage(IMAGES.image_9)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                onMouseEnter={() => setSelectedImage(IMAGES.image_9)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};
