import React from 'react';

const About = () => {
    return (
            <section class="column">
                <section class="row">
                    <section class="columnEvil" style={{alignSelf: 'center'}}>
                        <h1>E.M. Sim</h1>
                        <h2 style={{ alignSelf: 'left' }}>UBC Computer Science</h2>
                        <p>I am a computer science student at UBC with a background in communications. I have a passion for technology and a creative problem-solving. My technical skills include Java, JavaScript, ReactJS, HTML, CSS, BASH, and ReactJS. </p>
                    </section>
                    <section class="column">
                        <a class="links" href={require('./../Resources/SimEmilyn_Resume.pdf')} alt="Resume">Resume</a>
                        <a class="links" href="https://www.linkedin.com/in/emilyn-sim/">LinkedIn</a>
                        <a class="links" href="https://github.com/em-il-yn">GitHub</a>
                    </section>
                </section>
            </section>
    )
}

export default About;