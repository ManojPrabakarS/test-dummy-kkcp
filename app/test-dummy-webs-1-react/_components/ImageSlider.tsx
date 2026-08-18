"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0286.webp",
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0336.webp",
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0348.webp",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-[8] h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dots */}
      {/* <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}