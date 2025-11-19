import { motion } from "framer-motion";

type AnimatedTextLineProps = {
  words: string[];
  startIndex: number;
  staggerDelay: number;
  duration: number;
  className?: string;
  children?: React.ReactNode;
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatedTextLine = ({
  words,
  startIndex,
  staggerDelay,
  duration,
  className = "",
  children,
}: AnimatedTextLineProps) => {
  return (
    <p className={`mb-0 flex ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`word-${startIndex}-${index}`}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration,
            delay: (startIndex + index) * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
      {children}
    </p>
  );
};

