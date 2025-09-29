import React, { useState } from "react";

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

export default TrackSubmission;
