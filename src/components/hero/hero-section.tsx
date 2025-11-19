import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";
import { Letter } from "./letter";
import { CustomCursor } from "./custom-cursor";
import { MorphingText } from "../ui/morphing-text";

const DEFAULT_IMAGE = IMAGES.image_7;

const TEXT_ANIMATION_DURATION = 0.5;
const TEXT_STAGGER_DELAY = 0.4;
const FIRST_LINE_WORDS = ["Associate", "advisor", "by", "day,"];
const SECOND_LINE_WORDS = ["Big", "sister", "by"];
const words = ["nature", "night", "calling"];
const LETTER_DELAY_OFFSET = 1.2;

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(DEFAULT_IMAGE);
  const [showCustomCursor, setShowCustomCursor] = React.useState(false);
  const [scrollScale, setScrollScale] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800;
      const scale = Math.min(1.15, 1 + (scrollY / maxScroll) * 0.1);
      setScrollScale(scale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-[100vw] md:h-[100svh] h-[350px] relative overflow-hidden">
      <HeroOverlay
        className="absolute top-0 left-0 w-full h-full"
        selectedImage={selectedImage}
        isDefaultImage={selectedImage === DEFAULT_IMAGE}
      />
      <CustomCursor isVisible={showCustomCursor} />
      <div className="absolute top-[40%] left-8 md:left-40 z-20 text-white pointer-events-none">
        <div className="text-lg md:text-xl font-brandon font-light max-w-[350px]">
          <p className="mb-0 flex flex-wrap gap-x-[0.3em]">
            {FIRST_LINE_WORDS.map((word, index) => (
              <motion.span
                key={`first-${index}`}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: TEXT_ANIMATION_DURATION,
                  delay: index * TEXT_STAGGER_DELAY,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <p className="mb-0 flex gap-2">
            {SECOND_LINE_WORDS.map((word, index) => (
              <motion.span
                key={`second-${index}`}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: TEXT_ANIMATION_DURATION,
                  delay: (FIRST_LINE_WORDS.length + index) * TEXT_STAGGER_DELAY,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: TEXT_ANIMATION_DURATION,
                delay:
                  (FIRST_LINE_WORDS.length + SECOND_LINE_WORDS.length) *
                  TEXT_STAGGER_DELAY,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MorphingText
                texts={words}
                className="inline-block text-lg md:text-xl font-brandon font-light min-w-[100px] md:min-w-[120px]"
              />
            </motion.span>
          </p>
        </div>
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
          {/* SCALE HERE */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              transform: `scale(${scrollScale}) translateZ(0px)`,
              transformOrigin: "center bottom",
            }}
          >
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
