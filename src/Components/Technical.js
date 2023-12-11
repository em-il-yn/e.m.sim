import React from 'react';

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

export default Technical;