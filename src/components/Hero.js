import React from "react";

const Hero = () => {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="object-fill">
                <img src="/easternwaves.svg" alt="graphic"></img>
                <div className="select-none text-6xl text-center italic text-opacity-70 font-bold">
                    ONBOARD
                    <p className="text-center text-lg p-4 italic text-opacity-35 font-light">
                        Upcycling old hardware into new tech.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;