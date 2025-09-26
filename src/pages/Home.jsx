import React from "react";
import LatestArticles from "./LatestArticles";
import ClientsSay from "./clientTestimonials";
import HeroSection from "./HeroSection";

const HomeSectionJournals = () => {
  const quickLinks = [
    "Article Preparation Guidelines",
    "Membership",
    "Editorial Management",
    "Tracking System",
    "Plagiarism Checker",
    "Indexing Services",
    "Reprints",
    "eBooks",
    "Video Articles",
  ];

  return (
    <div className="bg-white font-sans text-gray-800 mt-20">
      <div>
        <HeroSection />
      </div>
      {/* Main journal info section */}
      <div className="min-h-screen p-6 flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        {/* Left Panel */}
        <div className="flex flex-col items-center md:items-start md:w-64 space-y-6">
          {/* Editor Card */}
          <div className="bg-white border rounded-lg shadow-lg p-4 w-full max-w-xs text-center">
            <div className="bg-blue-50 p-2 rounded-t-lg text-blue-800 font-semibold">
              Editor in Chief
            </div>
            {/* <img
              src="https://i.imgur.com/Sm8bJPz.jpg"
              alt="Aaron Lisberg Ph.D"
              className="mx-auto rounded-md w-28 h-28 object-cover mt-4"
            /> */}
            <p className="mt-3 font-semibold">Aaron Lisberg Ph.D</p>
            <hr className="my-4 border-gray-300" />
            <div className="text-left text-sm leading-relaxed font-semibold">
              <p>Designation:</p>
              <p className="font-normal">Professor</p>
              <p className="mt-2">Location:</p>
              <p className="font-normal">
                Ronald Reagan UCLA Medical Center <br />
                UCLA Medical Center, Santa Monica, <br />
                California, USA.
              </p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            {/* Add logos here if needed */}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-blue-700 font-semibold text-2xl mb-2">
            Clinical Case Reports and Clinical Study: Open Access
          </h2>
          <h3 className="text-orange-600 font-bold text-lg mb-4">
            ABOUT THE JOURNAL
          </h3>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Aditum brings about an open access peer-reviewed online monthly
              journal, journal of clinical case reports and clinical study
              (JCCRCS) designed to publish case reports and case studies in all
              areas of medical departments. All clinicians, academicians,
              healthcare professionals, researchers are invited to this platform
              to publish their case reports online and also, they can come
              across latest case reports and case study articles published in
              our journals library.
            </p>
            <p>
              JCCRCS desires to endow with superlative quality case reports and
              case series to increase awareness in individuals with reference to
              various potential cases in any category of disease spectrum for
              healthier living and early screening covering particular clinical
              and diagnosis issues.
            </p>
            <p>
              JCCRCS covers all medical departments; we welcome authors from all
              over the world to submit their valuable articles to our journal.
            </p>
            <p>
              After publication, articles are freely available online without
              any restrictions or subscriptions to researchers globally.
            </p>
            <p>
              JCCRCS welcomes all types of articles including research, case
              report, short communication, review, hypothesis, method and
              protocol, editorials, perspectives, letters to the editor, etc.
              This journal follows the guidelines of the Committee on
              Publication Ethics (COPE).
            </p>
            <p>
              You can use this list to carry out a final check of your
              submission before sending it for review, or coordinate with the
              editorial coordinator for any queries.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-56 flex flex-col gap-6">
          <h3 className="font-bold text-orange-600 text-lg">Quick Links</h3>

          <nav className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <button
                key={link}
                className="bg-teal-900 text-white rounded px-4 py-2 text-left hover:bg-teal-700 transition"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* PubMed Box */}
          <div className="border bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-center mb-2 text-teal-900">
              PubMed Indexed Articles
            </h4>
            <p className="text-center text-sm text-gray-600">PMID artciles</p>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="border-t border-gray-200 mt-12 pt-8">
        <LatestArticles />
        <ClientsSay />
      </div>
    </div>
  );
};

export default HomeSectionJournals;
