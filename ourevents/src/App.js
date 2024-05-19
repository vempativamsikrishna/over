// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BasicExample from './Components/Navbar';
import UncontrolledExample from './Components/Homepage';
import About from './Components/About';
import ContactUS from './Components/ContactUS';
import Contac from './Components/ContactUS';
import Services from './Components/Services';

function App() {
  return (
    <Router>
      <BasicExample/>
      <Routes>
        <Route path="/" element={<UncontrolledExample/>} />
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
        <Route path="/new-path" element={<h2>New Path</h2>} />
        <Route path="/About-Us" element={<About/>} />
        <Route path="/Contact-Us" element={<Contac/>} />
        <Route path="/Our-Services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
