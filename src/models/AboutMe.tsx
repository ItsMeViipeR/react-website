import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const NAME: string = "ViipeR";

function calculateAge(birthday: Date): number {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function AboutMe() {
    return (
        <div className="App">
            <header>
                <Navbar name={NAME} />
            </header>

            <main>
                <div className="page-content">
                    <h1>Who am I?</h1><br />
                    <p>I'm Nicolas, a {calculateAge(new Date("2005-04-13"))} years old french developer. I'm passionate by programming and computer science in general.</p>
                </div>
            </main>

            <footer>
                <Footer name={NAME} />
            </footer>
        </div>
    );
}