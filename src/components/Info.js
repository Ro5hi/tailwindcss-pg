import React from 'react';

const Info = () => {
    return(
        <div className="flex flex-wrap justify-center place-items-center bg-black w-full h-full text-center overflow-hidden md:object-contain md:mx-auto" id="info">
            <div className="grid grid-rows-3 gap-2 pt-2 pb-2 tn:grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                <div class="bg-white space-y-8 h-64 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto md:object-scale-down" src="/1.jpg" alt="1"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Driven by our mission to contribute to a better Earth.
                    </div>
                </div>
                <div class="bg-white space-y-8 h-64 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto sm:object-scale-down" src="/2.jpg" alt="2"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Repurposing old hardware into functional products.
                    </div>
                </div>
                <div class="bg-white space-y-8 h-64 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto sm:object-scale-down" src="/3.jpg" alt="3"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Using technology as a solution for efficiency and control.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;