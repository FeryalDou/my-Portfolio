// src/components/About.js

import React from "react";

const About = () => {
  return (
    <section className="bg-gray-200 py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src="src/assets/image/portrait.jpg"
            alt="Feryal Doubali "
            className="w-40 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">About Me...</h2>
          <div className=" text-justify text-lg mb-2">
            <p className="mb-2">
              My name is Feryal, and I am from Rennes, Brittany and I live in
              Paris. I am a recently graduated web developer with 20 years of
              rich experience in the security field. Throughout my previous
              career, I held various positions that allowed me to develop key
              skills such as organization, availability, and the ability to work
              effectively in a team and under pressure. This versatility and
              rigor, acquired over the years, are assets that I now bring to the
              world of web development.
            </p>
            <p className="mb-2">
              My transition to web development was motivated by a desire to take
              on new challenges and continue evolving professionally. During my
              training at Ironhack, I quickly confirmed that this path was the
              right fit for me. I was able to reveal my potential and acquire
              the technical skills necessary to succeed in this field. My
              ability to adapt and learn quickly, combined with my experience in
              security, offers me a unique perspective to tackle problems and
              develop secure and efficient solutions.
            </p>
            <p>
              I am currently seeking new opportunities where I can contribute as
              a web developer. Whether working alone or in a team, I am ready to
              leverage my experience, skills, and motivation to develop
              innovative and secure projects. I am confident that my unique
              perspective will be a valuable asset to any company looking to
              strengthen its web development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
