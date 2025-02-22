import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import AJLogo from "./assets/AJLogo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AJLogo} alt="AJ Logo" className="logo" />
        <h1>Welcome to AJ's Art Portfolio</h1>
        <img src={AJLogo} alt="AJ Logo" className="logo" />
      </header>
      <Gallery />
      <section className="credits">
        <h2>Special Thanks and Credits</h2>
        <ul>
          <li>
            <a href="https://www.pinterest.com/wcnclair/" target="_blank" rel="noopener noreferrer">
              wcnclair
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/CathyDomack127/teenage-mutant-ninja-turtles/" target="_blank" rel="noopener noreferrer">
              Catherine
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/TaleOfLostTime/" target="_blank" rel="noopener noreferrer">
              neon angel
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/alisakuchinawa/" target="_blank" rel="noopener noreferrer">
              Alisakuchinawa (or They're still laughing)
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/FaeTheFaeEstFae/" target="_blank" rel="noopener noreferrer">
              Faefae Joy
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/petrenkovika2511/" target="_blank" rel="noopener noreferrer">
              TARINGILL
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/theatersbi/" target="_blank" rel="noopener noreferrer">
              FPTD_ily
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/James_Barrington/" target="_blank" rel="noopener noreferrer">
              James Barrington
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/ghostiegirl1111/" target="_blank" rel="noopener noreferrer">
              Ghostie Girl
            </a>
          </li>
        </ul>
      </section>
      <footer className="App-footer">
        <p>© 2023 AJ's Art Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
