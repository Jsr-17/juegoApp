import React from "react";
import type { ImageCarouselProps } from "../../interfaces/ImageCarouselProps";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, name }) => {
  const carouselId = name;

  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100 img-fluid border-radius	"
              alt={`Slide ${index + 1}`}
              style={{
                maxHeight: "800px",

                width: "100%",
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
