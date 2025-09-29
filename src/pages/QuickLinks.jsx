import React from "react";

const QuickLinks = () => {
  const links = [
    {
      title: "Submit Paper Online",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Call for Paper",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m0 6h.01"
          />
          <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: "Publication Guidelines",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m0 6h.01"
          />
          <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-blue-900 mb-10">
        QUICK LINKS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex items-center gap-4 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center text-yellow-500 rounded-full border border-yellow-500 w-12 h-12">
              {link.icon}
            </div>
            <span className="font-semibold text-gray-700 text-sm lg:text-base">
              {link.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
