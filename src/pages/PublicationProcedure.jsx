// PublicationProcedure.jsx
import {
  FaUpload,
  FaFileAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "SUBMIT PAPER ONLINE",
    description:
      "Step 1: Submission of Manuscript/Paper through Submit Paper online to anyone of our journals. Follow the Journal's specific instruction",
    linkText: "Submit Paper Online",
    icon: <FaUpload size={24} />,
    bg: "bg-yellow-400",
  },
  {
    id: 2,
    title: "PEER REVIEW PROCESS",
    description:
      "Step 2: Peer Review of Your Paper within 2 Days You will get your Acceptance OR Rejection Notification through Email and SMS.",
    linkText: "Check Paper Status",
    icon: <FaFileAlt size={24} />,
    bg: "bg-green-400",
  },
  {
    id: 3,
    title: "PAY FEES ONLINE",
    description:
      "Step 3: Pay Publication charges. Download and Filling Copyright Form and Undertaking Form available in Author Home.",
    linkText: "Pay Fees Online",
    icon: <FaCreditCard size={24} />,
    bg: "bg-blue-400",
  },
  {
    id: 4,
    title: "PAPER PUBLISHED",
    description:
      "Step 4: After Submission of necessary Documents paper will be publish within 1 to 2 Days. For Download Certificate, Confirmation letter",
    linkText: "Check on Journal Page",
    icon: <FaCheckCircle size={24} />,
    bg: "bg-purple-400",
  },
];

export default function PublicationProcedure() {
  return (
    <div className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
          PUBLICATION PROCEDURE
        </h2>
        <p className="text-gray-600 dark:text-gray-300 italic">
          FOLLOW THIS STEP AND PUBLISH YOUR RESEARCH PAPER WITHIN 1 TO 2 DAYS
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            {/* Icon Circle */}
            <div
              className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 ${step.bg} rounded-full flex items-center justify-center text-white shadow-lg`}
            >
              {step.icon}
            </div>

            {/* Content */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {step.description}
              </p>
              {/* <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                {step.linkText}
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
