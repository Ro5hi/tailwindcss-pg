import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { HashLink as Link } from 'react-router-hash-link';
import App from './App';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

describe("component rendering", () => {
  it("renders App component", () => {
    shallow(<App />);
  });
  it("renders Nav component with Nav items", () => {
    shallow(<Nav />)
  })
})
