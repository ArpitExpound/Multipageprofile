import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Expound from './pages/Expound';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Expound />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}


export default App