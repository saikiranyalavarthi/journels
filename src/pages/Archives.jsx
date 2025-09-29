import React from "react";

const Archives = () => {
  const archiveData = [
    { year: 2025, issues: ["January", "February", "March", "April"] },
    { year: 2024, issues: ["January", "April", "July", "October"] },
    { year: 2023, issues: ["February", "May", "August", "November"] },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
        Archives
      </h2>

      <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
        The International Journal of Clinical & Medical Case Reports (IJCMCR)
        maintains a comprehensive archive of all previously published articles
        and issues. This allows readers, researchers, and clinicians to access
        past studies and case reports easily.
      </p>

      <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
        Our archives serve as a valuable resource for reviewing historical
        trends, clinical observations, and research outcomes across various
        medical specialties. Researchers can explore past case reports, review
        articles, and clinical studies for reference and citation purposes.
      </p>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 text-justify">
        The archives are organized by year and issue to provide structured
        navigation. Each issue contains detailed information on all articles
        published, including author names, article titles, and abstracts.
      </p>

      <div className="space-y-4">
        {archiveData.map((year) => (
          <div
            key={year.year}
            className="border rounded-lg p-4 bg-gray-50 shadow-sm"
          >
            <h3 className="text-teal-700 font-semibold mb-2">{year.year}</h3>
            <div className="flex flex-wrap gap-2">
              {year.issues.map((issue) => (
                <span
                  key={issue}
                  className="px-3 py-1 bg-teal-200 text-teal-900 rounded-full text-sm cursor-pointer hover:bg-teal-300"
                >
                  {issue}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mt-6 text-justify">
        Users can click on individual issues to view all articles published
        within that period. The archives are continually updated to include the
        latest issues, ensuring that all readers have access to the complete
        collection of scholarly articles.
      </p>

      <p className="text-gray-700 text-sm leading-relaxed text-justify">
        By providing easy access to historical publications, IJCMCR aims to
        support ongoing research, medical education, and evidence-based clinical
        practice worldwide.
      </p>
    </div>
  );
};

export default Archives;
