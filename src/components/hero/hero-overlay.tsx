import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const GRID_COLS = 10;
const GRID_ROWS = 8;

export const HeroOverlay = ({
  className,
  selectedImage,
  isDefaultImage = false,
}: {
  className?: string;
  selectedImage: { src: string; alt: string };
  isDefaultImage?: boolean;
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [selectedImage]);

  const cells = Array.from({ length: GRID_COLS * GRID_ROWS });

  const cellData = useMemo(
    () =>
      cells.map(() => ({
        delay: Math.random() * 0.6,
        scale: 0.8 + Math.random() * 0.4,
      })),
    [key],
  );

  return (
    <div className={cn("bg-black relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.img
          key={selectedImage.src}
          src={selectedImage.src}
          alt={selectedImage.alt}
          className={`w-full h-full object-cover brightness-85 contrast-120 saturate-90 ${isDefaultImage ? "object-top" : "object-center"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div
        key={key}
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {cells.map((_, index) => (
          <motion.div
            key={index}
            className="bg-black"
            initial={{ opacity: 1, scale: cellData[index].scale }}
            animate={{ opacity: 0, scale: 0.6 }}
            transition={{
              duration: 0.4,
              delay: cellData[index].delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none z-10" />
      {isDefaultImage && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      )}
    </div>
  );
};
