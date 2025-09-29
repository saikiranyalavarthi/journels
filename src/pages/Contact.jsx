// Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    journalInfo: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      journalInfo: "",
      message: "",
      captcha: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-teal-900 dark:text-teal-300 mb-6 text-center">
        Contact Us
      </h1>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white rounded-xl shadow-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Open Access Research Journal Publication welcomes your comments,
          ideas, support, and other feedback.
        </h2>
        <p className="mb-3">
          If you need any queries to be answered, feel free to contact us at:
        </p>

        <p className="mb-2 font-semibold">Contact us:</p>
        <p>
          📌 <strong>Open Access Research Journal Publication</strong>
        </p>
        <p>
          🌐 Web Address:{" "}
          <a
            href="https://oarjpublication.com/"
            className="underline hover:text-yellow-300"
            target="_blank"
            rel="noreferrer"
          >
            https://journals.com/
          </a>
        </p>
        <p>✉️ E-mail: info@journalspublication.com</p>

        <p className="mt-3">
          Authors who are interested in getting their{" "}
          <strong>
            (i) manuscripts, (ii) books, (iii) thesis, and (iv) full length
            papers/manuscripts of conference
          </strong>{" "}
          published kindly contact our support team.
        </p>
        <p className="mt-2">
          For any query or confusion feel free to e-mail us:{" "}
          <span className="font-semibold">info@oarjpublication.com</span>
        </p>
        <p className="mt-2 text-sm italic">
          Please note that you refer your manuscript number (if you have) while
          you make the contact.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-teal-900 dark:text-teal-300 mb-4">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Journal Info */}
          <input
            type="text"
            name="journalInfo"
            value={formData.journalInfo}
            onChange={handleChange}
            placeholder="Journal Information"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message *"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>

          {/* Captcha */}

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  subject: "",
                  journalInfo: "",
                  message: "",
                })
              }
            ></button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-teal-700 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
