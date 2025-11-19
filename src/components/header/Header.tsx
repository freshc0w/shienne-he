import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { IMAGES } from "../../constants";

export const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
      <header className="fixed w-full z-50 top-0 with-intro text-primary-foreground">
        <div className="flex justify-between items-center w-full font-sans text-2xl px-4 md:px-12 py-4 md:py-6">
          <div className="flex items-center py-2">
            <img
              src={IMAGES.image_7.src}
              alt={IMAGES.image_7.alt}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center py"
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
                  className="flex gap-4 items-center pr-4"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="bg-accent/30 rounded-l-full pl-4 pr-4 py-2 skew-x-[-10deg]">
                    <span
                      className={`text-accent-foreground text-3xl skew-x-[10deg] inline-block ${
                        isScrolled && scrollingUp ? "text-black" : ""
                      }`}
                    >
                      sh.
                    </span>
                  </div>
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Button
              variant="default"
              className="rounded-full gap-2 text-sm px-6 py-2 border-2 bg-primary text-primary-foreground border-primary"
              asChild
            >
              <a href="#contact">
                <span>Contact Me</span>
              </a>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border-2 transition-all duration-300 ${
                isScrolled
                  ? "border-foreground bg-background text-foreground"
                  : "border-primary-foreground bg-transparent text-primary-foreground"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <motion.a
                href="#intro-text"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl text-foreground hover:opacity-70 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                about me
              </motion.a>
              <motion.a
                href="#timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl text-foreground hover:opacity-70 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                timeline
              </motion.a>
              <motion.a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl text-foreground hover:opacity-70 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                testimonials
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button
                  variant="default"
                  className="rounded-full gap-2 text-lg px-8 py-6 border-2 bg-primary text-primary-foreground border-primary"
                  asChild
                >
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    <span>Contact Me</span>
                    <ExternalLinkIcon />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
