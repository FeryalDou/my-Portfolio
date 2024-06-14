// src/components/Education.js

import React from "react";

const education = [
  {
    institution: "IronHack",
    degree: "Formation Web Développement Full Stack",
    year: "02/2024 - 04/2024",
  },
  {
    institution: "Kaplan International Language School",
    degree: "Formation Anglais",
    year: "10/2023 - 12/2023",
  },
  {
    institution: "DAVA, Paris",
    degree: "Bac Métier de la Sécurité",
    year: "2018",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-100 py-12" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Éducation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-gray-700 mb-2">{edu.degree}</p>
              <p className="text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
