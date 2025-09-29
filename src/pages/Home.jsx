// import React, { useState } from "react";
// import Banner from "../Components/Banner";
// import HeroButtons from "./HeroButtons";
// import QuickSubmission from "../Components/QuickSubmission";
// import TrackSubmission from "./TrackSubmission";

// import ClientsSay from "./clientTestimonials";

// // Subscribe Component
// const Subscribe = () => {
//   const [email, setEmail] = useState("");
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     alert(`Subscribed successfully with ${email}`);
//     setEmail("");
//   };
//   return (
//     <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6 my-10 text-center">
//       <h2 className="text-xl font-bold text-teal-900 mb-4">Subscribe</h2>
//       <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500"
//         />
//         <button className="bg-teal-700 text-white py-2 rounded hover:bg-teal-600 transition">
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// // Articles Component
// const Articles = () => {
//   const [activeType, setActiveType] = useState("Case Reports");
//   const articlesData = [
//     { id: 1, title: "Case Study 1", type: "Case Reports" },
//     { id: 2, title: "Research on COVID-19", type: "Research Articles" },
//     { id: 3, title: "Case Study 2", type: "Case Reports" },
//     { id: 4, title: "Cardiology Research", type: "Research Articles" },
//     { id: 5, title: "Clinical Review 1", type: "Reviews" },
//   ];
//   const types = [...new Set(articlesData.map((a) => a.type))];
//   const filteredArticles = articlesData.filter((a) => a.type === activeType);

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
//       <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//         Articles
//       </h2>
//       <div className="flex justify-center gap-3 flex-wrap mb-6">
//         {types.map((type) => (
//           <button
//             key={type}
//             onClick={() => setActiveType(type)}
//             className={`px-4 py-2 rounded font-semibold transition ${
//               activeType === type
//                 ? "bg-teal-700 text-white"
//                 : "bg-gray-200 text-gray-800 hover:bg-teal-200"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>
//       <ul className="space-y-3">
//         {filteredArticles.map((article) => (
//           <li
//             key={article.id}
//             className="p-4 border rounded hover:bg-teal-50 transition cursor-pointer"
//           >
//             {article.title}
//           </li>
//         ))}
//         {filteredArticles.length === 0 && (
//           <li className="text-center text-gray-500">No articles found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const HomeSectionJournals = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const quickLinks = [
//     "Article Preparation Guidelines",
//     "Membership",
//     "Editorial Management",
//     "Tracking System",
//     "Plagiarism Checker",
//     "Indexing Services",
//     "Reprints",
//     "eBooks",
//     "Video Articles",
//   ];

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Quick Submission":
//         return <QuickSubmission />;
//       case "Track Submission":
//         return <TrackSubmission />;
//       case "Subscribe":
//         return <Subscribe />;
//       case "Articles":
//         return <Articles />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-white font-sans text-gray-800 mt-20">
//       {/* Banner */}
//       <Banner />

//       {/* Hero Buttons */}
//       <HeroButtons onClick={setActiveSection} />

//       {/* Dynamic Section */}
//       <div>{renderSection()}</div>

//       {/* Main Layout */}
//       <div className="min-h-screen p-6 flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
//         {/* Left Panel */}
//         <div className="flex flex-col items-center md:items-start md:w-64 space-y-6">
//           <div className="bg-white border rounded-lg shadow-lg p-4 w-full max-w-xs text-center">
//             <div className="bg-blue-50 p-2 rounded-t-lg text-blue-800 font-semibold">
//               Editor in Chief
//             </div>
//             <p className="mt-3 font-semibold">Aaron Lisberg Ph.D</p>
//             <hr className="my-4 border-gray-300" />
//             <div className="text-left text-sm leading-relaxed font-semibold">
//               <p>Designation:</p>
//               <p className="font-normal">Professor</p>
//               <p className="mt-2">Location:</p>
//               <p className="font-normal">
//                 Ronald Reagan UCLA Medical Center <br />
//                 UCLA Medical Center, Santa Monica, <br />
//                 California, USA.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Center Content */}
//         <div className="flex-1 max-w-3xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6 border-b-2 border-teal-500 inline-block">
//             Journal Profile
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 mb-10 text-sm">
//             <div className="space-y-3">
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Journal Name:
//                 </span>{" "}
//                 International Journal of Clinical & Medical Case Reports
//               </p>
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Editor-in-Chief:
//                 </span>{" "}
//                 Dr. Aaron Lisberg
//               </p>
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Journal Code:
//                 </span>{" "}
//                 IJCMCR-2025
//               </p>
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   No. of Editors:
//                 </span>{" "}
//                 25+
//               </p>
//             </div>
//             <div className="space-y-3">
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Peer Review Process:
//                 </span>{" "}
//                 Double Blind Peer Review
//               </p>
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Type of Publication:
//                 </span>{" "}
//                 Open Access (Monthly Case Reports)
//               </p>
//               <p>
//                 <span className="font-semibold text-teal-700">
//                   Issues per Year:
//                 </span>{" "}
//                 12
//               </p>
//             </div>
//           </div>

//           <h3 className="text-orange-600 font-bold text-lg mb-4 text-center">
//             ABOUT THE JOURNAL
//           </h3>
//           <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-justify">
//             <p>
//               Aditum brings about an open access peer-reviewed online monthly
//               journal, journal of clinical case reports and clinical study
//               (JCCRCS) designed to publish case reports and case studies in all
//               areas of medical departments. All clinicians, academicians,
//               healthcare professionals, researchers are invited to this platform
//               to publish their case reports online and also, they can come
//               across latest case reports and case study articles published in
//               our journals library.
//             </p>
//             <p>
//               JCCRCS desires to endow with superlative quality case reports and
//               case series to increase awareness in individuals with reference to
//               various potential cases in any category of disease spectrum for
//               healthier living and early screening covering particular clinical
//               and diagnosis issues.
//             </p>
//             <p>
//               JCCRCS covers all medical departments; we welcome authors from all
//               over the world to submit their valuable articles to our journal.
//             </p>
//             <p>
//               After publication, articles are freely available online without
//               any restrictions or subscriptions to researchers globally.
//             </p>
//             <p>
//               JCCRCS welcomes all types of articles including research, case
//               report, short communication, review, hypothesis, method and
//               protocol, editorials, perspectives, letters to the editor, etc.
//               This journal follows the guidelines of the Committee on
//               Publication Ethics (COPE).
//             </p>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="md:w-64 flex flex-col gap-6">
//           <div className="border rounded-lg shadow bg-white">
//             <h3 className="font-bold text-orange-600 text-lg p-3 border-b">
//               Quick Links
//             </h3>
//             <ul className="divide-y text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-900 transition"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="border rounded-lg shadow bg-gradient-to-r from-teal-900 to-teal-600 text-white p-4">
//             <h4 className="font-semibold text-center mb-3">Options</h4>
//             <div className="grid grid-cols-2 gap-3 text-sm">
//               {["Reprints", "eBooks", "Video Articles", "PPTs"].map((item) => (
//                 <button
//                   key={item}
//                   className="bg-white text-teal-900 rounded-md px-3 py-2 font-medium hover:bg-teal-100 transition"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="border bg-gray-50 p-4 rounded-lg shadow">
//             <h4 className="font-semibold text-center mb-2 text-teal-900">
//               PubMed Indexed Articles
//             </h4>
//             <p className="text-center text-sm text-gray-600">PMID articles</p>
//           </div>
//         </div>
//       </div>
// <LatestArticles/>
//       {/* Testimonials */}
//       <div className="border-t border-gray-200 mt-12 pt-8">
//         <ClientsSay />
//       </div>
//     </div>
//   );
// };

// export default HomeSectionJournals;

import React, { useState } from "react";
import Banner from "../Components/Banner";
import HeroButtons from "./HeroButtons";
import QuickSubmission from "../Components/QuickSubmission";
import TrackSubmission from "./TrackSubmission";
import ClientsSay from "./clientTestimonials";
import LatestArticles from "./LatestArticles";

// Subscribe Component
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6 my-10 text-center">
      <h2 className="text-xl font-bold text-teal-900 mb-4">Subscribe</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500"
        />
        <button className="bg-teal-700 text-white py-2 rounded hover:bg-teal-600 transition">
          Subscribe
        </button>
      </form>
    </div>
  );
};

// Articles Component
const Articles = () => {
  const [activeType, setActiveType] = useState("Case Reports");
  const articlesData = [
    { id: 1, title: "Case Study 1", type: "Case Reports" },
    { id: 2, title: "Research on COVID-19", type: "Research Articles" },
    { id: 3, title: "Case Study 2", type: "Case Reports" },
    { id: 4, title: "Cardiology Research", type: "Research Articles" },
    { id: 5, title: "Clinical Review 1", type: "Reviews" },
  ];

  const types = [...new Set(articlesData.map((a) => a.type))];
  const filteredArticles = articlesData.filter((a) => a.type === activeType);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
        Articles
      </h2>
      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded font-semibold transition ${
              activeType === type
                ? "bg-teal-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-teal-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {filteredArticles.map((article) => (
          <li
            key={article.id}
            className="p-4 border rounded hover:bg-teal-50 transition cursor-pointer"
          >
            {article.title}
          </li>
        ))}
        {filteredArticles.length === 0 && (
          <li className="text-center text-gray-500">No articles found.</li>
        )}
      </ul>
    </div>
  );
};

const HomeSectionJournals = () => {
  const [activeSection, setActiveSection] = useState(null);

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

  const renderSection = () => {
    switch (activeSection) {
      case "Quick Submission":
        return <QuickSubmission />;
      case "Track Submission":
        return <TrackSubmission />;
      case "Subscribe":
        return <Subscribe />;
      case "Articles":
        return <Articles />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800 mt-20">
      {/* Banner */}
      <Banner />

      {/* Hero Buttons */}
      <HeroButtons onClick={setActiveSection} />

      {/* Dynamic Section */}
      <div>{renderSection()}</div>

      {/* Main Layout */}
      <div className="min-h-screen p-6 flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        {/* Left Panel */}
        <div className="flex flex-col items-center md:items-start md:w-64 space-y-6">
          <div className="bg-white border rounded-lg shadow-lg p-4 w-full max-w-xs text-center">
            <div className="bg-blue-50 p-2 rounded-t-lg text-blue-800 font-semibold">
              Editor in Chief
            </div>
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
        </div>

        {/* Center Content */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6 border-b-2 border-teal-500 inline-block">
            Journal Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10 text-sm">
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-teal-700">
                  Journal Name:
                </span>{" "}
                International Journal of Clinical & Medical Case Reports
              </p>
              <p>
                <span className="font-semibold text-teal-700">
                  Editor-in-Chief:
                </span>{" "}
                Dr. Aaron Lisberg
              </p>
              <p>
                <span className="font-semibold text-teal-700">
                  Journal Code:
                </span>{" "}
                IJCMCR-2025
              </p>
              <p>
                <span className="font-semibold text-teal-700">
                  No. of Editors:
                </span>{" "}
                25+
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-teal-700">
                  Peer Review Process:
                </span>{" "}
                Double Blind Peer Review
              </p>
              <p>
                <span className="font-semibold text-teal-700">
                  Type of Publication:
                </span>{" "}
                Open Access (Monthly Case Reports)
              </p>
              <p>
                <span className="font-semibold text-teal-700">
                  Issues per Year:
                </span>{" "}
                12
              </p>
            </div>
          </div>

          <h3 className="text-orange-600 font-bold text-lg mb-4 text-center">
            ABOUT THE JOURNAL
          </h3>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-justify">
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
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-64 flex flex-col gap-6">
          <div className="border rounded-lg shadow bg-white">
            <h3 className="font-bold text-orange-600 text-lg p-3 border-b">
              Quick Links
            </h3>
            <ul className="divide-y text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-900 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg shadow bg-gradient-to-r from-teal-900 to-teal-600 text-white p-4">
            <h4 className="font-semibold text-center mb-3">Options</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["Reprints", "eBooks", "Video Articles", "PPTs"].map((item) => (
                <button
                  key={item}
                  className="bg-white text-teal-900 rounded-md px-3 py-2 font-medium hover:bg-teal-100 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="border bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-center mb-2 text-teal-900">
              PubMed Indexed Articles
            </h4>
            <p className="text-center text-sm text-gray-600">PMID articles</p>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <LatestArticles />

      {/* Testimonials */}
      <div className="border-t border-gray-200 mt-12 pt-8">
        <ClientsSay />
      </div>
    </div>
  );
};

export default HomeSectionJournals;
