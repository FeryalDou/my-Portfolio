import React from "react";
import linkedinIcon from "../assets/icons/linkedinIcon.png";
import githubIcon from "../assets/icons/githubIcon.png";
import emailIcon from "../assets/icons/email.png";

const Contact = () => {
  return (
    <section className="bg-white-100 py-12" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-Montserrat mb-8"># Contact</h2>
        <div className="space-x-4 flex justify-center items-center">
          <p className="text-lg flex items-center">
            <a
              href="mailto:feryaldoubali@gmail.com"
              className="text-navy-200 font-Montserrat hover:underline"
            >
              <img
                src={emailIcon}
                alt="Email Icon"
                className="w-16 h-16 mr-2"
              />
            </a>
          </p>
          <p className="text-lg flex items-center">
            <a
              href="https://www.linkedin.com/in/feryal-doubali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-200 hover:underline flex items-center"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn Icon"
                className="w-16 h-16 mr-2"
              />
            </a>
          </p>
          <p className="text-lg flex items-center">
            <a
              href="https://github.com/FeryalDou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-200 hover:underline flex items-center"
            >
              <img
                src={githubIcon}
                alt="GitHub Icon"
                className="w-16 h-16 mr-2"
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
