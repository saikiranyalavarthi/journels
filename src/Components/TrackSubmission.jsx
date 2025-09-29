"use client";

import { useState } from "react";

const mockSubmissions = [
  { id: 1, name: "John Doe", status: "Pending" },
  { id: 2, name: "Jane Smith", status: "Approved" },
  { id: 3, name: "Alex Johnson", status: "Rejected" },
];

export default function TrackSubmission() {
  const [submissions, setSubmissions] = useState(mockSubmissions);
  const [search, setSearch] = useState("");

  const filteredSubmissions = submissions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Track Your Submission</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission) => (
            <tr key={submission.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{submission.id}</td>
              <td className="border px-4 py-2">{submission.name}</td>
              <td
                className={`border px-4 py-2 font-semibold ${
                  submission.status === "Approved"
                    ? "text-green-600"
                    : submission.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {submission.status}
              </td>
            </tr>
          ))}
          {filteredSubmissions.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                No submissions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
