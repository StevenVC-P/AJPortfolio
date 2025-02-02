import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to AJ's Art Portfolio</h1>
      </header>
      <Gallery />
      <section className="credits">
        <h2>Special Thanks and Credits</h2>
        <p>Thanks to all contributors and supporters.</p>
        {/* Add more credits as needed */}
      </section>
      <footer className="App-footer">
        <p>© 2023 AJ's Art Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
