const CONFIG = {
  images: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=1200&fit=crop",
  ],
  interval: 3000,
  animation: {
    translateX: 150,
    rotation: 10,
  },
  brightness: {
    active: 1,
    inactive: 0.6,
  },
};

const createCardElement = (src, className = "img-1") => {
  const image = document.createElement("img");
  image.src = src;
  image.classList.add(className);
  image.style.filter = `brightness(${CONFIG.brightness.inactive})`;
  return image;
};

const animateCard = (element, { translateX, rotation, zIndex, brightness }) => {
  element.style.transform = `translateX(${translateX}px) rotate(${rotation}deg)`;
  element.style.zIndex = zIndex;
  element.style.filter = `brightness(${brightness})`;
};

const setActiveCard = (cards, activeIndex) => {
  cards.forEach((card, index) => {
    const isActive = index === activeIndex;
    animateCard(card, {
      translateX: isActive ? CONFIG.animation.translateX : 0,
      rotation: isActive ? CONFIG.animation.rotation : 0,
      zIndex: isActive ? cards.length + index : index,
      brightness: isActive
        ? CONFIG.brightness.active
        : CONFIG.brightness.inactive,
    });
  });
};

const initCarousel = (container, images) => {
  const cards = images.map((src) => {
    const card = createCardElement(src);
    container.appendChild(card);
    return card;
  });

  let currentIndex = 0;
  setActiveCard(cards, currentIndex);

  const cycle = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    setActiveCard(cards, currentIndex);
  };

  return { cards, cycle };
};

const startAutoShuffle = (carousel, interval) => {
  return setInterval(carousel.cycle, interval);
};

const container = document.querySelector(".img-carousel");
const carousel = initCarousel(container, CONFIG.images);
startAutoShuffle(carousel, CONFIG.interval);
