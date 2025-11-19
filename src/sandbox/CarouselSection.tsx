import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type CarouselItem = {
  id: string;
  title: string;
  metric: string;
  imageUrl: string;
  category: string;
};

type CarouselSectionProps = {
  items: CarouselItem[];
  interval?: number;
};

const CARD_ANIMATIONS = [
  { translateX: -200, rotation: 10 },
  { translateX: 200, rotation: 10 },
  { translateX: 200, rotation: 15 },
  { translateX: 200, rotation: -15 },
];

const SNAP_BACK_DELAY = 400;
const BRIGHTNESS = { active: 1, inactive: 0.6 };
const IMAGE_OFFSET = 200;

const CarouselSection = ({ items, interval = 3000 }: CarouselSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(items.length - 1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [stackOrder, setStackOrder] = useState(() =>
    items.map((_, index) => index),
  );
  const activeIndexRef = useRef(items.length - 1);
  const directionRef = useRef(-1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const updateStackOrder = (index: number) => {
    setStackOrder((prev) => {
      const newOrder = prev.filter((i) => i !== index);
      newOrder.push(index);
      return newOrder;
    });
  };

  const activateCard = (index: number) => {
    if (index === activeIndexRef.current) return;

    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setActiveIndex(index);
    activeIndexRef.current = index;
    updateStackOrder(index);

    if (index >= items.length - 1) {
      directionRef.current = -1;
    } else if (index <= 0) {
      directionRef.current = 1;
    }

    setIsAnimating(true);
    snapTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      startAutoShuffle();
    }, SNAP_BACK_DELAY);
  };

  const cycle = () => {
    let nextIndex = activeIndexRef.current + directionRef.current;

    if (nextIndex >= items.length - 1) {
      nextIndex = items.length - 1;
      directionRef.current = -1;
    } else if (nextIndex <= 0) {
      nextIndex = 0;
      directionRef.current = 1;
    }

    activateCard(nextIndex);
  };

  const startAutoShuffle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(cycle, interval);
  };

  useEffect(() => {
    updateStackOrder(activeIndex);
    startAutoShuffle();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    };
  }, []);

  const getCardStyles = (index: number) => {
    const isActive = index === activeIndex;
    const animation = CARD_ANIMATIONS[index] || CARD_ANIMATIONS[0];
    const zIndex = isActive ? items.length * 2 : stackOrder.indexOf(index);

    return {
      translateX: isActive && isAnimating ? animation.translateX : 0,
      rotation: isActive && isAnimating ? animation.rotation : 0,
      zIndex,
      brightness: isActive ? BRIGHTNESS.active : BRIGHTNESS.inactive,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2d3e50 0%, #1a2a3a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "600px",
        }}
      >
        {items.map((item, index) => {
          const styles = getCardStyles(index);

          return (
            <motion.div
              key={item.id}
              onClick={() => activateCard(index)}
              animate={{
                x: styles.translateX,
                rotate: styles.rotation,
                zIndex: styles.zIndex,
                filter: `brightness(${styles.brightness})`,
              }}
              transition={{
                duration: SNAP_BACK_DELAY/1000,
                ease: "easeOut",
              }}
              style={{
                cursor: "pointer",
                width: "350px",
                height: "500px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                marginLeft: index === 0 ? 0 : `-${IMAGE_OFFSET}px`,
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselSection;
