const CONFIG = {
  images: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1200&fit=crop",
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=1200&fit=crop",
  ],
  interval: 3000,
  snapBackDelay: 400,
  animations: [
    { translateX: -200, rotation: 10 },
    { translateX: 200, rotation: 10 },
    { translateX: 200, rotation: 15 },
    { translateX: 200, rotation: -15 },
  ],
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

const setActiveCard = (cards, activeIndex, stackOrder) => {
  cards.forEach((card, index) => {
    const isActive = index === activeIndex;
    const animation = CONFIG.animations[index];
    const zIndex = stackOrder.indexOf(index);
    animateCard(card, {
      translateX: isActive ? animation.translateX : 0,
      rotation: isActive ? animation.rotation : 0,
      zIndex: isActive ? cards.length * 2 : zIndex,
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

  let currentIndex = cards.length - 1;
  let direction = -1;
  let snapTimeout = null;
  let stackOrder = cards.map((_, index) => index);

  const updateStackOrder = (activeIndex) => {
    stackOrder = stackOrder.filter((i) => i !== activeIndex);
    stackOrder.push(activeIndex);
  };

  const snapBackActiveCard = (activeIndex) => {
    const activeCard = cards[activeIndex];
    const zIndex = stackOrder.indexOf(activeIndex);
    animateCard(activeCard, {
      translateX: 0,
      rotation: 0,
      zIndex: zIndex,
      brightness: CONFIG.brightness.active,
    });
  };

  cards.forEach((card, index) => {
    animateCard(card, {
      translateX: 0,
      rotation: 0,
      zIndex: index === currentIndex ? cards.length : index,
      brightness:
        index === currentIndex
          ? CONFIG.brightness.active
          : CONFIG.brightness.inactive,
    });
  });

  updateStackOrder(currentIndex);

  const cycle = () => {
    if (snapTimeout) clearTimeout(snapTimeout);

    currentIndex += direction;

    if (currentIndex >= cards.length - 1) {
      direction = -1;
    } else if (currentIndex <= 0) {
      direction = 1;
    }

    updateStackOrder(currentIndex);
    setActiveCard(cards, currentIndex, stackOrder);

    snapTimeout = setTimeout(() => {
      snapBackActiveCard(currentIndex);
    }, CONFIG.snapBackDelay);
  };

  return { cards, cycle };
};

const startAutoShuffle = (carousel, interval) => {
  return setInterval(carousel.cycle, interval);
};

const container = document.querySelector(".img-carousel");
const carousel = initCarousel(container, CONFIG.images);
startAutoShuffle(carousel, CONFIG.interval);
