export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-teal-900 dark:text-teal-300 mb-4">
          Welcome to Open Access Research Journals Publication
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Open Access Research Journals Publication is an Internationally
          peer-reviewed publication dedicated to publishing original articles
          with an emphasis on the latest research findings. Our platform aims to
          bring eminent research information across the globe into light and
          build an efficient space for researchers worldwide.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Objectives</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To explore the latest research developments.</li>
          <li>To strengthen the research knowledge among the readers.</li>
          <li>To contribute to the progress in scientific research.</li>
          <li>
            To provide a high-quality online platform for publishing original
            research works.
          </li>
        </ul>
      </div>

      {/* Why Publish Section */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400 mb-4">
          Why publish with Open Access Research Journals Publication?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>International and Peer-reviewed Multidisciplinary Journals.</li>
          <li>Prompt acknowledgement after receiving the article.</li>
          <li>Online tracking of submitted articles.</li>
          <li>Rapid publication after peer review by eminent reviewers.</li>
          <li>
            Acceptance and publication of papers with excellence, novelty, and
            originality.
          </li>
          <li>Rapid, easy, and high-quality publication.</li>
          <li>Affordable publication fee.</li>
          <li>Issue of publication certificate to authors.</li>
          <li>
            Open access to all articles anytime and anywhere in the world.
          </li>
          <li>Improved visibility to get more citations.</li>
          <li>Best global knowledge sharing platform.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Read more about Welcome to Open Access Research Journals Publication
        </p>
      </div>
    </div>
  );
}
