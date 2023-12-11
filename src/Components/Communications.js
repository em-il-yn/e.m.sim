import React from 'react';

const Communications = () => {
    return (
        <section class="gallery">
            <p class="tech">Communications Experience</p>
            <p class="comms">I received a Bachelor of Arts from Simon Fraser University in 2021 where I majored in Communications and minored in Fine Arts. My creaetive background in arts and communications has allowed me to approach computer science from a uniquely interdiscinplinary perspective. Here is a portfolio of a few of my designs.</p>

            <div class="image-container">
                <div class="image-overlay">
                    <p class="image-description">Skoden Indigenous Film Festival 2021</p>
                </div>
                <img src={require('./../Resources/Skoden1.png')} class="comms"></img>

            </div>

            <div class="image-container">
                <img src={require('./../Resources/Skoden2.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">Skoden Indigenous Film Festival 2021</p>
                </div>
            </div>

            <div class="image-container">
                <img src={require('./../Resources/Skoden3.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">Skoden Indigenous Film Festival 2021</p>
                </div>
            </div>

            <div class="image-container">
                <img src={require('./../Resources/SFU1.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">SFU 2020</p>
                </div>
            </div>

            <div class="image-container">
                <img src={require('./../Resources/SFU2.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">SFU 2020</p>
                </div>
            </div>
<section class="gallery-vert">
            <div class="image-container">
                <img src={require('./../Resources/SFU4.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">SFU 2020</p>
                </div>
            </div>

            <div class="image-container">
                <img src={require('./../Resources/CJSF1.png')} class="comms"></img>
                <div class="image-overlay">
                    <p class="image-description">CJSF 2021</p>
                </div>
            </div>
            </section>
        </section>
    )
}

export default Communications;
