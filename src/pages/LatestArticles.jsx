import React, { useState } from "react";
import { FaFilePdf, FaBookOpen } from "react-icons/fa";

// Mock data
const latestArticles = [
  {
    volume: "12",
    issue: "3",
    type: "Case Report",
    title:
      "A Case of Non Paraneoplastic Anti-TIF1 Gamma Positive Adult Onset Dermatomyositis",
  },
  {
    volume: "12",
    issue: "3",
    type: "Case Report",
    title:
      "A successful Management Of Necrotizing Fasciitis Following Cesarean Section: A Case Report",
  },
  {
    volume: "12",
    issue: "3",
    type: "Review Article",
    title: "Irisin--New Hope for the Treatment of Diabetic Cardiomyopathy",
  },
  {
    volume: "12",
    issue: "3",
    type: "Research Article",
    title:
      "Prevalence and Frequency of Color Vision Defects among Injibara University Students in Injibara, Ethiopia",
  },
  {
    volume: "12",
    issue: "3",
    type: "Research Article",
    title:
      "Prevalence Of Occupational Injury And Associated Factors Among Building Construction Workers In Shambu Town, Western Ethiopia",
  },
  {
    volume: "12",
    issue: "2",
    type: "Research Article",
    title: "Acarbose in The Treatment Of Coronary Heart Disease",
  },
  {
    volume: "12",
    issue: "2",
    type: "Research Article",
    title:
      "Effectiveness of Cheek Acupuncture in Alleviating Long-term Symptoms of Long COVID: A Prospective Observational Study",
  },
  {
    volume: "12",
    issue: "2",
    type: "Case Report",
    title:
      "Imaging Evidence for Improving Erectile Function under Testosterone Therapy (TTh)",
  },
  {
    volume: "12",
    issue: "2",
    type: "Review Article",
    title:
      "A Review on Cluster Based Large Scale Demonstrations towards Promoting Agricultural Technologies among Small-holder Farmers in Ethiopia",
  },
  {
    volume: "12",
    issue: "2",
    type: "Research Article",
    title:
      "Prevalence, Use and Factors Affecting Psychoactive Substance Use Among Under-Graduate Students in A Nigerian University",
  },
  {
    volume: "12",
    issue: "3",
    type: "Case Report",
    title:
      "Conjunctival Chemosis as an Initial Manifestation of Egg Allergy in a 4-Year-Old Child",
  },
];

const LatestArticles = () => {
  const [activeType, setActiveType] = useState("All");

  // Filter by type
  const filteredArticles =
    activeType === "All"
      ? latestArticles
      : latestArticles.filter((a) => a.type === activeType);

  const categories = [
    "All",
    "Case Report",
    "Review Article",
    "Research Article",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Latest Articles</h2>

      {/* Tabs for filtering */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveType(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeType === cat
                ? "bg-teal-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Volume {article.volume} Issue {article.issue}
              </p>
              <p className="text-sm font-semibold text-orange-600 mb-2">
                {article.type}
              </p>
              <h3 className="text-md font-bold text-gray-800 mb-4">
                {article.title}
              </h3>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 hover:from-teal-800 hover:via-teal-600 hover:to-teal-400 text-white px-3 py-1 rounded text-sm transition">
                <FaFilePdf /> DOWNLOAD
              </button>
              <button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition">
                <FaBookOpen /> READ FULL ARTICLE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 bg-gradient-to-r from-teal-900 to-teal-600 text-white rounded-lg shadow p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Subscribe for Updates</h3>
        <p className="mb-4 text-sm text-teal-100">
          Get the latest case reports, research articles, and reviews delivered
          straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-80"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default LatestArticles;
