import { useState, useEffect } from "react";
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
  heading?: string;
  description?: string;
};

const CarouselSection = ({
  items,
  interval = 3000,
  heading = "Genuine. Impact.",
  description = "We partner with bold brands to drive impact across every stage of the customer journey.",
}: CarouselSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-left">
          <h1 className="carousel-heading">{heading}</h1>
          <p className="carousel-description">{description}</p>

          <div className="carousel-nav">
            {items.map((item, index) => (
              <button
                key={item.id}
                className={`carousel-nav-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="carousel-right">
          <div className="carousel-stack">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="carousel-card"
                  style={{
                    transform: `translateX(-${index * 80}px)`,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? items.length : index,
                  }}
                >
                  <div className="carousel-image-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="carousel-image"
                    />
                  </div>
                  <div className="carousel-card-info">
                    <h3 className="carousel-card-title">{item.title}</h3>
                    <p className="carousel-card-metric">{item.metric}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
