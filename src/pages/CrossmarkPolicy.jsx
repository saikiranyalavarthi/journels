export default function CrossMarkSection() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Our CrossMark Policy
      </h1>

      {/* CrossMark Description */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6 space-y-4">
        <p>
          CrossMark is a multi-publisher initiative to provide a standard way
          for readers to locate the authoritative version of an article or other
          published content. By applying the CrossMark logo, Open Access
          Research Journals Publication is committing to maintaining the content
          it publishes and to alerting readers to changes if and when they
          occur.
        </p>
        <p>
          Clicking the CrossMark logo on a document will tell you its current
          status and may also give you additional publication-record information
          about the document.
        </p>
        <p>
          For more information on CrossMark, please visit the{" "}
          <a
            href="https://www.crossref.org/crossmark/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-yellow-200"
          >
            CrossMark site
          </a>
          .
        </p>
        <p>
          The Open Access Research Journals Publication content that will have
          the CrossMark logo is restricted to current and future journal content
          and is limited to specific publication types.
        </p>
      </div>

      {/* Correction and Retraction Policies */}
      <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400">
          Correction and Retraction Policies
        </h2>
        <p>
          Open Access Research Journals Publication is committed to uphold the
          integrity of the literature and publishes Errata, Expressions of
          Concerns or Retraction Notices dependent on the situation and in
          accordance with the COPE Retraction Guidelines.
        </p>
        <p>
          In all cases, these notices are linked to the original article. More
          information can be found on the Journals policies page.
        </p>
        <p>
          CrossMark Policy Page DOI:
          <span className="font-semibold">
            {" "}
            10.53022/Our.ourcrossmarkpolicy
          </span>
        </p>
      </div>
    </div>
  );
}
