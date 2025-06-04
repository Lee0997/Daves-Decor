import React, { useState, useEffect, useRef } from "react";
import "../styles/Carousel.css";

interface CarouselProps {
  images: { src: string; alt?: string }[];
}

const AUTO_PLAY_INTERVAL = 5000;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState<"slide-in" | "slide-out">(
    "slide-in"
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (idx: number) => {
    setAnimation("slide-out");
    setTimeout(() => {
      setCurrent(idx);
      setAnimation("slide-in");
    }, 500);
  };

  const prevSlide = () => {
    goToSlide(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    goToSlide(current === images.length - 1 ? 0 : current + 1);
  };

  // Auto-play effect
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Refined Painting. Elevated Living</h2>
      <div className="carousel">
        <button
          onClick={prevSlide}
          className="carousel-btn left"
          aria-label="Previous"
        >
          &#8592;
        </button>
        {images[current]?.src ? (
          <img
            src={images[current].src}
            alt={images[current].alt || `Work example ${current + 1}`}
            className={`carousel-img ${animation}`}
            onAnimationEnd={() => setAnimation("slide-in")}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML += `<div style='width:100%;height:500px;display:flex;align-items:center;justify-content:center;background:#e9ecef;color:#888;font-size:1.2rem;border-radius:10px;'>No Image</div>`;
              }
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e9ecef",
              color: "#888",
              fontSize: "1.2rem",
              borderRadius: "10px",
            }}
          >
            No Image
          </div>
        )}
        <button
          onClick={nextSlide}
          className="carousel-btn right"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
      <div>
        <a className="action-call" href="#contact">
          Book a free quote!
        </a>
      </div>
    </div>
  );
};

export default Carousel;
