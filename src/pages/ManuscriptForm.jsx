// src/components/ManuscriptForm.jsx
import React, { useState } from "react";

/**
 * Manuscript submission form component
 *
 * - Sends form as multipart/form-data to /api/submit-manuscript (change to your endpoint)
 * - Client-side validation for required fields, email, file types and size
 * - Uses Tailwind CSS classes for styling
 */

const JOURNAL_OPTIONS = [
  "Select Journal",
  "Aditum Journal of Science",
  "Aditum Journal of Medicine",
  "Aditum Journal of Engineering",
  "Aditum Journal of Humanities",
];

const ARTICLE_TYPES = [
  "Select Article Type",
  "Original Research",
  "Review Article",
  "Case Report",
  "Short Communication",
  "Editorial",
];

export default function ManuscriptForm() {
  const [form, setForm] = useState({
    titlePrefix: "Select Title",
    correspondingAuthor: "",
    authorName: "",
    email: "",
    phone: "",
    fax: "",
    articleType: "Select Article Type",
    postalAddress: "",
    journalName: "Select Journal",
    manuscriptTitle: "",
    coverLetter: "",
  });

  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB
  const ALLOWED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  function validate() {
    const e = {};
    if (!form.correspondingAuthor.trim()) e.correspondingAuthor = "Required";
    if (!form.authorName.trim()) e.authorName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.articleType || form.articleType === "Select Article Type")
      e.articleType = "Select an article type";
    if (!form.postalAddress.trim()) e.postalAddress = "Required";
    if (!form.journalName || form.journalName === "Select Journal")
      e.journalName = "Select a journal";
    if (!form.manuscriptTitle.trim()) e.manuscriptTitle = "Required";
    if (!form.coverLetter.trim()) e.coverLetter = "Required";
    if (!file) e.file = "Please attach your manuscript file";
    else {
      if (!ALLOWED_TYPES.includes(file.type))
        e.file = "Allowed file types: PDF, DOC, DOCX";
      if (file.size > MAX_FILE_SIZE) e.file = "File too large (max 20 MB)";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleFileChange(e) {
    const f = e.target.files[0];
    setFile(f || null);
    setErrors((prev) => ({ ...prev, file: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      // append textual fields
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append("manuscriptFile", file);

      // Replace this URL with your server endpoint for handling submissions
      const response = await fetch("/api/submit-manuscript", {
        method: "POST",
        body: fd,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Submission failed");
      }

      setSuccessMessage(
        "Manuscript submitted successfully. We'll contact you shortly."
      );
      setForm({
        titlePrefix: "Select Title",
        correspondingAuthor: "",
        authorName: "",
        email: "",
        phone: "",
        fax: "",
        articleType: "Select Article Type",
        postalAddress: "",
        journalName: "Select Journal",
        manuscriptTitle: "",
        coverLetter: "",
      });
      setFile(null);
      setErrors({});
    } catch (err) {
      setErrors({ submit: err.message || "Submission error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-20 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Submit Manuscript</h2>
      <p className="text-sm text-gray-600 mb-6">
        Make your article publish with Aditum. Alternatively, manuscripts can
        also be submitted via email to{" "}
        <a className="text-blue-600 underline" href="mailto:info@aditum.org">
          info@aditum.org
        </a>{" "}
        (note: mail clients do not attach files automatically — use the form or
        send them manually).
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title select */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <select
            name="titlePrefix"
            value={form.titlePrefix}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
          >
            <option>Select Title</option>
            <option>Dr.</option>
            <option>Prof.</option>
            <option>Mr.</option>
            <option>Ms.</option>
          </select>
        </div>

        {/* Corresponding Author & Author Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Corresponding Author *
            </label>
            <input
              name="correspondingAuthor"
              value={form.correspondingAuthor}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Author Name"
            />
            {errors.correspondingAuthor && (
              <p className="text-xs text-red-600 mt-1">
                {errors.correspondingAuthor}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Author Name *
            </label>
            <input
              name="authorName"
              value={form.authorName}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Author's full name"
            />
            {errors.authorName && (
              <p className="text-xs text-red-600 mt-1">{errors.authorName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full rounded-md border px-3 py-2"
              placeholder="example@domain.com"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="+91-xxxxxxxxxx"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Fax & Article Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Fax Number</label>
            <input
              name="fax"
              value={form.fax}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Fax Number (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Article Type *
            </label>
            <select
              name="articleType"
              value={form.articleType}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            >
              {ARTICLE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.articleType && (
              <p className="text-xs text-red-600 mt-1">{errors.articleType}</p>
            )}
          </div>
        </div>

        {/* Postal Address */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Postal Address *
          </label>
          <textarea
            name="postalAddress"
            value={form.postalAddress}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your postal address"
          />
          {errors.postalAddress && (
            <p className="text-xs text-red-600 mt-1">{errors.postalAddress}</p>
          )}
        </div>

        {/* Journal & Manuscript Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Journal Name *
            </label>
            <select
              name="journalName"
              value={form.journalName}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            >
              {JOURNAL_OPTIONS.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
            {errors.journalName && (
              <p className="text-xs text-red-600 mt-1">{errors.journalName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Manuscript Title *
            </label>
            <input
              name="manuscriptTitle"
              value={form.manuscriptTitle}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter manuscript title"
            />
            {errors.manuscriptTitle && (
              <p className="text-xs text-red-600 mt-1">
                {errors.manuscriptTitle}
              </p>
            )}
          </div>
        </div>

        {/* Cover letter */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Coverletter / Message to Editor *
          </label>
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Write a short cover letter or message to the editor"
          />
          {errors.coverLetter && (
            <p className="text-xs text-red-600 mt-1">{errors.coverLetter}</p>
          )}
        </div>

        {/* File upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Attach Your File * (PDF, DOC, DOCX — max 20MB)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="w-full"
          />
          {errors.file && (
            <p className="text-xs text-red-600 mt-1">{errors.file}</p>
          )}
        </div>

        {/* Submit area */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            {errors.submit && (
              <p className="text-sm text-red-600 mb-2">{errors.submit}</p>
            )}
            {successMessage && (
              <p className="text-sm text-green-600 mb-2">{successMessage}</p>
            )}
            <p className="text-xs text-gray-500">
              By submitting you agree to our terms. For offline submission,
              email to{" "}
              <a className="underline" href="mailto:info@aditum.org">
                info@aditum.org
              </a>
              .
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Manuscript"}
            </button>

            <button
              type="button"
              onClick={() => {
                // Reset form quickly
                setForm({
                  titlePrefix: "Select Title",
                  correspondingAuthor: "",
                  authorName: "",
                  email: "",
                  phone: "",
                  fax: "",
                  articleType: "Select Article Type",
                  postalAddress: "",
                  journalName: "Select Journal",
                  manuscriptTitle: "",
                  coverLetter: "",
                });
                setFile(null);
                setErrors({});
                setSuccessMessage("");
              }}
              className="inline-flex items-center justify-center rounded-lg border px-4 py-2"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
