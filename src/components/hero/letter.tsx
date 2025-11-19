import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const Letter = ({
  letter,
  onMouseEnter,
  onMouseLeave,
  hidden,
  delay = 0,
}: {
  letter: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hidden?: boolean;
  delay?: number;
}) => {
  return (
    <motion.span
      onMouseOver={onMouseEnter}
      onMouseOut={onMouseLeave}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: hidden ? 0 : 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "transition-all duration-500 inline-block",
        hidden ? "text-[12.5vw]" : "",
        "hover:[-webkit-text-stroke:8px_white] hover:[text-stroke:8px_white] hover:[-webkit-text-fill-color:transparent] hover:[text-fill-color:transparent]",
      )}
    >
      {letter}
    </motion.span>
  );
};
