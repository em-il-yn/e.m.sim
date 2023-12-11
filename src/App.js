import React, { useState } from "react";
import { BrowserRouter as Redirect, Routes, Route, Link } from 'react-router-dom';
import Cursor from "./Events/cursorEvent";
import Button from "./Events/button";
import Footer from "./Components/Footer";
import Communications from "./Components/Communications";
import Technical from "./Components/Technical";
import About from "./Components/About";

const App = () => {

    return (

        <div>
            <Cursor />
            <header className="routes">
                <p className="pagetop">E.M. Sim</p>
                <nav>
                    <Button text="About Me" to="/About" />
                    <Button text="Technical Projects" to="/Technical" />
                    <Button text="Communications Experience" to="/Communications" />
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<About />} />
                <Route path='/About' element={<About />}/>
                <Route path='/Technical' element={<Technical />} />
                <Route path='/Communications' element={<Communications />} />
            </Routes>
            <Footer className="page" />
        </div>
    )
}


export default App;
