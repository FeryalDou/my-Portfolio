import React from "react";

const projects = [
  {
    title: "MEMORY DBZ",
    description:
      "Memory DBZ is a web-based memory game inspired by Dragon Ball Z characters and themes. It challenges players to match pairs of cards featuring iconic DBZ images. Built with HTML, CSS, and JavaScript, this game offers a nostalgic experience for fans while testing memory skills.",
    imageUrl: "/images/project1.jpg",
    projectUrl: "https://github.com/FeryalDou/Memory-dbz",
  },

  {
    title: "TO-DO-LIST",
    description:
      "The To-Do List is a simple and efficient web application that allows users to manage their daily tasks. Developed with React, CSS, and JavaScript, this application highlights essential features for optimal task management. This project was built through pair programming, demonstrating strong collaboration and teamwork skills.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/FeryalDou/to-do-app",
  },
  {
    title: "MEGALITH",
    description:
      "The Megaliths in France project is a web application designed to catalog and display megalithic sites across France. Using maps created with Leaflet, CSS, JavaScript, and various React libraries, this project provides an interactive way to explore these historical sites. The development of this project was done through pair programming, showcasing strong collaboration and teamwork skills.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/FeryalDou/Megalith-",
  },
  {
    title: "PRIME PROJECT",
    description:
      "The Project Manager is a comprehensive web application developed as my final project at Ironhack. This application, built with React, Tailwind CSS, and JavaScript, functions similarly to a to-do list but includes additional features to enhance project management. Various React libraries were utilized to enrich the functionality and user experience. ",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/FeryalDou/Project-manager-frontend",
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-12" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-Montserrat text-center mb-8">
          {" "}
          # My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-50 transition duration-300 ease-in-out"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl text-center font-semibold font-Montserrat mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 font-Montserrat text-justify">
                {project.description}
              </p>
              <a
                href={project.projectUrl}
                className="text-gray-700 font-Montserrat hover:underline"
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
