import React from "react";
import { HERO_FILES } from "../../constants";
import { HeroOverlay } from "./hero-overlay";
import { IntroText } from "./intro-text";
import { ScrollPrompt } from "./scroll-prompt";

const DEFAULT_IMAGE = HERO_FILES.image_0;
const TEXT_ANIMATION_DURATION = 0.5;
const TEXT_STAGGER_DELAY = 0.4;
const FIRST_LINE_WORDS = ["Associate", "advisor", "by", "day,"];
const SECOND_LINE_WORDS = ["Big", "sister", "by"];
const MORPHING_WORDS = ["nature", "night", "calling"];
const LETTER_DELAY_OFFSET = 1.2;

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
      <IntroText
        firstLineWords={FIRST_LINE_WORDS}
        secondLineWords={SECOND_LINE_WORDS}
        morphingWords={MORPHING_WORDS}
        animationDuration={TEXT_ANIMATION_DURATION}
        staggerDelay={TEXT_STAGGER_DELAY}
      />
      <ScrollPrompt
        showCustomCursor={showCustomCursor}
        onCursorChange={setShowCustomCursor}
        onImageChange={setSelectedImage}
        defaultImage={DEFAULT_IMAGE}
        scrollScale={scrollScale}
        letterDelayOffset={LETTER_DELAY_OFFSET}
      />
    </section>
  );
};
