import React from 'react';

const Contact = () => {
    return (
        <div className="flex bg-gray-800 h-screen justify-center items-center">
            <div className="">
                <input type="text" className="text-center h-32 w-72" placeholder="Happy to help. Send us a message!"></input>
            <div className="bg-black text-white text-center">
                <button>Send</button>
            </div>
            </div>
        </div>
    );
}

export default Contact;