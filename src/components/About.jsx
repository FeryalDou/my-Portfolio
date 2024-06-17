import React from "react";

const About = () => {
  return (
    <section className="bg-gray-200 py-12" id="about">
      <div className="container mx-auto px-4 lg:px-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <img
            src="src/assets/portrait.jpg"
            alt="Feryal Doubali"
            className="w-34 h-28 rounded-lg mb-2 lg:mb-0 lg:block"
          />
          <div className="text-center lg:text-center">
            <h2 className="text-2xl font-Montserrat mb-4">Hi 👋 I'm Feryal,</h2>
            <div className="text-justify text-lg mb-8 font-sans">
              <p className="mb-6 ">
                After solidifying my expertise in security, I sought to broaden
                my professional horizons into web development. I subsequently
                completed an intensive bootcamp, emerging certified in
                full-stack development from Ironhack Paris. With a strong
                background in team management, communication, and
                problem-solving, I am determined to leverage these skills in
                innovative web projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
