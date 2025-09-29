import React from "react";

const CallForPaperSection = () => {
  return (
    <section className="bg-teal-600 text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fadeIn">
      {/* Text Section */}
      <div className="max-w-3xl text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Call For Paper</h2>
        <p className="text-sm lg:text-base leading-relaxed">
          Scholarly open access journals, Peer-reviewed, and Refereed Journals,
          Impact factor 8.57 (Calculated by Google Scholar and Semantic Scholar
          | AI-Powered Research Tool), Multidisciplinary, Monthly, Online, Print
          Journal, Indexed in all major databases & Metadata, Citation
          Generator, Digital Object Identifier (DOI)
        </p>
      </div>

      {/* Button Section */}
      <div className="flex-shrink-0">
        <button
          type="button"
          className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors duration-300 cursor-pointer font-semibold shadow-lg"
        >
          SUBMIT PAPER ONLINE
        </button>
      </div>
    </section>
  );
};

export default CallForPaperSection;
