export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Contact Us
      </h1>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl shadow-lg p-6 mb-10">
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
            https://oarjpublication.com/
          </a>
        </p>
        <p>✉️ E-mail: info@oarjpublication.com</p>

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
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
