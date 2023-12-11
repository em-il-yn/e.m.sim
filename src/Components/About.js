import React from 'react';

const About = () => {
    return (
            <section class="column">
                <section class="row">
                    <section class="columnEvil" style={{alignSelf: 'center'}}>
                        <h1>E.M. Sim</h1>
                        <h2 style={{ alignSelf: 'left' }}>UBC Computer Science</h2>
                        <p>I am a UBC Computer Science student with a professional background in strategic communications. I have experience with Java, JavaScript, BASH, HTML, CSS, Racket, C++, C, PHP, and R. Explore my website for samples of my work.</p>
                    </section>
                    <section class="column">
                        <a class="links" href={require('./../Resources/SimEM_Resume.pdf')} alt="Resume">Resume</a>
                        <a class="links" href="https://www.linkedin.com/in/emilyn-sim/">LinkedIn</a>
                        <a class="links" href="https://github.com/em-il-yn">GitHub</a>
                    </section>
                </section>
            </section>
    )
}

export default About;