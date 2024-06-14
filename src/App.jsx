// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Educations from "./components/Educations";
import Footer from "./components/Footer";

// Importez vos autres composants (Projects, Education, Certifications, Contact) ici

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="educations">
          <Educations />
        </section>
        {/* Ajoutez les autres sections ici */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
