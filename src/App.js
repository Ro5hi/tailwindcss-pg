import './App.css';
import React from 'react';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import Info from './components/Info.js';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Info />
    </div>
  );
}

export default App;
