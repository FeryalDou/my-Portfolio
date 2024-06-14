// src/components/Projects.js

import React from "react";

const projects = [
  {
    title: "Project One",
    description: "Description of project one. It does amazing things.",
    imageUrl: "/images/project1.jpg", // Assurez-vous que l'image est accessible
    projectUrl: "https://github.com/feryal-doubali/project-one",
  },
  {
    title: "Project Two",
    description: "Description of project two. It also does amazing things.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/feryal-doubali/project-two",
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <section className="bg-white py-12" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8"> My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.projectUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
