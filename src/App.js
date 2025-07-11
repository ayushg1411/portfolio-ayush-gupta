import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
