import React from 'react';
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';    
import Education from '../pages/education/Education';
import Projects from '../pages/projects/Projects';
import MySkills from '../pages/myskills/Myskills';
import Contact from '../pages/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';    
import Layout from './layout';
const Main = (theme) => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout theme={theme} />} />
                <Route index element={<Home theme={theme} />} />
                <Route path="/experience" element={<Experience theme={theme} />} />
                <Route path="/education" element={<Education theme={theme} />} />
                <Route path="/projects" element={<Projects theme={theme} />} />
                <Route path="/myskills" element={<MySkills theme={theme} />} />
                <Route path="/contact" element={<Contact theme={theme} />} />
                <Route path="/splash" element={<Contact theme={theme} />} />
                <Route path="*" element={<Home theme={theme} />} />
            </Routes>
        // </BrowserRouter>
    )
}
export default Main;