import Hero from './Hero';
import Nav from './Nav';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="overflow-hidden w-full">
            <Nav />
            <Hero />
            <Info />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;