import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function HomepageCarousel() {
  return (
    <main>
      {/* <Carousel
        infiniteLoop
        showArrows="false"
        showThumbs="false"
        showIndicators="false"
      >
        <article className="h-96 w-full">
          <img
            src="/carousel-image-1.png"
            alt="latest iphone 14"
            className="h-full"
          />
        </article>
      </Carousel> */}
      <img
        src="/carousel-image-1.png"
        alt="latest iphone 14"
        className="h-full w-full"
      />
    </main>
  );
}
