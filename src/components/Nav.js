import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <div className="flex fixed justify-between items-center w-screen h-16 bg-yellow-300 relative">
            <div className="text-black p-4 text-center">
                <Link smooth to="#info" className="p-4">
                    INFO
                </Link>
                <Link smooth to="#contact" className="p-4">
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Nav;