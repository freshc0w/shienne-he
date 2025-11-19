import { motion } from "framer-motion";
import { AnimatedTextLine } from "./animated-text-line";
import { MorphingText } from "../ui/morphing-text";

type IntroTextProps = {
  firstLineWords: string[];
  secondLineWords: string[];
  morphingWords: string[];
  animationDuration: number;
  staggerDelay: number;
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const IntroText = ({
  firstLineWords,
  secondLineWords,
  morphingWords,
  animationDuration,
  staggerDelay,
}: IntroTextProps) => {
  return (
    <div className="absolute top-[40%] left-8 md:left-40 z-20 text-white pointer-events-none">
      <div className="text-lg md:text-xl font-brandon font-light max-w-[350px]">
        <AnimatedTextLine
          words={firstLineWords}
          startIndex={0}
          staggerDelay={staggerDelay}
          duration={animationDuration}
          className="flex-wrap gap-x-[0.3em]"
        />
        <AnimatedTextLine
          words={secondLineWords}
          startIndex={firstLineWords.length}
          staggerDelay={staggerDelay}
          duration={animationDuration}
          className="gap-2"
        >
          <motion.span
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: animationDuration,
              delay: (firstLineWords.length + secondLineWords.length) * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MorphingText
              texts={morphingWords}
              className="inline-block text-lg md:text-xl font-brandon font-light min-w-[100px] md:min-w-[120px]"
            />
          </motion.span>
        </AnimatedTextLine>
      </div>
    </div>
  );
};

