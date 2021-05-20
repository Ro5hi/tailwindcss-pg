import React from 'react';

const Contact = () => {
    return (
        <div className="select-none flex bg-gray-800 h-screen w-screen space-x-8 justify-center items-center">
            <p className="text-white text-2xl">Need support? <br/>Contact us anytime.</p>
            <div className="w-1/16">
                <input type="text" className="h-64 w-72 text-center" placeholder="Type your message here."></input>
                <div className="relative w-full bottom-0 bg-green-400 text-white text-center">
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;