import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <div className="flex flex-col fixed w-screen">
            <div className="w-full z-50 justify-between items-center h-16 bg-yellow-300 relative">
                <div className="sticky text-black mx-auto p-4 text-center">
                    <Link smooth to="#info" className="p-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-25">
                        INFO
                    </Link>
                    <Link smooth to="#contact" className="p-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-25">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;