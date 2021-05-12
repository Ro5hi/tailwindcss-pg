import './App.css';
import React from 'react';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import Info from './components/Info.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
