import React from "react";
import {
  User,
  BookOpen,
  Hash,
  Users,
  RefreshCw,
  FileText,
  Calendar,
} from "lucide-react";

const JournalProfile = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
          Journal Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Editor-in-Chief Profile */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <img
              src="/editor.jpg" // replace with editor image
              alt="Editor-in-Chief"
              className="w-40 h-40 rounded-full object-cover border-4 border-teal-600 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Dr. John Doe
            </h3>
            <p className="text-sm text-gray-500">Editor-in-Chief</p>
            <p className="mt-3 text-center text-gray-600 text-sm leading-relaxed">
              Dr. John Doe is a leading researcher with 20+ years of experience
              in clinical and medical case reports, guiding global editorial
              policies.
            </p>
          </div>

          {/* Journal Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-center gap-3">
                <BookOpen className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Journal Name:</strong> International Journal of
                  Clinical & Medical Case Reports
                </span>
              </li>
              <li className="flex items-center gap-3">
                <User className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Editor-in-Chief:</strong> Dr. John Doe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Hash className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Journal Code:</strong> IJCMCR-2025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>No. of Editors:</strong> 25
                </span>
              </li>
              <li className="flex items-center gap-3">
                <RefreshCw className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Peer Review Process:</strong> Double-blind review
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Type of Publication:</strong> Open Access
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="text-teal-600 w-5 h-5" />
                <span>
                  <strong>Issues Published/Year:</strong> 12
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalProfile;
