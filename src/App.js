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
      transition:
        'background-color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), font-weight 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75)',
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <Link
        to={props.to}
        style={btnStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.text}
      </Link>
    );
  };

const Footer = () => {
    return (
        <footer class="page">
            <section class="contact">
                <h3> Contact </h3>
                <p> Vancouver BC | esim01@student.ubc.ca | 250 463 3294 </p>
            </section>
        </footer>
    )
}
const Communications = () => {
    return (
        <section class="column">
            <p class="tech">Communications Experience</p>
            <section class="row">
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">Software <br /> Developer <br /> Intern</h3>
                        <p class="circle">
                            <p class="date">07/21 – 03/22</p>
                            FTL Computing
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>BASH scripting</li>
                        <li>VLAN configuration</li>
                        <li>Network access control</li>
                        <li>Network administration</li>
                        <li>Software development</li>
                        <li>Team collaboration</li>
                    </ul>
                </skillContainer>
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">WearWise <br /> Application</h3>
                        <p class="circle">
                            <p class="date">02/23 – 03/23</p>
                            UBC CPSC 210
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>Java development</li>
                        <li>Object-oriented programming</li>
                        <li>Data tracking</li>
                        <li>Cost per wear analysis</li>
                        <li>Brand tracking</li>
                        <li>Debugging</li>
                        <li>JUnit testing</li>
                        <li>Test-driven development (TDD)</li>
                        <li>JSON parsing</li>
                    </ul>
                </skillContainer>
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">This <br /> Website</h3>
                        <p class="circle">
                            <div class="date">05/23</div>
                            Personal Project
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>ReactJS development</li>
                        <li>Interactive study tool</li>
                        <li>User interface design</li>
                        <li>Collaboration</li>
                        <li>Teamwork</li>
                    </ul>
                </skillContainer>
            </section>
        </section>
    )
}

const Technical = () => {
    return (

        <section class="column">
            <p class="tech">Technical Experience</p>
            <section class="row">
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">Software <br /> Developer <br /> Intern</h3>
                        <p class="circle">
                            <p class="date">07/21 – 03/22</p>
                            FTL Computing
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>BASH scripting</li>
                        <li>VLAN configuration</li>
                        <li>Network access control</li>
                        <li>Network administration</li>
                        <li>Software development</li>
                        <li>Team collaboration</li>
                    </ul>
                </skillContainer>
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">WearWise <br /> Application</h3>
                        <p class="circle">
                            <p class="date">02/23 – 03/23</p>
                            UBC CPSC 210
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>Java development</li>
                        <li>Object-oriented programming</li>
                        <li>Data tracking</li>
                        <li>Cost per wear analysis</li>
                        <li>Brand tracking</li>
                        <li>Debugging</li>
                        <li>JUnit testing</li>
                        <li>Test-driven development (TDD)</li>
                        <li>JSON parsing</li>
                    </ul>
                </skillContainer>
                <skillContainer>
                    <section class="row">
                        <h3 class="circle">This <br /> Website</h3>
                        <p class="circle">
                            <div class="date">05/23</div>
                            Personal Project
                        </p>
                    </section>
                    <h3 class="skills">Skills</h3>
                    <ul class="bullet-points">
                        <li>ReactJS development</li>
                        <li>Interactive study tool</li>
                        <li>User interface design</li>
                        <li>Collaboration</li>
                        <li>Teamwork</li>
                    </ul>
                </skillContainer>
            </section>
        </section>

    )
}

const About = () => {
    return (
        <site-wrapper>
        <section class="column">
            <section class="row">
                <section class="column">
                    <h1>Emilyn Sim</h1>
                    <h2  style={{ alignSelf: 'left' }}>UBC Computer Science</h2>
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
        </site-wrapper>
    )
}

const App = () => {
    return (

        <div>
            <Cursor />
            <header className="routes">
                <p className="pagetop">Emilyn Sim</p>
                <nav>
                    <Button text="About Me" to="/" />
                    <Button text="Technical Experience" to="/Technical" />
                    <Button text="Communications Experience" to="/Communications" />
                </nav>
            </header>

            <Routes>

                <Route path='/' element={<About />} />
                <Route path='Technical' element={<Technical />} />
                <Route path='/Communications' element={<Communications />} />

            </Routes>

            <Footer className="page" />
        </div>
    )
}


export default App;
