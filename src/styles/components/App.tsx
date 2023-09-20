import React from 'react';
import './App.css';
import Navbar from "../../models/Navbar";
import Footer from "../../models/Footer";

const NAME: string = "ViipeR";

function App() {
  return (
    <div className="App">
        <header>
            <Navbar name={NAME} />
        </header>

        <main>
            <div className="content">

            </div>
        </main>

        <footer>
            <Footer name={NAME} />
        </footer>
    </div>
  );
}

export default App;