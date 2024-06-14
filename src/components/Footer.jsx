import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-800 text-gray py-2">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2024 Feryal Doubali. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/feryal-doubali"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/FeryalDou"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="mailto:feryaldoubali@gmail.com"
            className="hover:text-gray-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
