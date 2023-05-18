import React, { useState } from "react";
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
        <button
            style={btnStyle}
            onMouseOver={handleHover}
            onMouseOut={handleHover}
        >
            {props.text}
        </button>
    );
};

const Communications = () => {
    return (
        <html>
            <Cursor />

            <div class="parent">

                <div class="div1">
                    <p class="name">Communications</p>
                    <p class="cs">UBC Computer Science</p>
                </div>

                <div class="div2">
                </div>

                <div class="div3">
                    <ul class="accordion-items-container">
                        <li class="accordion-item">
                            <div class="accordian-divider" />
                            <b class="accordian">
                                <a class="accordian" href="resources/SimEmilyn_Resume.pdf" alt="Resume">Resume</a>
                            </b>
                        </li>
                        <li class="accordion-item">
                            <div class="accordian-divider" />
                            <b class="accordian">
                                <a class="accordian" href="www.facebook.com" alt="LinkedIn">LinkedIn</a>
                            </b>
                        </li>
                        <li class="accordion-item">
                            <div class="accordian-divider" />
                            <b class="accordian">
                                <a class="accordian" href="www.facebook.com" alt="LinkedIn">GitHub</a>
                            </b>
                            <div class="accordian-divider" />
                        </li>
                    </ul>
                </div>
            </div>
        </html>
    )
}

const Technical = () => {
    return (
        <html>
            <head>
                <title>Technical Experience</title>
            </head>
            <body>
                <Cursor />
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
            </body>
        </html>
    )
}

const About = () => {
    return (
        <html>
            <body>
                <Cursor />
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
            </body>
        </html>
    )
}

const Menu = () => {
    return (
        <div>
        <p className="pagetop">Emilyn Sim</p>
        <Router>
          <div>
            <Button text="Technical Experience">
              <Link to="/pages/Technical">Technical Experience</Link>
            </Button>
            <Button text="Communications Experience">
              <Link to="/pages/Communications">Communications Experience</Link>
            </Button>
            <Button text="About Me">
              <Link to="/pages/About">About</Link>
            </Button>
          </div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/pages/Communications" element={<Communications />} />
            <Route path="/pages/Technical" element={<Technical />} />
          </Routes>
          <div>
            <i>Emilyn Sim 2023</i>
          </div>
        </Router>
      </div>
    )
}
const App = () => {
    return (
        <html>
            <head>
                <title>Emilyn Sim</title>
            </head>
            <header>
                <Menu />
            </header>
        </html>
    );
}

export default App;
