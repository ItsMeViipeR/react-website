import React from 'react';

import '../styles/components/App.css';
import "../styles/default.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NAME: string = "ViipeR";

function Projects() {
    return (
        <div className="App">
            <header>
                <Navbar name={NAME} />
            </header>

            <main>
                <div className="page-content">
                    <h1>Test</h1>
                </div>
            </main>

            <footer>
                <Footer name={NAME} />
            </footer>
        </div>
    );
}

export default Projects;