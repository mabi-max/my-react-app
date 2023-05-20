import React from "react";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App(){
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    ) 
}

export default App;