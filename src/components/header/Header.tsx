import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { IMAGES } from "../../constants";

export const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        setScrollingUp(currentScrollY < lastScrollY.current);
      } else {
        setScrollingUp(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showLinks = !isScrolled || scrollingUp;

  return (
    <header className="fixed w-full z-50 top-0 with-intro text-primary-foreground">
      <div className="flex justify-between items-center w-full font-sans text-2xl px-12 py-6">
        <div className="flex items-center py-2">
          <img
            src={IMAGES.image_7.src}
            alt={IMAGES.image_7.alt}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <motion.div
          className="flex items-center py"
          animate={{
            backgroundColor:
              isScrolled && scrollingUp
                ? "oklch(0.99 0.01 110)"
                : "transparent",
            borderRadius: isScrolled && scrollingUp ? "9999px" : "0px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {showLinks && (
              <motion.div
                className="flex gap-4 items-center px-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <a
                  href="#intro-text"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isScrolled && scrollingUp ? "text-foreground" : ""
                  }`}
                >
                  about me
                </a>
                <a
                  href="#timeline"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isScrolled && scrollingUp ? "text-foreground" : ""
                  }`}
                >
                  timeline
                </a>
                <a
                  href="#testimonials"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isScrolled && scrollingUp ? "text-foreground" : ""
                  }`}
                >
                  testimonials
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="default"
            className={`rounded-full gap-2 text-xl has-[>svg]:px-10 py-6 border-2 flex items-center transition-all duration-300 whitespace-nowrap z-[100] overflow-hidden ${
              isScrolled
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent border-primary-foreground"
            }`}
            asChild
          >
            <a href="#contact">
              <span>Contact Me</span>
              <ExternalLinkIcon />
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  );
};
