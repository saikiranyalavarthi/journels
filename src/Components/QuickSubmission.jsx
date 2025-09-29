import React, { useState } from "react";

const QuickSubmission = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quick submission request received for ${email}`);
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

export default QuickSubmission;
