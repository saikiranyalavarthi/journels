import React from "react";

const clientTestimonials = [
  {
    name: "Peter W Szlosarek",
    position: "",
    message:
      "The entire process from initial invitation to prepare a review article and subsequent peer review and final acceptance was efficient and very rewarding for my entire team. I highly recommend Lung Cancer: Targets and Therapy for submission of your lung cancer-focused research.",
  },
  {
    name: "Bayasgalan Tumenbayar",
    position: "",
    message:
      "As a first-time Aditum Publishers, I am satisfied with all processes from submitting to publishing. The editorial and peer review teams provided helpful advice to process my manuscript.",
  },
  {
    name: "Muslat A Bin Rubaia'an",
    position: "",
    message:
      "This has been a very pleasant publishing experience. I particularly like the review process and the opportunity provided by the revision team to strengthen our article.",
  },
  {
    name: "Yolonda Freeman-Hildreth",
    position: "",
    message:
      "Patient Preference and Adherence has a well-structured, efficient submission process. The swift process from acceptance to publication ensures timely dissemination of research findings.",
  },
  {
    name: "Matthew P Genelin",
    position: "",
    message:
      "The submission process, review, revision, and publication processes are seamless and driven by a highly responsive support team. I would recommend this journal highly.",
  },
  {
    name: "Wyatt M Corbin",
    position: "",
    message:
      "I enjoyed working with Aditum Publishing, as each person with whom I communicated throughout every step of the process was kind, professional, efficient, and responsive to my questions and concerns.",
  },
];

const ClientsSay = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTestimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <p className="text-gray-700 mb-4 text-sm">{client.message}</p>
              <p className="font-semibold text-blue-700">{client.name}</p>
              {client.position && (
                <p className="text-gray-500 text-sm">{client.position}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
