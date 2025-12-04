import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Browse from './pages/Browse';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
