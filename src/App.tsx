import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;