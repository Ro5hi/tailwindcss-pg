import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

describe("Renders components", () => {
  it("renders App component"), () => {
    shallow(<App />)
  }
})
