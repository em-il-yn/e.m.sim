import React from 'react';

const Communications = () => {
    return (
        <section class="gallery">
            <p class="tech">Communications Experience</p>
            <p class="comms">I obtained a degree in Communication from SFU. My work experience demonstrates proven effective professional and strategic communication skills. I have demonstrated leadership, and creativity in roles supervising and collaborating with a communications team. Here are some samples of my design work.</p>

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
