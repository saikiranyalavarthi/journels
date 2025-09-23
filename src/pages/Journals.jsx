export default function Journals() {
  const journals = [
    {
      title: "Open Access Research Journal of Science and Technology (OARJST)",
      desc: "OARJST is a Peer Reviewed, Open Access, International Journal published bimonthly with 6 issues per year. It publishes manuscripts on original work (research, reviews, short communications, letters) from Science, Pharmacy, Medicine, Nursing, Health Science, Agriculture, Arts, Commerce, Social Sciences, Management, Engineering, etc.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title: "Open Access Research Journal of Biology and Pharmacy (OARJBP)",
      desc: "OARJBP is an interdisciplinary bimonthly journal with 6 issues per year. It publishes high-quality manuscripts related to Biological, Pharmaceutical, and Health Sciences, serving clinicians, pharmacists, academicians, researchers, and scientists worldwide.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title:
        "Open Access Research Journal of Engineering and Technology (OARJET)",
      desc: "OARJET is a Peer Reviewed, Open Access, International Journal published quarterly with 4 issues per year. It publishes research and review articles across Engineering, Technology, and Applied Sciences.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title:
        "Open Access Research Journal of Multidisciplinary Studies (OARJMS)",
      desc: "OARJMS is a quarterly, double-blind peer-reviewed journal welcoming original research across Agricultural Science, Biochemistry, Computer Science, Literature, Management Studies, Nursing, Pharmacy, Physics, Social Science, Zoology, and more.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title: "Open Access Research Journal of Chemistry and Pharmacy (OARJCP)",
      desc: "OARJCP is an international quarterly journal devoted to Chemical and Pharmaceutical Sciences. It emphasizes quality and originality in academia and industry-focused research.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title:
        "Open Access Research Journal of Medical and Clinical Case Reports (OARJMCCR)",
      desc: "OARJMCCR publishes peer-reviewed medical and clinical research, case reports, short communications, and reviews. It aims to improve healthcare knowledge and share advancements in medical sciences.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
    {
      title: "Open Access Research Journal of Life Sciences (OARJLS)",
      desc: "OARJLS is a quarterly peer-reviewed journal devoted to all areas of Life Sciences. It focuses on promoting high-quality original research for both academia and industry.",
      links: [
        { name: "Home", url: "#" },
        { name: "Archive", url: "#" },
        { name: "Guideline for Author", url: "#" },
        { name: "Manuscript Submission", url: "#" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Our Journals
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
        Open Access Research Journals Publication is an International open
        access publisher of peer-reviewed journals, encouraging vital research
        worldwide. Below are our journals:
      </p>

      <div className="space-y-8">
        {journals.map((journal, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              {journal.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {journal.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              {journal.links.map((link, linkIdx) => (
                <a
                  key={linkIdx}
                  href={link.url}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium rounded-lg shadow hover:opacity-90"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
