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
    const navBar = shallow(<Nav />);
    const navItems = (<div className="text-black mx-auto p-4 text-center">
        <Link smooth to="#info" className="p-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-25">
            INFO
        </Link>
        <Link smooth to="#contact" className="p-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-25">
            CONTACT
        </Link>
    </div>);
    expect(navBar.contains(navItems)).toEqual(true);
  });
  it("renders Hero component with logo", () => {
    const hero = shallow(<Hero />);
    const imgSrc = (<img src="/easternwaves.svg" alt="graphic"></img>);
    expect(hero.contains(imgSrc)).toEqual(true);
  })
})
