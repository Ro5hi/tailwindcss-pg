import './App.css';
import React from 'react';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
