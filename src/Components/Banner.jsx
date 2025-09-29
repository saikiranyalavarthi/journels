import React from "react";
import HeroImg from "/banner1.jpg"; // Replace with your local image path

export default function Banner() {
  return (
    <section
      className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-orange-500 text-white h-[80vh] flex items-center animate-fadeIn"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 lg:px-24">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug animate-slideUp">
          International Journal of Studies <br /> & Medical Case Reports
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-gray-100 text-sm sm:text-base md:text-lg animate-fadeIn delay-400">
          Sharing research findings and discoveries to advance knowledge and
          improve clinical studies in medical sciences.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn delay-600">
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            Submit Now
          </button>
          <button className="px-6 py-3 border-2 border-teal-300 text-white font-semibold rounded-lg hover:bg-teal-400/20 transform transition duration-300 hover:scale-105">
            Journal Scope
          </button>
        </div>
      </div>
    </section>
  );
}
