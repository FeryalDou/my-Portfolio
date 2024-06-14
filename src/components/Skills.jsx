import React from "react";

const skills = {
  technical: [
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ],
  security: [
    "Security Control Room Operation (SSI)",
    "Integration of Electronic Logbook (Guardteck)",
    "Supervision of Surveillance Team",
    "Management of Schedules and Equipment",
  ],
  personal: ["Reactive", "Organized", "Autonomous", "Rigorous", "Curious"],
};

const Skills = () => {
  return (
    <section className="bg-white py-12" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-lcenter mb-8 font-heading">
          # Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 font-heading">
              °/ Technical Skills
            </h3>
            <ul className="list-disc list-inside">
              {skills.technical.map((skill, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 font-heading">
              °/ Security Skills
            </h3>
            <ul className="list-disc list-inside">
              {skills.security.map((skill, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 font-heading">
              °/ Personal Skills
            </h3>
            <ul className="list-disc list-inside">
              {skills.personal.map((skill, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
