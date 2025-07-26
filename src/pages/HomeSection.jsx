
import { useState, useEffect } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const displayedImages = [...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      if (current === images.length) {
        setTransitionEnabled(false); // Disable transition
        setCurrent(0);
      } else {
        setTransitionEnabled(true); // Enable transition
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div
        className="flex h-full"
        style={{
          width: `${displayedImages.length * 100}%`,
          transform: `translateX(-${
            (100 / displayedImages.length) * current
          }%)`,
          transition: transitionEnabled ? "transform 1s ease" : "none",
        }}
      >
        {displayedImages.map((img, index) => (
          <div
            key={index}
            className="w-screen h-[100svh] sm:h-screen flex-shrink-0 flex justify-center items-center overflow-hidden"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay background */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-8xl font-bold">Warnal Labs</h1>
        <p className="mt-4 text-sm sm:text-2xl max-w-xl">
          We Design, Develop and Build AI Devices
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Explore our work
        </a>
      </div>
    </section>
  );
}
