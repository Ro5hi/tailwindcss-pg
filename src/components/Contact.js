import React from 'react';

const Contact = () => {
    return (
        <div className="select-none flex bg-gray-800 h-screen space-x-8 justify-center items-center" id="contact">
            <p className="text-white text-2xl md:text-left">Changing the world? <br/>Let us know.</p>
            <div className="w-1/16">
                <input type="text" className="h-64 w-72 text-center focus:outline-none" placeholder="Type your message here."></input>
                <div className="relative bottom-0 bg-green-400 text-white text-center">
                    <button class="w-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;