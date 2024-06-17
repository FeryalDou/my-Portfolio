import React from "react";

const education = [
  {
    degree: "Cypress",
    institution: "Openclassrooms",
    year: "In progress",
  },
  {
    degree: "Bootcamp in Web Development(RNCP 6)",
    institution: "IronHack",
    year: "02/2024 - 04/2024",
  },
  {
    degree: "General English - B2",
    institution: "Kaplan International Language School",
    year: "10/2023 - 12/2023",
  },
  {
    degree: "Baccalauréat Métier de la Sécurité",
    institution: "DAVA, Paris",
    year: "02/2018",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-100 py-12" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-Montserrat text-center mb-8">
          # Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-full shadow-md hover:bg-yellow-50 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-Montserrat text-center font-bold mb-2">
                {edu.institution}
              </h3>
              <p className="text-green-800 mb-2 text-center">{edu.degree}</p>
              <p className="text-green-900 text-center">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
