import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";
import { Letter } from "./letter";
import { CustomCursor } from "./custom-cursor";

const DEFAULT_IMAGE = IMAGES.image_9;
const LETTER_DELAY_OFFSET = 1;

export const HeroSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(DEFAULT_IMAGE);
  const [showCustomCursor, setShowCustomCursor] = React.useState(false);

  return (
    <section className="w-[100vw] md:h-[100svh] h-[350px] relative overflow-hidden">
      <HeroOverlay
        className="absolute top-0 left-0 w-full h-full"
        selectedImage={selectedImage}
        isDefaultImage={selectedImage === DEFAULT_IMAGE}
      />
      <CustomCursor isVisible={showCustomCursor} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[40%] left-8 md:left-32 z-20 text-white pointer-events-none"
      >
        <p className="text-lg md:text-xl font-brandon font-light max-w-[300px]">
          Just a 20-something girl
          <br />
          living in...
        </p>
      </motion.div>
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
                delay={1.0 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_1)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="h"
                delay={1.1 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_2)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="i"
                delay={1.2 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_3)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                delay={1.3 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_4)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                delay={1.4 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_6)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                delay={1.5 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_7)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                delay={1.6 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_8)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="n"
                delay={1.7 + LETTER_DELAY_OFFSET}
                hidden={true}
                onMouseEnter={() => setSelectedImage(IMAGES.image_9)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="h"
                delay={1.8 + LETTER_DELAY_OFFSET}
                onMouseEnter={() => setSelectedImage(IMAGES.image_9)}
                onMouseLeave={() => setSelectedImage(DEFAULT_IMAGE)}
              />
              <Letter
                letter="e"
                delay={1.9 + LETTER_DELAY_OFFSET}
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
