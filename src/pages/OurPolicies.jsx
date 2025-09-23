export default function PoliciesSection() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Our Policies
      </h1>

      {/* Terms and Conditions */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Terms and Conditions Policy</h2>
        <p>
          By making Initial or Final Submission to journals of Open Access
          Research Journals Publication, authors agree to all Terms and
          Policies.
        </p>
        <p>
          Emails received or sent will remain private; no content will be shared
          publicly.
        </p>
        <p>
          Authors confirm that their paper is original and all co-authors have
          given consent.
        </p>
        <p>
          All journals are registered with National Science Library with ISSN
          (Online).
        </p>
        <p>
          Authors are responsible for the impact/outcomes of publication
          decisions and must adhere to ethical standards.
        </p>
        <p>
          Copyright infringement may lead to removal of articles without prior
          notice.
        </p>
      </div>

      {/* Privacy Policy */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400">
          Privacy Policy
        </h2>
        <p>Our protects any information you provide when using this website.</p>
        <p>
          Collected information may include name, job title, contact info,
          demographics, and survey data.
        </p>
        <p>
          This information helps improve products, services, and market
          research.
        </p>
        <p>
          Policy may be updated from time to time; check the page for updates.
          Effective from 27-05-2020.
        </p>
      </div>

      {/* Disclaimer Policy */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Disclaimer Policy</h2>
        <p>Authors are solely responsible for the content of their articles.</p>
        <p>
          Our is not liable for accuracy, completeness, or consequences from
          using the website.
        </p>
        <p>
          External links are not endorsed. Website may be temporarily
          unavailable due to technical issues.
        </p>
        <p>Information provided is for educational purposes only.</p>
      </div>

      {/* Cancellation & Refund Policy */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400">
          Cancellation & Refund Policy
        </h2>
        <p>Authors can withdraw papers before final submission/payment.</p>
        <p>
          No refund is issued after payment and completion of publication
          process.
        </p>
        <p>Authors are responsible for submission decisions.</p>
      </div>

      {/* Shipping Policy */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Shipping Policy</h2>
        <p>
          Our is a digital open-access publisher; there is no shipping of
          physical goods.
        </p>
        <p>All articles are available online immediately after publication.</p>
      </div>
    </div>
  );
}
