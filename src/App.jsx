import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Homepage from './Component/Homepage';
import Section from './Component/Section';
import Main from './Component/Main';
import Count from './Component/Count';
import Mainfile from "./Component/mainfile"

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        <Routes>

        <Route path="/" element={<Mainfile />} />

          <Route path="/hero" element={<Hero />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/section" element={<Section />} />
          <Route path="/count" element={<Count />} />
          <Route path="/main" element={<Main />} />
          {/* <Route path="/college" element={<College />} />
          <Route path="/college" element={<College />} /> */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
