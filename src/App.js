import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cursor from "./Events/cursorEvent";


const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const btnStyle = {
        fontFamily: 'Trebuchet MS',
        fontSize: '15px',
        color: isHovered ? '#23481E' : '#DDCCDF',
        backgroundColor: isHovered ? '#DDCCDF' : 'transparent',
        fontWeight: isHovered ? 'bold' : 'normal',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5rem',
        margin: '0rem 0rem 1rem 1rem',
        width: '14.5em',
        border: '1px solid #E5DFF5',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
        transition: 'background-color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), font-weight 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75)',
    };

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Link to={props.to} style={btnStyle} onMouseOver={handleHover} onMouseOut={handleHover}>
            {props.text}
        </Link>
    );
};

const Footer = () => {
    return (
        <footer>
            <section class="contact">
                <h2> Contact </h2>
                <p> Vancouver BC | esim01@student.ubc.ca | 250 463 3294 </p>
            </section>
        </footer>
    )
}
const Communications = () => {
    return (
        <section class="column">
            <section class="row">
                <section class="column">
                    <h1>Emilyn Sim</h1>
                    <h2>BEEP BEEP</h2>
                    <p>I am a computer science student at UBC with a background in communications. I have a passion for technology and a creative problem-solving. My technical skills include Java, BASH, HTML, CSS, and ReactJS. </p>
                </section>
                <section class="column">
                    <a class="links" href="https://www.linkedin.com/in/emilyn-sim/">LinkedIn</a>
                    <a class="links" href="https://github.com/em-il-yn">GitHub</a>
                </section>
            </section>
        </section>
    )
}

const Technical = () => {
    return (
        <section class="column">
            <section class="row">
                <section class="column">
                    <h1>Emilyn Sim</h1>
                    <h2>UBC Computer Science</h2>
                    <p>I am a computer science student at UBC with a background in communications. I have a passion for technology and a creative problem-solving. My technical skills include Java, BASH, HTML, CSS, and ReactJS. </p>
                </section>
                <section class="column">
                    <a class="links" href="https://www.linkedin.com/in/emilyn-sim/">LinkedIn</a>
                    <a class="links" href="https://github.com/em-il-yn">GitHub</a>
                </section>
            </section>
        </section>


    )
}

const About = () => {
    return (
        <section class="column">
            <section class="row">
                <section class="column">
                    <h1>Emilyn Sim</h1>
                    <h2>UBC Computer Science</h2>
                    <p>I am a computer science student at UBC with a background in communications. I have a passion for technology and a creative problem-solving. My technical skills include Java, BASH, HTML, CSS, and ReactJS. </p>
                </section>
                <section class="column">
                    <img class="gallery" src={require('./resources/headshot.jpeg')}></img>
                    <a class="links" href={require('./resources/SimEmilyn_Resume.pdf')} alt="Resume">Resume</a>
                    <a class="links" href="https://www.linkedin.com/in/emilyn-sim/">LinkedIn</a>
                    <a class="links" href="https://github.com/em-il-yn">GitHub</a>
                </section>
            </section>
        </section>
    )
}

const App = () => {
    return (

        <div>
            <Cursor />
            <header>
                <p class="pagetop">Emilyn Sim</p>
                <div>
                    <Button text="Technical Experience" to="/Technical" />
                    <Button text="Communications Experience" to="/Communications" />
                    <Button text="About Me" to="/" />
                </div>
            </header>

            <Routes>

                <Route path='/' element={<About />} />
                <Route path='Technical' element={<Technical />} />
                <Route path='/Communications' element={<Communications />} />

            </Routes>

            <Footer />
            <div>
                <br />
                <em>Emilyn Sim 2023</em>
            </div>
        </div>
    )
}


export default App;
