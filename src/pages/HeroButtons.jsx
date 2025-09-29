// import React from "react";

// const HeroButtons = () => {
//   const buttons = [
//     "Quick Submission",
//     "Track Submission",
//     "Latest Articles",
//     "Subscribe",
//   ];

//   return (
//     <div className="flex flex-wrap gap-4 justify-center mt-10">
//       {buttons.map((btn) => (
//         <button
//           key={btn}
//           className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-teal-800 transition transform"
//         >
//           {btn}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default HeroButtons;

import React, { useState } from "react";

// Latest Articles Component (placeholder)
const LatestArticles = () => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
    <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
    <p className="text-gray-700">
      Here are the latest articles from our journal.
    </p>
  </div>
);

// Quick Submission Component
const QuickSubmission = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quick submission request received for ${email}`);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6 my-10 text-center">
      <h2 className="text-xl font-bold text-teal-900 mb-4">Quick Submission</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500"
        />
        <button className="bg-teal-700 text-white py-2 rounded hover:bg-teal-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

// Track Submission Component
const TrackSubmission = () => {
  const [trackingId, setTrackingId] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingId && captcha === "1234") {
      setStatus(
        "Your submission is under review. Expected decision in 2 weeks."
      );
    } else {
      setStatus("Invalid Tracking ID or Captcha. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6 my-10">
      <h2 className="text-xl font-bold text-teal-900 mb-4 text-center">
        Track Your Submission
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="text"
          placeholder="Enter Captcha: 1234"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600 transition"
        >
          Track
        </button>
      </form>

      {status && (
        <div className="mt-4 p-3 bg-gray-50 border rounded text-sm text-center text-gray-700">
          {status}
        </div>
      )}
    </div>
  );
};

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

// Hero Buttons Component
const HeroButtons = ({ onClick }) => {
  const buttons = [
    "Quick Submission",
    "Track Submission",
    "Latest Articles",
    "Subscribe",
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onClick(btn)}
          className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-teal-800 transition transform"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

// Main Home Section
const HomeSectionJournals = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case "Quick Submission":
        return <QuickSubmission />;
      case "Track Submission":
        return <TrackSubmission />;
      case "Latest Articles":
        return <LatestArticles />;
      case "Subscribe":
        return <Subscribe />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800 mt-20">
      <div>
        <HeroButtons onClick={setActiveSection} />
      </div>

      <div>{renderSection()}</div>
    </div>
  );
};

export default HeroButtons;
