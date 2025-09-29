import React from "react";
import HeroImg from "/banner1.jpg"; // Replace with your local image path

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-screen flex items-center animate-fadeIn"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug animate-slideUp">
          International Journal of Studies <br /> & Medical Case Reports
        </h1>

        {/* ISSN + Impact */}

        {/* Description */}
        <p className="mt-6 max-w-2xl text-gray-200 text-base md:text-lg animate-fadeIn delay-400">
          We aim to share the research findings and discoveries with the hope of
          improving knowledgebase and advancement of clinical studies and
          medical sciences
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 animate-fadeIn delay-600">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow-lg transform transition duration-300 hover:scale-105 animate-bounce">
            Submit Now
          </button>
          <button className="px-6 py-3 border-2 border-purple-500 text-white font-semibold rounded hover:bg-purple-600/20 transform transition duration-300 hover:scale-105 animate-bounce">
            Journal Scope
          </button>
        </div>
      </div>
    </section>
  );
}
