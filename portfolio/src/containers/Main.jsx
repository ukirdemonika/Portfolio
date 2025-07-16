import React from 'react';
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';    
import Education from '../pages/education/Education';
import Projects from '../pages/projects/Projects';
import MySkills from '../pages/myskills/Myskills';
import Contact from '../pages/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';    
import Layout from './layout';
const Main = (props) => {
    
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout theme={props.theme} />} />
                <Route index element={<Home theme={props.theme} />} />
                <Route path="/experience" element={<Experience theme={props.theme} />} />
                <Route path="/education" element={<Education theme={props.theme} />} />
                <Route path="/projects" element={<Projects theme={props.theme} />} />
                <Route path="/myskills" element={<MySkills theme={props.theme} />} />
                <Route path="/contact" element={<Contact theme={props.theme} />} />
                <Route path="/splash" element={<Contact theme={props.theme} />} />
                <Route path="*" element={<Home theme={props.theme} />} />
            </Routes>
        // </BrowserRouter>
    )
}
export default Main;