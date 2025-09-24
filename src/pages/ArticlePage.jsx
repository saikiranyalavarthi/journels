import React from "react";

export default function ArticlePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-10 px-6">
      <article className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            A Comparison of Whole-Brain Dose During Stereotactic Radiosurgery
            for Multiple Metastases Across Technology Platforms
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Published: September 16, 2025 · DOI:{" "}
            <a
              href="https://doi.org/10.7759/cureus.92442"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 underline"
            >
              10.7759/cureus.92442
            </a>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Neelan J. Marianayagam · Ziyi Wang · Alonso N. Gutierrez · D Jay
            Wieczorek · Ian Paddick · Yusuke S. Hori · David J. Park · Steven D.
            Chang · Stephanie Key · Georg A. Weidlich · John Adler
          </p>

          <div className="flex justify-center gap-2 mt-4">
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Open Access
            </span>
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Peer-Reviewed
            </span>
          </div>
        </header>

        {/* Abstract */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Abstract</h2>
          <p className="leading-relaxed text-gray-800 dark:text-gray-300">
            Stereotactic radiosurgery (SRS) is now the gold standard radiation
            technique for the treatment of multiple brain metastases. By virtue
            of its targeting accuracy, SRS, relative to whole-brain radiotherapy
            (WBRT), maximizes both the likelihood of tumor ablation while
            minimizing irradiation (injury) of the uninvolved brain. The extent
            to which the latter objective is accomplished varies among
            radiosurgery platforms...
          </p>
        </section>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="leading-relaxed text-gray-800 dark:text-gray-300 mb-3">
            By virtue of minimizing neurocognitive damage, “highly focal”
            stereotactic radiosurgery (SRS) is now deemed superior to
            whole-brain radiotherapy (WBRT) in the treatment of multiple brain
            metastases...
          </p>
          <p className="leading-relaxed text-gray-800 dark:text-gray-300">
            The most widely used metrics for establishing the relative quality
            of radiosurgical treatment are dose conformity (CI) and gradient
            (GI) indices. However, as a secondary and absolute measure, V12 Gy
            (the volume of brain receiving a dose of greater than 12 Gy) is also
            deemed an important predictor of radiation-induced brain injury...
          </p>
        </section>

        {/* Technical Report */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Technical Report</h2>
          <p className="leading-relaxed text-gray-800 dark:text-gray-300 mb-3">
            A single de-identified contrast computerized tomography (CT) and
            contrast MRI... Ten target volumes were identified as the gross
            tumor volumes (GTVs), ranging in maximum dimension from 2.1 mm to
            5.0 mm...
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Varian TrueBeam multi-purpose C-arm delivery platform (standard
              radiotherapy configuration)
            </li>
            <li>
              Varian TrueBeam Edge multi-purpose C-arm delivery platform
              (stereotactic radiosurgery configuration)
            </li>
            <li>
              Accuray CyberKnife M6 full-body robotic radiosurgery platform
            </li>
            <li>Elekta Gamma Knife Esprit Cobalt-60 radiosurgery platform</li>
            <li>Elekta Gamma Knife Icon Cobalt-60 radiosurgery platform</li>
            <li>ZAP Surgical ZAP-X gyroscopic radiosurgery platform</li>
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Results</h2>
          <p className="leading-relaxed text-gray-800 dark:text-gray-300">
            In Table 1, we show seven treatment planning and dosimetric
            parameters across the six SRS systems utilized in this study of a
            single standardized patient with 10 brain metastases...
          </p>
        </section>

        {/* Citation */}
      </article>
    </div>
  );
}
