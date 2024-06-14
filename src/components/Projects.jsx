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
    description: "Description of project two. It also does amazing things.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/FeryalDou/to-do-app",
  },
  {
    title: "MEGALITH",
    description: "Description of project two. It also does amazing things.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "https://github.com/FeryalDou/Megalith-",
  },
  {
    title: "PRIME PROJECT",
    description:
      "This project is a collaborative project manager aiming to allow users to track and manage their tasks and projects.",
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
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold font-Montserrat mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 font-Montserrat text-justify">
                {project.description}
              </p>
              <a
                href={project.projectUrl}
                className="text-green-800 font-Montserrat hover:underline"
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
