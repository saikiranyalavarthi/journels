import React from "react";

const SpecialIssues = () => {
  const specialIssuesData = [
    {
      year: 2025,
      theme: "Advances in Cardiology",
      description:
        "This special issue focuses on the latest research, case reports, and reviews in cardiology, highlighting innovations in diagnosis and treatment.",
    },
    {
      year: 2024,
      theme: "COVID-19 Clinical Studies",
      description:
        "A compilation of studies and case reports related to COVID-19, including clinical management, treatment outcomes, and epidemiological findings.",
    },
    {
      year: 2023,
      theme: "Neurology and Brain Disorders",
      description:
        "This issue emphasizes breakthroughs in neurology, including case reports and research on neurodegenerative diseases and innovative therapies.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
        Special Issues
      </h2>

      <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
        IJCMCR periodically publishes special issues focusing on specific
        themes, medical topics, or emerging areas of clinical research. These
        issues compile the most relevant and impactful case reports, research
        articles, and reviews on a focused topic.
      </p>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 text-justify">
        Special issues provide readers with a comprehensive overview of
        developments in a particular field and serve as a valuable resource for
        clinicians, researchers, and academicians seeking up-to-date knowledge
        in specialized areas.
      </p>

      <div className="space-y-4">
        {specialIssuesData.map((issue, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-50 shadow-sm hover:bg-teal-50 transition"
          >
            <h3 className="text-teal-700 font-semibold mb-2">
              {issue.year} - {issue.theme}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {issue.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mt-6 text-justify">
        Authors interested in contributing to special issues are encouraged to
        submit manuscripts that align with the theme. Special issues follow the
        same rigorous **double-blind peer review** process as regular issues,
        ensuring high-quality and impactful publications.
      </p>

      <p className="text-gray-700 text-sm leading-relaxed text-justify">
        By curating thematic collections, IJCMCR helps readers stay informed
        about cutting-edge developments in focused areas of clinical research
        and medical practice.
      </p>
    </div>
  );
};

export default SpecialIssues;
