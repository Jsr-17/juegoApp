import React from "react";
import type { ImageCarouselProps } from "../../interfaces/ImageCarouselProps";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, name }) => {
  const carouselId = name;

  return (
    <div
      id={carouselId}
      className="carousel slide my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner  animated-carousel">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100 img-fluid"
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
