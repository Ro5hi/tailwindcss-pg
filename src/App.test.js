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
  });
  it("renders Info component with grid", () => {
    const infoSection = shallow(<Info />);
    const infoGrid = (<div className="grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                          <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                              <img class="h-40 mx-auto" src="/1.jpg" alt="1"></img>
                              <div className="select-none text-center p-2 mx-8 text-m text-black">
                                  Driven by our mission to contribute to a better Earth.
                              </div>
                          </div>
                          <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                              <img class="h-40 mx-auto" src="/2.jpg" alt="2"></img>
                              <div className="select-none text-center p-2 mx-8 text-m text-black">
                                  Repurposing old hardware into functional products.
                              </div>
                          </div>
                          <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                              <img class="h-40 mx-auto" src="/3.jpg" alt="3"></img>
                              <div className="select-none text-center p-2 mx-8 text-m text-black">
                                  Using technology as a solution for efficiency and control.
                              </div>
                          </div>
                      </div>);
    expect(infoSection.contains(infoGrid)).toEqual(true);
  });
  it("renders Contact component", () => {
    shallow(<Contact />);
  });
  it("renders Footer component", () => {
    shallow(<Footer />)
  });
})
