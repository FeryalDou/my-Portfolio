import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-green-700 text-2xl font-Montserrat font-bold">
            <a href="#">Feryal DOUBALI</a>
          </div>

          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-green-700 hover:text-gray-950 font-Montserrat"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-green-700 hover:text-gray-900 font-Montserrat"
            >
              Projects
            </a>
            <a
              href="#educations"
              className="text-green-700 hover:text-gray-900 font-Montserrat"
            >
              Educations
            </a>
            <a
              href="#skills"
              className="text-green-700 hover:text-gray-900 font-Montserrat"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-green-700 hover:text-gray-900 font-Montserrat"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a
              href="#about"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
            >
              Projects
            </a>
            <a
              href="#education"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
            >
              Education
            </a>
            <a
              href="#certifications"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
