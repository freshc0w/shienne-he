import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { FAMILY_FILES, HERO_FILES } from "../../constants";

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
      <header
        className={`fixed w-full z-50 top-0 with-intro text-primary-foreground transition-opacity duration-300 ${
          mobileMenuOpen
            ? "lg:opacity-100 opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="flex justify-between items-center w-full font-sans text-2xl px-4 md:px-12 py-4 md:py-6">
          <div className="flex items-center">
            <img
              src={HERO_FILES.image_0.src}
              alt={HERO_FILES.image_0.alt}
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
                <span>contact me</span>
                <ExternalLinkIcon />
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {!mobileMenuOpen && (
              <Button
                variant="default"
                className={`rounded-full gap-2 text-sm px-6 py-2 border-2 bg-primary text-primary-foreground border-primary`}
                asChild
              >
                <a href="#contact">
                  <span>contact me</span>
                </a>
              </Button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border-2 transition-all duration-300 ${
                isScrolled
                  ? "border-foreground bg-background text-foreground"
                  : mobileMenuOpen
                  ? "border-black text-foreground"
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex flex-col justify-center h-full px-6 py-4">
              <nav className="flex flex-col gap-1">
                {[
                  { num: "01", label: "about me", href: "#intro-text" },
                  { num: "02", label: "timeline", href: "#timeline" },
                  { num: "03", label: "testimonials", href: "#testimonials" },
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                    className="group relative py-4 border-b border-border/30 px-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm font-light text-primary">
                          {item.num}
                        </span>
                        <span className="text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="space-y-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="h-px bg-border/30 mb-6" />
                <Button
                  variant="default"
                  className="w-full rounded-full gap-2 text-lg px-8 py-6 border-2 bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-all duration-300"
                  asChild
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span>Let's grab a coffee</span>
                  </a>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Not looking for opportunities at the moment
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
