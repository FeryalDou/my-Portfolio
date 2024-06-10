// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

// Importez vos autres composants (Projects, Education, Certifications, Contact) ici

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="about">
          <About />
        </section>
        {/* Ajoutez les autres sections ici */}
      </main>
    </div>
  );
}

export default App;
