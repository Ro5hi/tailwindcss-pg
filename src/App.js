import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import Info from './components/Info.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Switch>
          <Route component={Nav} />
          <Route component={Hero} />
          <Route component={Info} />
          <Route component={Contact} />
          <Route component={Footer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
